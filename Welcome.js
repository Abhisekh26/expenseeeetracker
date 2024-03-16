import React from "react";
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../Data/AuthContext";
function Welcome() {

const data=useContext(Authcontext)
const gettoken=data.token



async function verifyEmail(){
  const data= await fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBWAai-YRPJ8fRwGXSB0LiHg1JkaxQv-zo",
  {
  method:"POST",
  body:JSON.stringify({
    requestType:  "VERIFY_EMAIL",
    idToken: gettoken
  }),
  headers: {
    "Content-Type": "application/json",
  },
  })
  if(data.ok){
    const response=await data.json()
    console.log(response)
  }
  else {
    console.log(data.json())
  }

}

  return (
    <>
      <ul>
        <li
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h3>Welcome to Expense Tracker</h3>
          <h4
            style={{
              marginRight: "20px",
              backgroundColor: "#f0f0f0",
              borderRadius: "10px",
              padding: "5px 10px",
            }}
          >
            Your profile is incomplete.
            <NavLink to="/userdetails" style={{textDecoration: "none"}}>Complete Now </NavLink>
          </h4>
        </li>
      </ul>

      <center>
      <Button variant="link" style={{textDecoration: "none",fontSize:"30px"}} 
      onClick={verifyEmail}>Verify Your Email</Button>
      </center>
    </>
  );
}

export default Welcome;
