import { configuration } from '../index.js';
import { checkConfiguration } from './state-manager.js';
import { getRandomItem } from './utils.js';

let quotes = {};

fetch('./assets/data/quotes.json')
  .then(res => res.json())
  .then(data => {
    quotes = data;
    configuration.quote = getQuote('dutch');
    checkConfiguration();
  });

const buttons = {
  own: document.getElementById('own-quote'),
  dutch: document.getElementById('dutch-quote'),
  world: document.getElementById('world-quote'),
}

const ownQuoteEl = document.querySelector('.own-quote');

export function initButtons() {
  Object.keys(buttons).forEach(key => {
    buttons[key].addEventListener('click', () => {
      if(key === 'own') return ownQuote();
      configuration.quoteType = key;
      configuration.quote = getQuote(key);
    });
  });
}

export function resetQuote() {
  configuration.quoteType = 'world';
  configuration.quote = getQuote('world');
}

function ownQuote() {
  configuration.quoteType = 'own';
  setActiveType('own');
  ownQuoteEl.classList.add('shown');
}

function getQuote(type) {
  configuration.quoteType = type;
  setActiveType(type);
  ownQuoteEl.classList.remove('shown');
  return getRandomItem(quotes[type]).quote;
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