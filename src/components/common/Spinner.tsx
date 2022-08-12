import styled, { keyframes } from "styled-components";

const SpinnerKeyFrame = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

const SpinnerTemplate = styled.div`
  &:after {
    border-radius: 50%;
    width: 3em;
    height: 3em;
  }
  overflow: hidden;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 0.3em solid rgba(255, 255, 255, 0.2);
  border-right: 0.3em solid rgba(255, 255, 255, 0.2);
  border-bottom: 0.3em solid rgba(255, 255, 255, 0.2);
  border-left: 0.3em solid ${({theme}) => theme.text};
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${SpinnerKeyFrame} 1.1s infinite linear;
  animation: ${SpinnerKeyFrame} 1.1s infinite linear;
  position: fixed;
  left: calc(50% - 3em);
  top: calc(50% - 3em);
`

export default function Spinner() {
  return <SpinnerTemplate>Loading...</SpinnerTemplate>
}