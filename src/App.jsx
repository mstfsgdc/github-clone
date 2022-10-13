import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import { HomePage, ErrorPage } from './routes';
import { Header } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/pulls',
    element: <h1>Pulls</h1>
  },
  {
    path: '/issues',
    element: <h1>Issues</h1>
  },
  {
    path: '/marketplace',
    element: <h1>Marketplace</h1>
  },
  {
    path: '/explore',
    element: <h1>Explore</h1>
  }
])

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
