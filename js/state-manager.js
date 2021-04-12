import { configuration, defaultConfiguration } from './index.js';
import { resetColor } from './colors.js';
import { resetQuote } from './quote.js';

const configContainer = document.querySelector('.wrapper .configuration');

function reset() {
  resetColor();
  removeResetButton();
  resetQuote();
}

function addResetButton() {
  if(document.getElementById('reset')) return;
  const resetBtn = document.createElement('button');
  resetBtn.id = 'reset';
  resetBtn.addEventListener('click', () => reset());
  resetBtn.innerText = 'Reset';

  configContainer.appendChild(resetBtn);
}

function removeResetButton() {
  const button = document.getElementById('reset')
  if(button) button.remove();
}

export function checkConfiguration() {
  if(JSON.stringify(configuration) === JSON.stringify(defaultConfiguration)) {
    removeResetButton();
  } else {
    addResetButton();
  }
}