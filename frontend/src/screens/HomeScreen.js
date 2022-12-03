import React, {useState, useEffect} from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from 'axios'


const HomeScreen = () => {
  
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    const fetchProducts = async () => {
      const {data} = await axios.get('/api/products');
      setProducts(data);
    }
    fetchProducts();
  }, [])

  return (
    <>
      <Row>
        {products.map((p) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={p} key={p}/>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
