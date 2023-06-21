import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Product } from "../../types";
import { getProducts } from "../../api/requests";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductItem from "../../components/ProductItem";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getProducts().then((data) => setProducts(data));

    return () => setProducts([]);
  }, []);

  return (
    <>
      <p className="mt-4">The innovation leader in luxury vinyl plank</p>
      <h3>Let's get started</h3>
      <Row>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </Row>
    </>
  );
};

export default Products;
