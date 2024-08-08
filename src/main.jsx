import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./Component/Routers/About.jsx"

import './index.css'
import Contact from './Component/Routers/Contact.jsx'
import Error from './Component/Routers/Error.jsx'
import Body from './Component/Body/Body.jsx'
import RestaurantMenu from './Component/Routers/RestaurantMenu.jsx'
import Grocery from './Component/grocery/Grocey.jsx'
import ShimmerUi from './Component/Shimmer/ShimmerUi.jsx'
import Cart from './Component/Cart/Cart.jsx'


// Outlet use for children in react -router dom it use when click or write a particular path  called(children routes)
// outlet is repalce a other components, like about ,body ,Contact according to the path



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <Suspense fallback={<ShimmerUi />}><About /></Suspense>
      },
      {
        path: "/contact",
        element: <Contact />

      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />
      }, {
        path: "/cart",
        element: <Cart />
      }


    ],

    errorElement: <Error />

  },

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
)
