import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Authcontext } from "../Data/AuthContext";


function Login() {

  const authctx=useContext(Authcontext)
  const emailref = useRef();
  const passref = useRef();
  const [em,setem]=useState()
  
  function logIn() {
    const email=emailref.current.value
    const password=passref.current.value
    
    if(!email.includes("@")){
        alert("Enter a valid Email")
    }
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBWAai-YRPJ8fRwGXSB0LiHg1JkaxQv-zo",
    {
        method:'POST',
        body:JSON.stringify({
            email:email,
            password:password,
            returnSecureToken:true,
        }),
        headers: {
            "Content-Type": "application/json",
          },

    }).then((res)=>{
     if(res.ok){
        res.json().then((data)=>{
            console.log(data.idToken)
           
            localStorage.setItem('token',data.idToken)
            authctx.Login(data.idToken)
            
         window.location.href = "/welcome";
        })
     }
     else {
    
         alert("Enter Valid Credentials")
     }
    })
  }

  async function forgot(){
    const email=emailref.current.value
    const data= await fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBWAai-YRPJ8fRwGXSB0LiHg1JkaxQv-zo",
    {
      method:"POST",
      body:JSON.stringify({
        requestType:"PASSWORD_RESET",
        email:email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    if(data.ok){
      const res= await data.json()
      console.log(res)
    }
    else{
      const res=await data.json()
      console.log(res)
    }

  }
  return (
    <div>
      <center style={{ paddingTop: "160px" }}>
        <Card
          style={{
            width: "30rem",
            height: "22rem",
            display: "center",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Card.Body>
            <Card.Title>Log In</Card.Title>
            <Card.Text>
              <InputGroup size="lg">
                <InputGroup.Text
                  id="inputGroup-sizing-lg"
                  style={{ width: "120px" }}
                >
                  Email
                </InputGroup.Text>
                <Form.Control
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  ref={emailref}
                />
              </InputGroup>
              <br></br>
              <br></br>
              <InputGroup size="lg">
                <InputGroup.Text id="inputGroup-sizing-lg">
                  Password
                </InputGroup.Text>

                <Form.Control
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  type="password"
                  ref={passref}
                />
              </InputGroup>

              <br></br>
            </Card.Text>

            <Button variant="link" style={{textDecoration:"none"}}
            onClick={forgot}>Forgot Password?</Button>


            <br></br>
            <Button
              variant="primary"
              style={{
                marginTop: "8px",
                backgroundColor: "grey",
                height: "60px",
                width: "200px",
                fontSize: "20px",
                borderRadius: "5px",
              }}
              onClick={logIn}
            >
              LogIn
            </Button>
          </Card.Body>
        </Card>
      </center>
    </div>
  );
}

export default Login;
