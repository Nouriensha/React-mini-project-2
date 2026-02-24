import { Card, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <Col md={3} sm={6} xs={12} className="mb-4">
      <Card className="h-100 w-100 shadow-sm">
        <Card.Img variant="top" src={product.thumbnail} 
        style={{ height: "200px", objectFit: "contain", padding: "10px" }}/>
        <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            Price: ${product.price} <br />
            Rating: {product.rating}
          </Card.Text>
          <Button onClick={() => navigate(`/products/${product.id}`)}>
            View Details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;