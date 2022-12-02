import React from 'react'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import products from '../products'
import { useParams, Link } from 'react-router-dom'
export const ProductScreen = () => {
    const { id } = useParams();
    const product = products.find(p => p._id === id)
  return (
    <>
    <Link className='btn btn-light my-3' to='/'>Go Back</Link>
    <Row>
        <Col md={6}>
            <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: ${product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                    Description: {product.description}
                </ListGroup.Item>
            </ListGroup>
        </Col>  
    </Row>
    </>
  )
}
