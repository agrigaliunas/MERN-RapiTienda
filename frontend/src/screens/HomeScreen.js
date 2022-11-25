import React from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((p) => (
          <Col>
            <h3>{p.name}</h3>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
