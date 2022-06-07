import React from "react";
import { Button, Card, Form } from "react-bootstrap";

const Home = () => {
  return (
    <div className="mx-5 mt-5">
      <Card className="mx-auto rounded-0">
        <h4 className="text-center pb-0 pt-3">Loan</h4>
        <Card.Body className="p-5 py-4">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="number"
                placeholder="Enter amout"
                className="rounded-0"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="number"
                placeholder="Enter Yer"
                className="rounded-0"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="number"
                placeholder="Enter Amount Rate"
                className="rounded-0"
              />
            </Form.Group>

            <Button
              className="btn btn-warning w-100"
              style={{ backgroundColor: "#f79837", color: "#fff" }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
