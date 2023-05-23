import React from 'react';
import Chat from "./pages/Chat";
import NotFound from './pages/NotFound';

const routes = [
  // {
  //     path: '/auth/login',
  //     element: <LoginPage /> // Ok
  // },
  // {
  //     path: '/auth/register',
  //     element: <RegisterPage /> // Ok
  // },
  {
    path: '/chat',
    element: <Chat />
  },
  {
    path: '*',
    element: <NotFound />
  },
]

export default routes;