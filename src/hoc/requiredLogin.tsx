import { Navigate } from "react-router-dom";
import store from "../store";

export default function RequiredLogin(props: { children: any }) {
  console.log(props);
  const { userStore } = store();

  return userStore.getIsLogin() ? <props.children /> : <Navigate to='/login' replace />
}