import React from "react";
import products from "../../products";
import { useParams, Link } from "react-router-dom";
import {
  Col,
  Row,
  Button,
  Card,
  Image,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

function ProductDetails({ match }) {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);
  return (
    <>
      <div>
        <Link to="/" className="my-3 btn btn-dark">
          Go Back
        </Link>

        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} style={{ maxHeight: '500px', width: '100%', objectFit: 'contain' }}></Image>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>
                  Rating : {product.rating} |No.Of Reviews {product.numReviews}
                </h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>Description : {product.description} </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h3>Prize : {product.price}</h3>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card className="p-3">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Status</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Category</Col>
                    <Col>{product.category}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Brand</Col>
                    <Col>{product.brand}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>
                        <Button className="btn-block" disabled={product.countInStock==0} type="button"> Add To Cart</Button>
                        </Col>
                    </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ProductDetails;
