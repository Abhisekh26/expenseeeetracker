import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
function CompleteProfile() {
  const nameref = useRef();
  const imageref = useRef();

  async function userDetails() {
    const name = nameref.current.value;
    const imageurl = imageref.current.value;
    const token = localStorage.getItem("token");
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
    if (response.ok) {
      const data = await response.json();
      console.log(data.email);
    } else {
      const data = await response.json();
      console.log(data);
    }
  }
  return (
    <div>
      <center style={{ paddingTop: "160px" }}>
        <Card
          style={{
            width: "30rem",
            height: "25rem",
            display: "center",
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
            <Button variant="primary" style={{ paddingRight: "20px" }}>
              Cancel
            </Button>
          </Card.Body>
        </Card>
      </center>
    </div>
  );
}

export default CompleteProfile;
