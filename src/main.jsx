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
        element: <Manage></Manage>

      },
      {
        path: '/react-ecommerce-website/login',
        element: <Login></Login>

      }

    ],

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
