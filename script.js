'use sctrict';

const themeTag = document.querySelector('link[data-theme]');
const themeSwitcher = document.querySelector('.theme-switcher__checkbox');
const themeStatus = document.querySelector('.theme-switcher__status');

let positionY = 0;

window.addEventListener('scroll', () => {
  positionY = window.scrollY;
});

themeSwitcher.addEventListener('change', (evt) => {
  const isChecked = evt.target.checked;

  if (isChecked) {
    themeTag.setAttribute('href', 'styles/dark-theme.css');
    themeStatus.textContent = 'current theme: dark';
  } else {
    themeTag.setAttribute('href', 'styles/light-theme.css');
    themeStatus.textContent = 'current theme: light';
  }

  window.scroll(0, positionY);
});
