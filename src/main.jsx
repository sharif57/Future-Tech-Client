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
import Login from './Page/Login';
import Register from './Page/Register';
import BlogPostForm from './components/BlogPostForm';
import Review2 from './components/review2';
import AllReviews from './components/AllReviews';
import AuthProvider from './AuthProvider/AuthProvider';

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
        path: '/resNav',
        element: <ResourcesNav></ResourcesNav>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/bookPostForm',
        element: <BlogPostForm></BlogPostForm>
      },
      {
        path: '/review2',
        element: <Review2></Review2>,
        loader: () => fetch('http://localhost:5000/reviews')
      },
      {
        path: '/allReviews',
        element: <AllReviews></AllReviews>,
        loader: () => fetch('http://localhost:5000/reviews')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
