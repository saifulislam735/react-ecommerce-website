import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Component/Root/Root';
import Shop from './Component/Shop/Shop';
import './index.css'

import Orders from './Component/Orders/Orders';
// import Review from './Component/Review/Review';
import Login from './Component/Login/Login';
import Manage from './Component/Manage/Manage';
import cartProductsLoader from './cartProductsLoaders';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CheckOut from './Component/Cart/CheckOut/CheckOut';
import Error from './Component/Error/Error';
import SignUp from './Component/SignUp/SignUp';
import AuthProvider from './Component/Provider/AuthProvider';



const router = createBrowserRouter([
  {
    path: "/react-ecommerce-website/",
    element: <Root></Root>,
    children: [
      {
        path: "/react-ecommerce-website/",
        element: <Shop></Shop>,
      },
      {
        path: '/react-ecommerce-website/order',
        element: <Orders></Orders>,
        loader: cartProductsLoader

      },
      {
        path: '/react-ecommerce-website/manage',
        element: <Manage></Manage>,

      },
      {
        path: '/react-ecommerce-website/login',
        element: <Login></Login>,

      },
      {
        path: '/react-ecommerce-website/signup',
        element: <SignUp></SignUp>,

      },
      {
        path: '/react-ecommerce-website/checkout',
        element: <CheckOut></CheckOut>,
      },
      {
        path: '*',
        element: <Error></Error>,
      }

    ],

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
