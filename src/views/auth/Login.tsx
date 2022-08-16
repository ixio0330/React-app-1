import styled from "styled-components";
import useInputs from "../basic/03.hooks/useInputs";
import store from "../../store";
import { useNavigate } from "react-router-dom";

const LoginContainer = styled.div`
  margin: 100px auto 0;
  max-width: 500px;
`;

const LoginLabelContainer = styled.label`
  display: block;
  margin-bottom: 20px;
`;

const LoginLabel = styled.p`
  margin-bottom: 10px;
`;

const LoginInput = styled.input`
  all: unset;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 30px;
  width: 100%;
  padding: 10px 20px;
  transition: .2s;
  &:focus {
    background-color: #fff;
    color: #000;
  }
`;

const LoginButton = styled.button`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 20px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 30px;
  cursor: pointer;
  transition: .2s;
  &:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.color};
  }
`

export default function Login() {
  const { userStore } = store();
  const navi = useNavigate();
  const { form, onChange, reset } = useInputs({
    login: "",
    password: "",
  });

  function onLogin() {
    const { login, password } = form;
    if (!login || !password) {
      console.log('Empty is not allowed.');
      return;
    }

    const response = userStore.login(login, password);
    if (!response) {
      console.log('Invalid Information.');
      return;
    }
    
    navi('/');
    reset();
  }

  return (
    <LoginContainer>
      <LoginLabelContainer>
        <LoginLabel>ID</LoginLabel>
        <LoginInput value={form.login} onChange={onChange} name="login" type="text" />
      </LoginLabelContainer>
      <LoginLabelContainer>
        <LoginLabel>Password</LoginLabel>
        <LoginInput value={form.password} onChange={onChange} name="password" type="password" />
      </LoginLabelContainer>
      <LoginButton onClick={onLogin}>Login</LoginButton>
    </LoginContainer>
  )
}