import React from 'react';
import Chat from "./pages/Chat";
import NotFound from './pages/NotFound';
import Login from "./pages/Login";
import Register from './pages/Register';

const routes = [
  {
      path: '/login',
      element: <Login /> // Ok
  },
  {
      path: '/register',
      element: <Register /> // Ok
  },
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