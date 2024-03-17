import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useContext } from "react";
import { Authcontext } from "../Data/AuthContext";
import Expensedisplay from "./Expensedisplay";
import { useRef } from "react";
function ExpenseForm() {
  var [expense, seTexpense] = useState([]);
  const expensemoney = useRef();
  const expensedescription = useRef();
  const expesecategory = useRef();
  async function submitData() {
    const expensemo = expensemoney.current.value;
    const expensedescri = expensedescription.current.value;
    const expensecate = expesecategory.current.value;
       const  expenses={
      price: expensemo,
      description: expensedescri,
      category: expensecate,
      }
    //   seTexpense(expenses)
    // console.log(expensemo, expensedescri, expensecate, expense);
    expensemoney.current.value = "";
    expensedescription.current.value = "";
    expesecategory.current.value = "";
    const data=await fetch ("https://expensetracker-f4839-default-rtdb.firebaseio.com/expenses.json",{
        method:"POST",
        body:JSON.stringify(expenses),
        headers:{
            "Content-type": "application/json"
          }
    })
    if(data.ok){
        console.log("honolulu")
    }
  }


  useEffect(()=>{
   async function display(){
    const response=await fetch("https://expensetracker-f4839-default-rtdb.firebaseio.com/expenses.json")
    if(response.ok){
    const res=await response.json()
    // console.log(res)
    const newexpenses=[]
    for(const key in res){
      newexpenses.push({
        id:key,
        category:res[key].category,
        description:res[key].description,
        price:res[key].price
      })
    }
   
    // seTexpense(newexpenses);
    seTexpense(Array.isArray(newexpenses) ? newexpenses : []);
    // console.log(typeof(expense))
}
 
}
display()
  },[])

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

              <Form.Control
                aria-label="Dollar amount (with dot and two decimal places)"
                ref={expensemoney}
              />
            </InputGroup>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" ref={expensedescription} />
              </Form.Group>
            </Form>
            <Form.Label>Category</Form.Label>

            <Form.Select
              aria-label="Default select example"
              ref={expesecategory}
            >
              <option></option>
              <option value="Food">Food</option>
              <option value="Entertainment">Entertainment</option>
              <option value="travelling">Travelling</option>
              <option value="Shopping">Shopping</option>
            </Form.Select>
          </Card.Text>
          <Button variant="primary" onClick={submitData}>
            Submit
          </Button>
        </Card.Body>
      </Card>
      <Expensedisplay data={expense}></Expensedisplay>
    </center>
  );
}

export default ExpenseForm;
