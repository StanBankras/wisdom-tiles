import { initColors } from './modules/colors.js';
import { initButtons } from './modules/quote.js';
import { initPatterns } from './modules/patterns.js';
import updateCanvas from './modules/canvas.js';
import './modules/share.js';

export const defaultConfiguration = {
  color: '#001b39',
  quoteType: 'dutch',
  quote: undefined,
  pattern: 'HOLLAND'
};

export let configuration = {
  color: '#001b39',
  quoteType: 'dutch',
  quote: undefined,
  pattern: 'HOLLAND'
};

export const countries = ['ARGENTINA', 'ARUBA', 'GERMANY', 'GUATEMALA', 'HOLLAND', 'ITALY', 'SWEDEN', 'SWITZERLAND', 'ITALY', 'SWEDEN', 'SWITZERLAND', 'ITALY'];

initColors();
initButtons();
initPatterns();
updateCanvas();