import { initColors } from './modules/colors.js';
import { initButtons } from './modules/quote.js';
import updateCanvas from './modules/canvas.js';

export const defaultConfiguration = {
  color: '#001b39',
  quoteType: 'dutch',
  quote: undefined,
  pattern: 'pattern.jpg'
};

export let configuration = {
  color: '#001b39',
  quoteType: 'dutch',
  quote: undefined,
  pattern: 'pattern.jpg'
};

initColors();
initButtons();
updateCanvas();