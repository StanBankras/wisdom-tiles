import './state-manager.js';
import { initColors } from './colors.js';
import { checkConfiguration } from './state-manager.js';
import { initButtons } from './quote.js';

export const defaultConfiguration = {
  color: undefined,
  quoteType: 'world',
  quote: '',
  pattern: undefined
};

export let configuration = {
  color: undefined,
  quoteType: 'world',
  quote: '',
  pattern: undefined
};

initColors();
initButtons();