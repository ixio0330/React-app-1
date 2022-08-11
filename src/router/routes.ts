import { lazy } from "react"

export const routes = [
  {
    path: '/',
    name: 'home',
    component: lazy(() => import('../views/Home')),
  },
  {
    path: '/user',
    name: 'user',
    component: lazy(() => import('../views/users/Users')),
  },
  {
    path: '/post',
    name: 'post',
    component: lazy(() => import('../views/posts/Posts')),
  },
  {
    path: '/post/:id',
    name: 'postDetail',
    component: lazy(() => import('../views/posts/PostDetail')),
  },
  {
    path: '/basic',
    name: 'basic',
    component: lazy(() => import('../views/basic/Basic')),
  }
];