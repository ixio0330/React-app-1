import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from './components/common/Spinner';
import RequiredLogin from './hoc/requiredLogin';

const Home = lazy(() => import('./views/Home'));
const Login = lazy(() => import('./views/auth/Login'));
const User = lazy(() => import('./views/users/Users'));
const Post = lazy(() => import('./views/posts/Posts'));
const PostDetail = lazy(() => import('./views/posts/PostDetail'));
const Basic = lazy(() => import('./views/basic/Basic'));

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
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/user' element={<RequiredLogin children={User} />} />
          <Route path='/post' element={<Post />} />
          <Route path='/post/:id' element={<PostDetail />} />
          <Route path='/basic' element={<Basic />} />
      </Routes>
      </Suspense>
    </MainTemplate>
  );
}

