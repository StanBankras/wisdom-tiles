import { configuration, defaultConfiguration } from '../index.js';
import { checkConfiguration } from './state-manager.js';

export function initColors() {
  const colorsEl = document.querySelector('.colors');
  const colors = ['#051937', '#547abd', '#7c9fd3', '#ffffff', '#f05b7c', '#54bc78', '#f38253', '#c16caa', '#7ed2e7'];

  colors.forEach(color => {
    const btn = document.createElement('button');
    btn.dataset.color = color.replace('#', 'C');
    btn.style.backgroundColor = color;
    
    if(color === '#ffffff') btn.style.borderColor = '#5f5f5f';
    if(['#001b39', '#587cd2'].includes(color)) btn.classList.add('dark');
    if(configuration.color === color) btn.classList.add('selected');

    btn.addEventListener('click', () => selectColor(color));

    colorsEl.appendChild(btn);
  });
}

function selectColor(color) {
  const btn = document.querySelector(`[data-color=${color.replace('#', 'C')}]`);
  const oldBtn = document.querySelector('.colors .selected');

  if(oldBtn) oldBtn.classList.remove('selected');
  btn.classList.add('selected');
  configuration.color = color;
  checkConfiguration();
}

export function resetColor() {
  const colorBtn = document.querySelector('.colors .selected');
  if(colorBtn) colorBtn.classList.remove('selected');
  configuration.color = defaultConfiguration.color;
}