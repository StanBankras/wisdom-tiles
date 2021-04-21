import { configuration } from '../index.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvasWidth = 400;

export default function() {
  const pattern = new Image();
  pattern.src = '../../assets/img/' + configuration.pattern;
  pattern.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = configuration.color;
    ctx.font = '20px Arial';

    drawPattern(pattern);
    if(configuration.quote) {
      const lines = calculateWrappedText(configuration.quote, 250, 30, 100, 100);
      drawLinesCentered(lines, canvasWidth / 2, canvasWidth / 2)
    }
  }
}

function drawPattern(img) {
  const size = canvasWidth / 10;
  for(let i = 0; i < 10; i++) {
    const location = i * size;
    ctx.drawImage(img, location, 0, size, size);
    ctx.drawImage(img, 0, location, size, size);
    ctx.drawImage(img, canvasWidth - size, location, size, size);
    ctx.drawImage(img, location, canvasWidth - size, size, size);
  }
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
    const yPos = line.y + moveY;
    ctx.fillText(line.line, xPos, yPos);
  });
}