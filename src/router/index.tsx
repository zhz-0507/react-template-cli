import React, { lazy, Suspense } from 'react'
import { RouteObject } from 'react-router-dom'
// 懒加载组件
const Home = lazy(() => import('../pages/Home'))
const Login = lazy(() => import('../pages/Login'))
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Suspense fallback={<div>loading...</div>}>
      <Login />
    </Suspense>
  }
]

export default routes
