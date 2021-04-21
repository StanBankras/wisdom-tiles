import { configuration } from '../index.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvasWidth = 400;

export default function() {
  const pattern = new Image();
  pattern.src = '../../assets/img/' + configuration.pattern;
  pattern.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPattern(pattern);
    if(configuration.quote) {
      ctx.font = 'bold 20px Arial';
      ctx.fillStyle = configuration.color;
      ctx.fillText(configuration.quote, 100, 100);
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