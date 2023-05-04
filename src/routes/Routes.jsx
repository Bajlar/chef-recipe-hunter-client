import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/home/Home/Home";
import MainLayout from "../mainLayout/MainLayout";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Error from "../components/Error/Error";
import Blog from "../components/Blog/Blog";
import SingleCard from "../components/pages/home/SingleCard/SingleCard";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <PrivetRoute><Home></Home></PrivetRoute>
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
        path: '/singleCard',
        element: <SingleCard></SingleCard>,
        loader: () => fetch('http://localhost:5000/chefs')
      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

export default router;