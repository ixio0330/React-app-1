import styled from "styled-components";
import * as uuid from 'uuid';

// icon
import { RiHome2Line, RiFilePaperLine } from 'react-icons/ri';
import { BiUser } from 'react-icons/bi';
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";

import { Link } from "react-router-dom";
import store from "../../store";
import { observer } from "mobx-react-lite";

const HeaderTemplate = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.headerColor};
  position: fixed;
  top: 0;
  left: 0;
  color: #ccc;
  z-index: 9999;
`;

const MenuTemplate = styled.ul`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const LinkStyle = {
  margin: '0 10px',
  display: 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
}

const tempRoute = [
  {
    id: uuid.v1(),
    icon: RiHome2Line,
    path: '/',
    name: 'Home',
    hide: false,
    hideName: true,
  },
  {
    id: uuid.v1(),
    icon: RiFilePaperLine,
    path: '/post',
    name: 'Post',
    hide: false,
    hideName: false,
  },
  {
    id: uuid.v1(),
    icon: BiUser,
    path: '/user',
    name: 'User',
    hide: false,
    hideName: false,
  }
]

export default observer(function Header() {
  const { userStore } = store();

  function logout() {
    userStore.logout();
  }

  return (
    <HeaderTemplate>
      <MenuTemplate>
        {
          tempRoute.filter((route) => !route.hide).map((route) => (
            <li key={route.id}>
              <Link to={route.path} style={LinkStyle}>
                <route.icon />
                {!route.hideName && <span>{route.name}</span>}
              </Link>
            </li>
          ))
        }
        {
          userStore.getIsLogin()
            ? <li onClick={logout}><IoIosLogOut />Logout</li>
            : <li><Link to='/login'><IoIosLogIn />Login</Link></li>
        }
      </MenuTemplate>
    </HeaderTemplate>
  )
});