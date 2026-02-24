import { useEffect, useState } from "react";
import { fetchProducts } from "../Services/Api";
import ProductCard from "../Components/Productcard";
import { Spinner, Container, Row, Alert } from "react-bootstrap";

const fashionCategories = new Set([
  "beauty",
  "fragrances",
  "skin-care",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
  "tops",
  "sunglasses",
]);

const vehicleCategories = new Set([
  "vehicle",
  "motorcycle",
]);

function ProductList({ search, category }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
  if (error) return <Alert variant="danger">{error}</Alert>;

  const normalizedSearch = search.trim().toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(normalizedSearch);

    const matchesCategory =
      category === "all" ||
      (category === "fashion" && fashionCategories.has(product.category)) ||
      (category === "vehicle" && vehicleCategories.has(product.category)) ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (filteredProducts.length === 0) {
    return (
      <Container className="mt-5">
        <Alert variant="info">No products found for this filter.</Alert>
      </Container>
    );
  }

  return (
    <Container fluid className="mt-4">
      <Row className="g-4 mt-5">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
