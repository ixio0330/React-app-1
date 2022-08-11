import "styled-components";
import { Theme } from "../store/app";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}