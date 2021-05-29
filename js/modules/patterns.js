import { configuration, countries, defaultConfiguration } from '../index.js';
import { checkConfiguration } from './state-manager.js';


export function initPatterns(currentTab) {
  const patterns = countries;
  const patternsEl = document.querySelector('.patterns');
  const patternsElInner = document.createElement('div');
  patternsElInner.classList.add('inner');

  patternsEl.innerHTML = '';
  patternsEl.appendChild(patternsElInner);
  patterns.slice(currentTab * 12 - 12, currentTab * 12).forEach(pattern => {
    const btn = document.createElement('button');
    const img = document.createElement('img');
    img.src = `./assets/img/flags/F–${pattern}.png`;
    btn.appendChild(img);
    btn.dataset.pattern = pattern;
    
    if(configuration.pattern === pattern) btn.classList.add('selected');

    btn.addEventListener('click', () => selectPattern(pattern, btn));
    patternsElInner.appendChild(btn);
  });

  createTabs(currentTab);
}

function selectPattern(pattern, btn) {
  const oldBtn = document.querySelector('.patterns .selected');

  if(oldBtn) oldBtn.classList.remove('selected');
  btn.classList.add('selected');
  configuration.pattern = pattern;
  checkConfiguration();
}

function createTabs(currentTab) {
  const patternsEl = document.querySelector('.patterns');
  const tabs = Math.ceil(countries.length / 12);
  const wrapper = document.createElement('div');
  const p = document.createElement('p');

  if(currentTab !== 1) {
    const leftArrow = document.createElement('button');
    const icon = document.createElement('img');
    icon.src = '../../assets/img/icons/chevron-left-solid.svg';
    leftArrow.appendChild(icon);
    leftArrow.classList.add('left');
    leftArrow.addEventListener('click', () => initPatterns(currentTab - 1));
    wrapper.appendChild(leftArrow);
  }

  wrapper.classList.add('tabs');
  p.innerText = `${currentTab} / ${tabs}`;
  wrapper.appendChild(p);

  if(currentTab < tabs) {
    const rightArrow = document.createElement('button');
    const icon = document.createElement('img');
    icon.src = '../../assets/img/icons/chevron-right-solid.svg';
    rightArrow.appendChild(icon);
    rightArrow.addEventListener('click', () => initPatterns(currentTab + 1));
    wrapper.appendChild(rightArrow);
  }

  patternsEl.appendChild(wrapper);
}

export function resetPattern() {
  const patternBtn = document.querySelector('.patterns .selected');
  if(patternBtn) patternBtn.classList.remove('selected');
  configuration.pattern = defaultConfiguration.pattern;
}