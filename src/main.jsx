import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './components/Home';
import News from './Page/News/News';
import Podcasts from './Page/News/Podcasts/Podcasts';
import ResourcesNav from './Page/ResourcesNav';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/news',
        element: <News></News>
      },
      {
        path: '/podcasts',
        element: <Podcasts></Podcasts>
      },
      {
        path: '/resourcesNav',
        element:<ResourcesNav></ResourcesNav>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
