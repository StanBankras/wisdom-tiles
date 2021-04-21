import { initColors } from './modules/colors.js';
import { initButtons } from './modules/quote.js';

export const defaultConfiguration = {
  color: '#ffffff',
  quoteType: 'world',
  quote: '',
  pattern: undefined
};

export let configuration = {
  color: '#ffffff',
  quoteType: 'world',
  quote: '',
  pattern: undefined
};

initColors();
initButtons();