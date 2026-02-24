import { Navbar, Nav, Container, Button, FormControl } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {useState} from "react";

function CustomNavbar({onSearch, onCategoryChange}) {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm.trim());
        navigate("/");
    };
    const handleCategory = (category) => {
        setSearchTerm("");
        onCategoryChange(category);
    };
    const handleSearchChange = (e) => {
      const value = e.target.value;
      setSearchTerm(value);
    };

  return (
    <Navbar fixed="top" bg="primary" variant="dark" expand="lg" >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={()=> handleCategory("all")}>
          Flipkart
        </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={()=> handleCategory("furniture")}>
              Furniture
            </Nav.Link>
            <Nav.Link as={Link} to="/" onClick={()=> handleCategory("groceries")}>
              Groceries
            </Nav.Link>
            <Nav.Link as={Link} to="/" onClick={()=> handleCategory("fashion")}>
              Fashion
            </Nav.Link>
            <Nav.Link as={Link} to="/" onClick={()=> handleCategory("vehicle")}>
              Vehicle
            </Nav.Link>
          </Nav>
            <form className="d-flex w-50" onSubmit={handleSearch}>
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                    <Button variant="outline-light" type="submit">Search</Button>
            </form>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
