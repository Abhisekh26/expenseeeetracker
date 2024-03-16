import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import { Authcontext } from "../Data/AuthContext";
import { NavLink } from "react-router-dom";
function Navbarr() {
  const authctx = useContext(Authcontext);
  
  const loggedin = authctx.isLoggedin;
  const logout = authctx.Logout;

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand style={{ color: "red", fontSize: "50px" }}>
            Expense Tracker
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                paddingTop: "10px",
                color: "#ffffff",
                fontSize: "25px",
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/expense"
              style={{
                textDecoration: "none",
                paddingTop: "10px",
                paddingLeft: "10px",
                color: "#ffffff",
                fontSize: "25px",
              }}
            >
              Expense
            </NavLink>
          </Nav>
          {!loggedin ? (
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <Button
                variant="link"
                style={{
                  textDecoration: "none",
                  paddingTop: "10px",
                  color: "#ffffff",
                  fontSize: "25px",
                }}
              >
                {" "}
                Login{" "}
              </Button>{" "}
            </NavLink>
          ) : (
            <>
              <NavLink
                to="/welcome"
                style={{
                  textDecoration: "none",
                  fontSize: "25px",
                  paddingTop: "10px",
                  color: "#ffffff",
                  // marginRight: "20px"
                }}
              >
                Profile
              </NavLink>
              <NavLink to="/login">
                <Button
                  variant="link"
                  onClick={logout}
                  style={{
                    textDecoration: "none",
                    fontSize: "25px",
                    paddingTop: "10px",
                    color: "#ffffff",
                    // marginRight: "20px"
                  }}
                >
                  Logout{" "}
                </Button>
              </NavLink>
            </>
          )}
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarr;
