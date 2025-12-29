import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomeLayout from './component/Layout/HomeLayout'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './component/Pages/Home';
import Challenges from './component/Pages/Challenges';
import MyActivities from './component/Pages/MyActivities';
import AuthLayout from './component/Layout/AuthLayout';
import Login from './component/Pages/Login';
import Register from './component/Pages/Register';
import AuthProvider from './component/Provider/AuthProvider';
import PrivateRoute from './component/Provider/PrivateRoute';
import Error from './component/Error/Error'
import { LoaderProvider } from './component/Provider/LoaderProvider';
const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayout,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:'/challenges',
        element:<PrivateRoute>
          <Challenges></Challenges>
        </PrivateRoute>
      },
      {
        path:'/myActivities',
       Component:MyActivities
      }
    ],

    
    
    
  },
   {
      path:'/auth',
      Component:AuthLayout,
      children:[
         {
      path:'/auth/login',
      Component:Login
    },
    {
      path:'/auth/register',
      Component :Register,
    }
      ],
     
    },
   {
    path:'/*',
    Component:Error
   }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <LoaderProvider>
    <AuthProvider>
     <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
   </LoaderProvider>
  </StrictMode>,
)
//https://drive.google.com/file/d/1A8LdSS8lAOHEmBVU5I720HXGPiA5a7vs/view

//https://uiverse.io/elements?search=loader&t=css&page=2