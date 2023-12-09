import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Routes File/Home file/Home.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Biodata from './Routes File/Biodatas file/Biodata.jsx'
import Login from './Routes File/Login and Regstation file/Login.jsx'
import Regster from './Routes File/Login and Regstation file/Regster.jsx'
import DashBord from './Routes File/DashBord file/DashBord.jsx'
import EditBiodata from './Routes File/DashBord file/EditBiodata.jsx'
import ViewBio from './Routes File/DashBord file/ViewBio.jsx'
import MyContactRequst from './Routes File/DashBord file/MyContactRequst.jsx'
import FavouriteBio from './Routes File/DashBord file/FavouriteBio.jsx'
import AdminDashbord from './Routes File/DashBord file/Admin Dashbord/AdminDashbord.jsx'
import ManageUsers from './Routes File/DashBord file/Admin Dashbord/ManageUsers.jsx'
import ApprovedPremium from './Routes File/DashBord file/Admin Dashbord/ApprovedPremium.jsx'
import ApprovedContact from './Routes File/DashBord file/Admin Dashbord/ApprovedContact.jsx'
import ViewProfileDettles from './Routes File/Home file/ViewProfileDettles.jsx'
import ViewDettles from './Routes File/Home file/ViewDettles.jsx'
import AuthProvider from './Routes File/Firebase file/AuthProvider.jsx'
import PraivetRoute from './Routes File/Praivet File/PraivetRoute.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/biodatas',
        element: <Biodata></Biodata>
      },
      {
        path: "/viewprofiledettles",
        element: <PraivetRoute><ViewProfileDettles></ViewProfileDettles></PraivetRoute>,
        children: [
          {
            path: "/viewprofiledettles/viewdettles",
            element: <PraivetRoute><ViewDettles></ViewDettles></PraivetRoute>,
          },
        ]
      },

      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/regster',
        element: <Regster></Regster>
      }
    ]
  },
  {
    path: '/dashbord',
    element: <PraivetRoute><DashBord></DashBord></PraivetRoute> ,
    children: [
      // user routes
      {
        path: 'editBiodata',
        element: <EditBiodata></EditBiodata>
      },
      {
        path: 'viewBio',
        element: <ViewBio></ViewBio>
      },
      {
        path: 'contactRequst',
        element: <MyContactRequst></MyContactRequst>
      },
      {
        path: 'favouriteBio',
        element: <FavouriteBio></FavouriteBio>
      },

      // admin Routes

      {
        path: 'admindashboard',
        element: <AdminDashbord></AdminDashbord>
      },
      {
        path: 'manageusers',
        element: <ManageUsers></ManageUsers>
      },
      {
        path: 'approvedpremium',
        element: <ApprovedPremium></ApprovedPremium>
      },
      {
        path: 'approvedcontact',
        element: <ApprovedContact></ApprovedContact>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
    {/* <App></App> */}
  </React.StrictMode>,
)
