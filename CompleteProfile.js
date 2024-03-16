import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function CompleteProfile() {
  const [name,setname]=useState()
  const[image,setimage]=useState()
  const nameref = useRef();
  const imageref = useRef();
  const token = localStorage.getItem("token");

  async function userDetails() {
    const name = nameref.current.value;
    const imageurl = imageref.current.value;
    
    console.log(name, imageurl, token);
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBWAai-YRPJ8fRwGXSB0LiHg1JkaxQv-zo",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          displayName: name,
          photoUrl: imageurl,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    nameref.current.value = "";
    imageref.current.value = "";
    if (response.ok) {
      const data = await response.json();
      console.log(data.email);
    } else {
      const data = await response.json();
      console.log(data);
    }
  }
  useEffect(()=>{
    async function getUserDetaials(){
        const userdata= await fetch("https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBWAai-YRPJ8fRwGXSB0LiHg1JkaxQv-zo",
        {
            method:"POST",
            body:JSON.stringify({
                idToken:token,
            }),
            headers: {
                "Content-Type": "application/json",
              },

        })
        if(userdata.ok){
            const userinfo= await userdata.json()
            console.log(userinfo.users[0].displayName)
            setname(userinfo.users[0].displayName)
            setimage(userinfo.users[0].photoUrl)
        }
        else{
            const userinfo=await userdata.json()
            console.log(userinfo)
        }
 } 
 getUserDetaials()
 
},[])
  
  return (
    <>


      <Container>
        {" "}
        <Row>
          <Col> 
          <div style={{ paddingTop: "160px", marginLeft: "80px" }}>
        <Card
          style={{
            width: "30rem",
            height: "25rem",
            // display: "center",
            // paddingTop: "160px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Card.Body>
            <Card.Title>Complete Your Profile</Card.Title>
            <Card.Text>
              <Form.Label>Enter Your Name</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Enter Your Name"
                ref={nameref}
              />
              <br />
              <Form.Label>Enter Your Profile Photo URL</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Enter URL"
                ref={imageref}
              />
              <br />
            </Card.Text>
            <Button variant="primary" onClick={userDetails}>
              Update
            </Button>{" "}
            {/* <Button variant="primary" style={{ paddingRight: "20px" }}>
              Cancel
            </Button> */}
          </Card.Body>
        </Card>
      </div>
      </Col> 
          <Col> 
          <div style={{ paddingTop: "160px", marginLeft: "80px" }}>
        <Card
          style={{
            width: "30rem",
            height: "25rem",
            // display: "center",
            // paddingTop: "160px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Card.Body>
            <Card.Title style={{paddingLeft:"20px"}}>{name}</Card.Title>
            <Card.Text>
            <Container>
            <Row>
           <Col xs={6} md={4}>
          <Image  style={{paddingTop:"20px"}}src= {image} rounded />
            </Col>
            </Row>
            </Container>
            
            </Card.Text>
            {/* <Button variant="primary" >
              Update
            </Button>{" "} */}
            {/* <Button variant="primary" style={{ paddingRight: "20px" }}>
              Cancel
            </Button> */}
          </Card.Body>
        </Card>
      </div>
       </Col> 
        </Row>
      </Container>






     
    </>
  );
}

export default CompleteProfile;
