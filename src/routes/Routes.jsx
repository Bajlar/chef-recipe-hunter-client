import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/home/Home/Home";
import MainLayout from "../mainLayout/MainLayout";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Error from "../components/Error/Error";
import Blog from "../components/Blog/Blog";
import ChefInfo from "../components/pages/home/ChefInfo/ChefInfo";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
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
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/chef/:id',
        element: <ChefInfo></ChefInfo>
      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

export default router;