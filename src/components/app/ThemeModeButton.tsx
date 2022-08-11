import store from "../../store"
import styled from "styled-components";

const ThemeModeButtonTemplate = styled.button`
  all: unset;
  padding: 10px 20px;
  border-radius: 30px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  cursor: pointer;
  border: 1px solid;
`

export default function ThemeModeButton() {
  const { appStore } = store();
  const mode = appStore.gThemeMode();
  return (
    <ThemeModeButtonTemplate onClick={ () => appStore.dToggleTheme() }>{ mode }</ThemeModeButtonTemplate>
  )
}