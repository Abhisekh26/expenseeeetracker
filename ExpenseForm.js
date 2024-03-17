import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useContext } from "react";
import { Authcontext } from "../Data/AuthContext";
function ExpenseForm() {

  return (

    <center>
      <Card
        style={{
          width: "30rem",
          height: "22rem",
          display: "center",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Card.Body>
          <Card.Title>Enter Your Expense </Card.Title>
          <Card.Text>
            <Form.Label>Amount</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>₨</InputGroup.Text>

              <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
            </InputGroup>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Form>
            <Form.Label>Category</Form.Label>
            <Form.Select aria-label="Default select example">
              <option></option>
              <option value="1">Food</option>
              <option value="2">Entertainment</option>
              <option value="3">Travelling</option>
              <option value="3">Shopping</option>
            </Form.Select>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </center>
  );
}

export default ExpenseForm;
