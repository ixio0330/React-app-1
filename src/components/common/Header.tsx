import styled from "styled-components";
import * as uuid from 'uuid';

// icon
import { RiHome2Line, RiFilePaperLine } from 'react-icons/ri';
import { BiUser } from 'react-icons/bi';
import { Link } from "react-router-dom";

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
  },
]

export default function Header() {
  return (
    <HeaderTemplate>
      <MenuTemplate>
        {
          tempRoute.filter((route) => !route.hide).map((route) => (
            <li key={route.id}>
              <Link to={route.path} style={LinkStyle}>
                <route.icon />
                { !route.hideName && <span>{ route.name }</span> }
              </Link>
            </li>
          ))
        }
      </MenuTemplate>
    </HeaderTemplate>
  )
}