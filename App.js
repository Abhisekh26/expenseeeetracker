import React from "react";
import Signuppage from "./Components/Signuppage";
import Main from "./Main";
import CompleteProfile from "./Components/CompleteProfile";
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
        },
        {
          path:"/userdetails",
          element:<CompleteProfile/>
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