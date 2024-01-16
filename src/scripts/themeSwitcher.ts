class ThemeSwitcher {
  Classes = {
    THEME: {
      LIGHT: 'theme-light',
      DARK: 'theme-dark',
    },
  };

  Themes = {
    LIGHT: 'light',
    DARK: 'dark',
  };

  checkbox: HTMLInputElement;
  root: HTMLElement | null;
  darkThemeQuery: MediaQueryList;
  theme: string;

  constructor(checkbox: HTMLInputElement) {
    this.checkbox = checkbox;

    this.root = document.querySelector(':root');

    this.darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.theme = this.getSavedTheme();

    this.handleManualChange = this.handleManualChange.bind(this);
    this.handleAutoChange = this.handleAutoChange.bind(this);
  }

  init() {
    if (!this.theme) {
      this.darkThemeQuery.addEventListener('change', this.handleAutoChange);
    }

    this.checkbox.addEventListener('change', this.handleManualChange);
  }

  destroy() {
    this.checkbox.removeEventListener('change', this.handleManualChange);
    this.darkThemeQuery.removeEventListener('change', this.handleAutoChange);
  }

  handleAutoChange(evt: MediaQueryListEvent) {
    this.checkbox.checked = evt.matches ? true : false;
  }

  handleManualChange() {
    this.darkThemeQuery.removeEventListener('change', this.handleAutoChange);

    if (this.checkbox.checked) {
      this.setDarkTheme();
    } else {
      this.setLightTheme();
    }

    this.saveCurrentTheme();
  }

  setLightTheme() {
    this.theme = this.Themes.LIGHT;

    this.root?.classList.remove(this.Classes.THEME.DARK);
    this.root?.classList.add(this.Classes.THEME.LIGHT);
  }

  setDarkTheme() {
    this.theme = this.Themes.DARK;

    this.root?.classList.remove(this.Classes.THEME.LIGHT);
    this.root?.classList.add(this.Classes.THEME.DARK);
  }

  getSavedTheme(): string {
    return localStorage.getItem('theme') ?? '';
  }

  saveCurrentTheme() {
    localStorage.setItem('theme', this.theme);
  }
}

const themeCheckbox = document.querySelector('.theme-switcher__checkbox') as HTMLInputElement;
const themeSwitcher = new ThemeSwitcher(themeCheckbox);
themeSwitcher.init();
