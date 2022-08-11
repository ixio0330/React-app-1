import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { observer } from 'mobx-react';
import ThemeModeButton from './components/app/ThemeModeButton';
import store from './store';
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
  p {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text}
  }
`;

export default observer(function Main() {
  return (
    <ThemeProvider theme={appStore.gTheme()}>
      <App />
      <GlobalStyled />
      <ThemeModeButton />
    </ThemeProvider>
  )
})