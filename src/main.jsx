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
import PostResource from './Dashboard/PostResource';
import Resources from './components/Resources';
import BookMark from './Dashboard/BookMark';
import BookMarkDetails from './components/BookMarkDetails';
import NewsDetails from './components/NewsDetails';
import UserManage from './Dashboard/UserManage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AdminProfile from './Dashboard/AdminProfile';
import Performance from './Dashboard/Performance';
import PostUpdate from './Dashboard/PostUpdate';

const queryClient = new QueryClient()


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
        path: '/newsDetails/:id',
        element: <NewsDetails></NewsDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
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
        path: 'resourcesData',
        element: <Resources></Resources>,
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
        path: '/blogPostForm',
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
      },
      {
        path: '/allPostData',
        element: <AllPostData></AllPostData>,
        loader: () => fetch('http://localhost:5000/post')
      },
      {
        path: '/postDetails/:id',
        element: <PostDetails></PostDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/post/${params.id}`)
      }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
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
        element:<PostUpdate></PostUpdate>,
        loader:({params})=> fetch(`http://localhost:5000/post/${params.id}`)
      },
      // admin related
      {
        path: 'adminProfile',
        element: <AdminProfile></AdminProfile>
      },
      {
        path: 'userManagement',
        element: <UserManage></UserManage>
      },
      {
        path: 'performance',
        element:<Performance></Performance>
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
