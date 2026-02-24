import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import ProductList from "./Pages/ProductList";
import ProductDetails from "./Pages/ProductDetails";
import CustomNav from "./Components/Navbar";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    setSearch("");
  };

  return (
    <>
      <CustomNav onSearch={handleSearch} onCategoryChange={handleCategoryChange} />
      <Routes>
        <Route path="/" element={<ProductList search={search} category={category} />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
