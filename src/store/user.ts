import { makeAutoObservable } from "mobx";

class UserStore {
  private isLogin = Boolean(localStorage.getItem('IS_LOGIN')) || false;
  private isAdmin = Boolean(localStorage.getItem('IS_ADMIN')) || false;

  login(id: string, password: string) {
    this.checkInfo(id, password);
    return this.isLogin;
  }

  logout() {
    localStorage.removeItem('IS_LOGIN');
    localStorage.removeItem('IS_ADMIN');
    this.isLogin = false;
  }

  getIsAdmin() {
    return this.isAdmin;
  }

  getIsLogin() {
    return this.isLogin;
  }

  private checkInfo(id: string, password: string) {
    if (id === 'temp' && password === 'qwer') {
      this.isLogin = true;
      localStorage.setItem('IS_LOGIN', 'true');
    }

    if (id === 'admin' && password === 'qwer') {
      this.isLogin = true;
      this.isAdmin = true;
      localStorage.setItem('IS_LOGIN', 'true');
      localStorage.setItem('IS_ADMIN', 'true');

    }
  }

  constructor() {
    makeAutoObservable(this);
  }
}

const userStore = new UserStore();

export default userStore;