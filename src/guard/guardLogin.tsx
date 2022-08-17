import { Navigate } from "react-router-dom";
import store from "../store";

export default function GuardLogin(props: { children: any }) {
  const { userStore } = store();

  return userStore.getIsLogin() ? <props.children /> : <Navigate to='/login' replace />
}