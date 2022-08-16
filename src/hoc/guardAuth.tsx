import React, { useEffect } from "react";
import store from "../store";
import { useNavigate } from 'react-router-dom';

export default function GuardAuth(props: { Component: React.FC; requiredLogin?: boolean; requiredAdmin?: boolean; }) {
  const CheckAuth = () => {
    const { Component, requiredLogin, requiredAdmin } = props;
    const { userStore } = store();
    const navi = useNavigate();
    const isLogin = userStore.getIsLogin();

    useEffect(() => {
      if (requiredLogin) {
        if (!isLogin) {
          navi("/login", { replace: true });
          return;
        }
      }

      if (requiredAdmin) {
        if (!userStore.getIsAdmin()) {
          navi("/access-error", { replace: true });
          return;
        }
      }
    }, []);

    return <Component />;
  }
  return CheckAuth;
}