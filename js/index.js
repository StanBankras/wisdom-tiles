import { initColors } from './modules/colors.js';
import { initButtons } from './modules/quote.js';
import updateCanvas from './modules/canvas.js';

export const defaultConfiguration = {
  color: '#ffffff',
  quoteType: 'world',
  quote: undefined,
  pattern: 'pattern.jpg'
};

export let configuration = {
  color: '#ffffff',
  quoteType: 'world',
  quote: undefined,
  pattern: 'pattern.jpg'
};

initColors();
initButtons();
updateCanvas();