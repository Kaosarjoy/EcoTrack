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
        Component:Challenges
      },
      {
        path:'/myActivities',
        Component:MyActivities
      },
      {
      path:'/auth',
      Component:AuthLayout
    },
    {
      path:'/auth/login',
      Component:Login
    },
    {
      path:'/auth/register',
      Component :Register,
    }
      
    ]
    
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
     <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
  </StrictMode>,
)
//https://drive.google.com/file/d/1A8LdSS8lAOHEmBVU5I720HXGPiA5a7vs/view