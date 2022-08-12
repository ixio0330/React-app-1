import { makeAutoObservable } from 'mobx';

type ThemeType = 'light' | 'dark';
export interface Theme {
  // base
  color: string;
  text: string;
  border: string;

  // header
  headerColor: string;
}

class AppStore {
  private ThemeMode: ThemeType = localStorage.getItem('THEME_TYPE') as ThemeType || 'light';
  private LigthTheme: Theme = {
    color: '#e9ecef',
    text: '#31302E',
    border: '#cfcfcf',
    headerColor: '#37474F',
  };
  private DarkTheme: Theme = {
    color: '#1E1E22',
    text: '#ccc',
    border: '#555',
    headerColor: '#263238',
  };
  private Theme: {[key in ThemeType]: Theme} = {
    light: this.LigthTheme,
    dark: this.DarkTheme,
  }
  
  dToggleTheme(): void {
    this.ThemeMode = this.ThemeMode === 'light' ? 'dark' : 'light';
    localStorage.setItem('THEME_TYPE', this.ThemeMode);
  }

  gThemeMode(): ThemeType {
    return this.ThemeMode;
  }

  gTheme(): Theme {
    return this.Theme[this.ThemeMode];
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export default new AppStore();