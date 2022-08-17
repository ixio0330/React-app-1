import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import GuardLogin from '../guard/guardLogin';

const Home = lazy(() => import('../views/Home'));
const Login = lazy(() => import('../views/auth/Login'));
const User = lazy(() => import('../views/users/Users'));
const Post = lazy(() => import('../views/posts/Posts'));
const PostDetail = lazy(() => import('../views/posts/PostDetail'));
const Basic = lazy(() => import('../views/basic/Basic'));

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/user',
      element: <GuardLogin children={User} />,
    },
    {
      path: '/post',
      element: <Post />,
    },
    {
      path: '/post/:id',
      element: <PostDetail />,
    },
    {
      path: '/basic',
      element: <Basic />,
    }
  ]);
}