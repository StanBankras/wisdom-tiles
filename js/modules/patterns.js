import { configuration, countries, defaultConfiguration } from '../index.js';
import { checkConfiguration } from './state-manager.js';

export function initPatterns() {
  const patternsEl = document.querySelector('.patterns');
  const patterns = countries;

  patterns.forEach(pattern => {
    const btn = document.createElement('button');
    const img = document.createElement('img');
    img.src = `./assets/img/flags/${pattern}.png`;
    btn.appendChild(img);
    btn.dataset.pattern = pattern;
    
    if(configuration.pattern === pattern) btn.classList.add('selected');

    btn.addEventListener('click', () => selectPattern(pattern, btn));

    patternsEl.appendChild(btn);
  });
}

function selectPattern(pattern, btn) {
  const oldBtn = document.querySelector('.patterns .selected');

  if(oldBtn) oldBtn.classList.remove('selected');
  btn.classList.add('selected');
  configuration.pattern = pattern;
  checkConfiguration();
}

export function resetPattern() {
  const patternBtn = document.querySelector('.patterns .selected');
  if(patternBtn) patternBtn.classList.remove('selected');
  configuration.pattern = defaultConfiguration.pattern;
}