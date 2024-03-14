import React from "react";
import Signuppage from "./Components/Signuppage";
import Navbarr from "./Components/Navbar";
import Main from "./Main";
import Login from "./Components/Login";
import Welcome from "./Components/Welcome";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App(){
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Main/>,
      children:[
        {
          path:"/signup",
          element:<Signuppage/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/welcome",
          element:<Welcome/>
        }
      ]
    }
  ])
  return(
    <>
    <RouterProvider router={appRouter}></RouterProvider>
     
    
    </>
  )
}
export default App