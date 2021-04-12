import { configuration } from './index.js';
import { checkConfiguration } from './state-manager.js';

export function initColors() {
  const colorsEl = document.querySelector('.colors');
  const colors = ['red', 'green'];

  colors.forEach(color => {
    const btn = document.createElement('button');
    btn.dataset.color = color;
    btn.style.backgroundColor = color;
    btn.addEventListener('click', () => selectColor(color));

    colorsEl.appendChild(btn);
  });
}

function selectColor(color) {
  const btn = document.querySelector(`[data-color=${color}]`);
  const oldBtn = document.querySelector('.colors .selected');

  if(oldBtn) oldBtn.classList.remove('selected');
  btn.classList.add('selected');
  configuration.color = color;
  checkConfiguration();
}

export function resetColor() {
  const colorBtn = document.querySelector('.colors .selected');
  if(colorBtn) colorBtn.classList.remove('selected');
  configuration.color = undefined;
}