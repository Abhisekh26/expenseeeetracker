import { Outlet } from "react-router-dom";

import React from 'react'
import Navbarr from "./Components/Navbar";

function Main() {

  return (
    <div>
        <Navbarr></Navbarr>
        <Outlet></Outlet>
        {/* <footer></footer> */}
    </div>
  )
}

export default Main