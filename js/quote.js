import { configuration } from './index.js';
import { checkConfiguration } from './state-manager.js';
import { getRandomItem } from './utils.js';

const quotes = {
  world: ['quote', 'werwer', 'wffsfsf', 'appapapa', 'njscxzcjsn'],
  dutch: ['quote', 'werwer', 'wffsfsf', 'appapapa', 'njscxzcjsn'],
};

const buttons = {
  own: document.getElementById('own-quote'),
  dutch: document.getElementById('dutch-quote'),
  world: document.getElementById('world-quote'),
}

const ownQuoteEl = document.querySelector('.own-quote');

export function initButtons() {
  Object.keys(buttons).forEach(key => {
    buttons[key].addEventListener('click', () => key === 'own' ? ownQuote() : getQuote(key));
  });
}

export function resetQuote() {
  configuration.quoteType = 'world';
  configuration.quote = getQuote('world');
}

function ownQuote() {
  setActiveType('own');
  configuration.quoteType = 'own';
  ownQuoteEl.classList.add('shown');
}

function getQuote(type) {
  setActiveType(type);
  ownQuoteEl.classList.remove('shown');
  configuration.quoteType = type;
  return getRandomItem(quotes[type]);
}

function setActiveType(type) {
  checkConfiguration();
  Object.keys(buttons).forEach(key => {
    if(key === type) {
      buttons[key].classList.add('selected');
    } else {
      buttons[key].classList.remove('selected');
    }
  });
}