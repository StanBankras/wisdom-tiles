import { initColors } from './modules/colors.js';
import { initButtons } from './modules/quote.js';
import { initPatterns } from './modules/patterns.js';
import updateCanvas from './modules/canvas.js';

export const defaultConfiguration = {
  color: '#001b39',
  quoteType: 'dutch',
  quote: undefined,
  pattern: 'HOLLAND.svg'
};

export let configuration = {
  color: '#001b39',
  quoteType: 'dutch',
  quote: undefined,
  pattern: 'HOLLAND.svg'
};

initColors();
initButtons();
initPatterns();
updateCanvas();