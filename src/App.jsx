import Body from "./Component/Body/Body"
import Footer from "./Component/Footer/Footer"
import Header from "./Component/Header/Header"

import './App.css'
import { Outlet } from "react-router-dom"
import { lazy, useEffect, useState } from "react"
import UserConetxt from "./utils/UserContext.js"
import { Provider } from "react-redux"
import appStore from "./utils/appStore.js"


//chunking
// code splitting
// Dynamic Bundling
//lazy loading
// on demand loading
// dynamic import
const Grocery = lazy(() => import('./Component/grocery/Grocey.jsx'))

const About = lazy(() => import("./Component/Routers/About.jsx"))



function App() {

  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    const data = {
      name: "Mayank Gupta",
    };
    setUserInfo(data.name);
  }, [])


  return (
    <Provider store={appStore}>
      <UserConetxt.Provider value={{ loggedInUser: userInfo }}>
        <div className="app">
          <Header />
          <Outlet />

        </div>
      </UserConetxt.Provider>
    </Provider>
  )
}

export default App
