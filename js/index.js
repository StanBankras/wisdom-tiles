import './state-manager.js';
import { initColors } from './colors.js';
import { checkConfiguration } from './state-manager.js';
import { initButtons } from './quote.js';

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