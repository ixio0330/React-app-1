import { Suspense } from 'react';
import styled from 'styled-components';
import Spinner from './components/common/Spinner';
import Routes from './routes';

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
        <Routes />
      </Suspense>
    </MainTemplate>
  );
}

