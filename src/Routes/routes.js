import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Pages/Shared/ErrorPage'
import Home from '../Pages/Home'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Login/Signup'
import Main from '../Layout/Main'
import ComingSoon from '../Pages/Shared/ComingSoon'
import Checkout from '../Pages/Checkout'
import Details from '../Pages/Details'
import SearchResult from '../Pages/SearchResult'
import PrivateRoute from './PrivateRoute';
import DashboardLayout from '../Layout/DashboardLayout'
import MyBookings from '../Pages/Dashboard/MyBookings'
import BecomeAHost from '../Pages/Dashboard/BecomeAHost'
import AllUsers from '../Pages/Dashboard/AllUsers'
import AllBookings from '../Pages/Dashboard/AllBookings'
import Welcome from '../Pages/Dashboard/Welcome'
import AddHome from '../Pages/Dashboard/AddHome'
import ManageHome from '../Pages/Dashboard/Manage-Home'
import AllHome from '../Pages/AllHome'

const router = createBrowserRouter([

  {
    path: '/',
    element: <Main/>,
    errorElement: <ErrorPage />,
    children: [
      
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/coming-soon',
        element: <ComingSoon/>,
      },
      {
        path: '/service-details/:id',
        element: <Details/>,
        loader:({params})=>{return fetch(`http://localhost:5000/homes/${params.id}`)}
      },
      {
        path: '/all-home',
        element: <AllHome/>,
      },
      {
        path: '/search-result',
        element: <SearchResult/>,
      },
      {
        path: '/checkout',
        element:<PrivateRoute>  
        <Checkout/>
        </PrivateRoute>,
      },
    ],
   
  },

  {
    path: '/dashboard',
    element:<PrivateRoute>  
         <DashboardLayout/>
         </PrivateRoute>,

  children:[
    {
      path: '',
      element: <Welcome />,
    },
  {
    path:"mybookings",
    element:<MyBookings/>
  },

  {
    path:"becomeahost",
    element:<BecomeAHost/>
  },
  {
    path:"all-users",
    element:<AllUsers/>
  },
  {
    path:"all-bookings",
    element:<AllBookings/>
  },
  {
    path:"add-home",
    element:<AddHome/>
  },
  {
    path:"manage-homes",
    element:<ManageHome/>
  },
]



  },
  
])

export default router
