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
import AllPostData from './components/AllPostData';
import PostDetails from './components/PostDetails';
import Dashboard from './Dashboard/Dashboard';
import Profile from './Dashboard/Profile';
import MyPost from './Dashboard/MyPost';
import Resources from './components/Resources';
import BookMark from './Dashboard/BookMark';
import BookMarkDetails from './components/BookMarkDetails';
import NewsDetails from './components/NewsDetails';
import UserManage from './Dashboard/UserManage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AdminProfile from './Dashboard/AdminProfile';
import Performance from './Dashboard/Performance';
import PostUpdate from './Dashboard/PostUpdate';
import PrivateRoute from './PrivateRoutes/PrivateRoute';
import AdminRoute from './AdminRoute/AdminRoute';
import Error from './Page/Error';

const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<Error></Error>,
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
        path: '/newsDetails/:id',
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
      },
      {
        path: '/podcasts',
        element: <Podcasts></Podcasts>
      },
      {
        path: '/resNav',
        element: <PrivateRoute> <ResourcesNav></ResourcesNav></PrivateRoute>
      },
      {
        path: 'resourcesData',
        element: <PrivateRoute> <Resources></Resources></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/resource')
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
        path: '/review2',
        element: <Review2></Review2>,
        loader: () => fetch('http://localhost:5000/reviews')
      },
      {
        path: '/allReviews',
        element: <PrivateRoute><AllReviews></AllReviews></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/reviews')
      },
      {
        path: '/allPostData',
        element: <PrivateRoute><AllPostData></AllPostData></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/post')
      },
      {
        path: '/postDetails/:id',
        element: <PrivateRoute><PostDetails></PostDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/post/${params.id}`)
      }
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // user related
      {
        path: 'profile',
        element: <Profile></Profile>
      },
      {
        path: 'blogPostForm',
        element: <BlogPostForm></BlogPostForm>
      },
      {
        path: 'myPost',
        element: <MyPost></MyPost>
      },
      {
        path: 'bookMark',
        element: <BookMark></BookMark>
      },
      {
        path: 'bookMarkDetails/:id',
        element: <BookMarkDetails></BookMarkDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/bookMarks/${params.id}`)
      },
      {
        path: 'update/:id',
        element: <PostUpdate></PostUpdate>,
        loader: ({ params }) => fetch(`http://localhost:5000/post/${params.id}`)
      },
      // admin related
      {
        path: 'adminProfile',
        element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>
      },
      {
        path: 'userManagement',
        element: <AdminRoute> <UserManage></UserManage></AdminRoute>
      },
      {
        path: 'performance',
        element:<AdminRoute><Performance></Performance></AdminRoute>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </AuthProvider>
)
