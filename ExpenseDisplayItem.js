import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

function ExpenseDisplayItem({ data }) {
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState(data);
  const [showModal, setShowModal] = useState(false);

  async function deletee(id) {
    const response = await fetch(
      `https://expensetracker-f4839-default-rtdb.firebaseio.com/expenses/${id}.json`,
      {
        method: "delete",
      }
    );
    if (response.ok) {
      console.log("hello");
    }
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };
  async function edit(id) {
    const response = await fetch(
      `https://expensetracker-f4839-default-rtdb.firebaseio.com/expenses/${id}.json`,
      {
        method: "PUT",
        body: JSON.stringify(editedData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setEditMode(false);
    setShowModal(false);
  }

  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={editedData.category}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={editedData.price}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={editedData.description}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => edit(data.id)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
        <center>
          <Card
            style={{
              width: "50rem",
              height: "5rem",
              marginTop: "20px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Card.Body>
              <Card.Text>
                <Table striped bordered hover variant="dark">
                  <Container>
                    <Row>
                      <Col style={{ paddingTop: "15px" }}> {data.category}</Col>
                      <Col style={{ paddingTop: "15px" }}> {data.price}</Col>
                      <Col style={{ paddingTop: "15px" }}>
                        {data.description}
                      </Col>
                      <Col>
                        <Button
                          variant="primary"
                          onClick={() => deletee(data.id)}
                        >
                          Delete
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          variant="primary"
                          onClick={() => {
                            setEditMode(true);
                            setShowModal(true);
                          }}
                        >
                          Edit
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                </Table>
              </Card.Text>
            </Card.Body>
          </Card>
        </center>
      </div>
    </>
  );
}

export default ExpenseDisplayItem;
