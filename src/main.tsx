import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { observer } from 'mobx-react';
import ThemeModeButton from './components/app/ThemeModeButton';
import Header from './components/common/Header';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
const { appStore } = store();

const GlobalStyled = createGlobalStyle`
  body {
    background-color: ${({ theme })=> theme.color};
    color: ${({ theme })=> theme.text};
    margin: 0;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default observer(function Main() {
  return (
    <ThemeProvider theme={appStore.gTheme()}>
      <BrowserRouter>
        <Header />
        <App />
        <GlobalStyled />
        <ThemeModeButton />
      </BrowserRouter>
    </ThemeProvider>
  )
})