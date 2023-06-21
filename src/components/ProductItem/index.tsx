import React from "react";
import { Col, Card, Form } from "react-bootstrap";
import { Product } from "../../types";

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <Col style={{ marginBottom: "16px" }}>
      <Card style={{ minHeight: "306px", maxHeight: "306px" }}>
        <Card.Img src={product.imageUrl} />
        <Card.Body>
          <div className="flexJustifyBetween">
            <Card.Title>{product.name}</Card.Title>
            <Card.Title>{`${product.price} $`}</Card.Title>
          </div>
          <Card.Text>{product.model}</Card.Text>
          <div className="flexJustifyBetween">
            {product.isAvailable ? (
              <div className="itemAvailable">Available Now 2650sf</div>
            ) : (
              <div className="itemUnavailable">Unavailable</div>
            )}
            <Form>
              <Form.Group className="mb-3">
                <Form.Check label="Compare" feedbackType="invalid" />
              </Form.Group>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductItem;
