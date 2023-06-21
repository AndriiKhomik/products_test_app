import React, { ChangeEvent, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { addReview } from "../../api/requests";
import { Review } from "../../types";

const AddReviewForm = () => {
  const [validated, setValidated] = useState<boolean>(false);
  const [values, setValues] = useState<Partial<Review>>({
    author: "",
    email: "",
    comment: "",
    phone: "",
    saveInfo: false,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLButtonElement;
    setValues(() => ({ ...values, [target.name]: target.value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    }
    if (form.checkValidity()) {
      // @ts-ignore
      addReview({ ...values, date: new Date().toString() });
      setValues({
        author: "",
        email: "",
        comment: "",
        phone: "",
        saveInfo: false,
      });
      setValidated(false);
      // window.location.reload();
    }
  };

  return (
    <div className="p-4">
      <h4>Leave a review</h4>
      <p>
        Your email address will not be published. Required fields are marked *
      </p>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicComment">
          <Form.Control
            as="textarea"
            placeholder="Comment *"
            name="comment"
            style={{ height: "100px" }}
            required
            onChange={handleChange}
            value={values.comment}
          />
        </Form.Group>
        <Row>
          <Form.Group
            className="mb-3"
            as={Col}
            md="6"
            controlId="formBasicName"
          >
            <Form.Control
              type="text"
              placeholder="Name *"
              required
              name="author"
              onChange={handleChange}
              value={values.author}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            as={Col}
            md="6"
            controlId="formBasicEmail"
          >
            <Form.Control
              type="email"
              placeholder="Enter email *"
              required
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Control
            type="text"
            name="phone"
            placeholder="Phone (optional)"
            onChange={handleChange}
            value={values.phone}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            label="Save my name, email and website in this browser for the next time I commnet"
            feedback="You must agree before submitting."
            feedbackType="invalid"
            required
          />
        </Form.Group>
        <Button className="addButton" type="submit">
          Post Review
        </Button>
      </Form>
    </div>
  );
};

export default AddReviewForm;
