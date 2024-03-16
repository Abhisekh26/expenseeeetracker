import React from "react";
import { NavLink } from "react-router-dom";
function Welcome() {
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
    </>
  );
}

export default Welcome;
