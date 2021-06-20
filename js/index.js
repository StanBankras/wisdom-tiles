import { initColors } from './modules/colors.js';
import { initButtons } from './modules/quote.js';
import { initPatterns } from './modules/patterns.js';
import updateCanvas from './modules/canvas.js';
// import scrollDown from './modules/scroll.js';
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

export const countries = [
  'EMPTY1', 'EMPTY2', 'EMPTY3', 'HOLLAND', 'SPAIN', 'ARGENTINA', 'ARUBA', 'AUSTRALIAA', 'BELGIUM', 'CHINA', 'CR', 'FINLAND', 'FRANCE', 'GERMANY', 'GHANA', 'GUATEMALA',
  'ITALY', 'JAPAN', 'NEW ZEALAND', 'NIGERIA', 'SOUTH-AFRICA', 'SOUTHKOREA', 'SWEDEN', 'SWITZERLAND', 'ISRAEL'
];

initColors();
initButtons();
initPatterns(1);
updateCanvas();
// scrollDown();