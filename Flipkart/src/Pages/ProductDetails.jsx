import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById } from "../Services/Api";
import { Container, Button, Spinner, Alert, Row, Col } from "react-bootstrap";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProductById(id)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Spinner animation="border" role="status"></Spinner>
      <span className="fs-5 ms-2">Loading...</span>
    </div>
  );
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
  <Container fluid className="mt-5 " >
    <Button className="mb-3 mt-5" onClick={() => navigate("/")}>
      Back
    </Button>

    <Row className="align-items-center">
      <Col md={6} className="text-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="img-fluid"
          style={{ maxHeight: "350px", objectFit: "contain" }}
        />
      </Col>

      <Col md={6}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Price:</strong> ${product.price}</p>
      </Col>
    </Row>
  </Container>
);
}

export default ProductDetail;
