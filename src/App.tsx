import { Suspense } from 'react';
import { routes } from './router/routes';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from './components/common/Spinner';

const MainTemplate = styled.main`
  margin: 100px auto 40px;
  width: 80%;
  min-width: 360px;
  min-height: calc(100vh - 142px);
`

export default function App() {
  return (
    <MainTemplate>
      <Suspense fallback={<Spinner />}>
        <Routes>
          {
            routes.map((route) => <Route key={route.name} path={route.path} element={<route.component />} />)
          }
      </Routes>
      </Suspense>
    </MainTemplate>
  );
}

