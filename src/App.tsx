import { Suspense } from 'react';
import { routes } from './router/routes';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const LinkTemplate = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`
export default function App() {
  return (
    <BrowserRouter>
      <LinkTemplate>
        <Link to='/'>Home | </Link>
        <Link to='/user'>User | </Link>
        <Link to='/post'>Post | </Link>
        <Link to='/basic'>Basic</Link>
      </LinkTemplate>
      <Suspense fallback={<div>Page loading...</div>}>
        <Routes>
          {
            routes.map((route) => <Route key={route.name} path={route.path} element={<route.component />} />)
          }
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

