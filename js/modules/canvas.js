import { configuration } from '../index.js';
import { checkConfiguration } from './state-manager.js';

let canvasWidth = 400;
const canvas = document.getElementById('canvas');
const ctx = setupCanvas(canvas);

setTimeout(() => checkCanvasSize(), 500);

export default function() {
  const pattern = new Image();
  pattern.src = 'assets/img/patterns/' + configuration.pattern + '.svg';
  pattern.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = configuration.color;
    ctx.font = `${getFontSize()}px filson-pro`;

    drawPattern(pattern);
    if(configuration.quote) {
      const lines = calculateWrappedText(configuration.quote, canvasWidth * 0.70, 30, 100, 100);
      drawLinesCentered(lines, canvasWidth / 2, canvasWidth / 2)
    }
  }
}

// https://www.html5rocks.com/en/tutorials/canvas/hidpi/
function setupCanvas(canvas) {
  // Get the device pixel ratio, falling back to 1.
  var dpr = window.devicePixelRatio || 1;
  console.log(dpr)
  // Get the size of the canvas in CSS pixels.
  var rect = canvas.getBoundingClientRect();
  // Give the canvas pixel dimensions of their CSS
  // size * the device pixel ratio.
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  canvasWidth = rect.width * dpr;
  canvas.style.width = rect.width;
  canvas.style.width = rect.height;
  var ctx = canvas.getContext('2d');
  // Scale all drawing operations by the dpr, so you
  // don't have to worry about the difference.
  ctx.scale(dpr, dpr);
  return ctx;
}

function getFontSize() {
  return canvasWidth / 20;
}

function drawPattern(img) {
  ctx.drawImage(img, 0, 0, canvasWidth, canvasWidth);
}

function calculateWrappedText(text, maxWidth, lineHeight, x, y) {
  const words = text.split(' ');
  const lines = [];
  let line = '';

  for(let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + ' ';
    const width = ctx.measureText(testLine).width;

    if(width > maxWidth && i > 0) {
      lines.push({ line, x, y });
      line = words[i] + ' ';
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  lines.push({ line, x, y });

  return lines;
}

function drawLinesCentered(lines, centerY, centerX) {
  const averageY = lines.reduce((acc, curr) => acc + curr.y, 0) / lines.length;
  const moveY = centerY - averageY;

  lines.map(line => {
    const lineWidth = ctx.measureText(line.line).width;
    const xPos = centerX - lineWidth / 2;
    const yPos = line.y + moveY + 10;
    ctx.fillText(line.line, xPos, yPos);
  });
}

function checkCanvasSize() {
  if(window.innerWidth < 320) {
    setCanvasSize(280);
  } else if(window.innerWidth < 360) {
    setCanvasSize(300);
  } else if(window.innerWidth < 500) {
    setCanvasSize(320);
  } else {
    setCanvasSize(400);
  }
  checkConfiguration();
}

function setCanvasSize(size) {
  const dpr = window.devicePixelRatio || 1;
  size = size * dpr;
  ctx.scale(dpr, dpr);
  canvasWidth = size;
  canvas.width = size;
  canvas.style.width = size;
  canvas.height = size;
  canvas.style.height = size;
}

window.addEventListener('resize', e => checkCanvasSize());