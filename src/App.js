import "./App.css";
import Categories from "./components/Categories";
import Products from "./components/Products";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const handleCategoryChange = (cat) => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/category/${cat}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div style={{ padding: "50px" }}>
      <Categories categories={categories} onChage={handleCategoryChange} />
      {loading ? (
        <h1>produts Loading....</h1>
      ) : (
        <Products products={products} />
      )}
    </div>
  );
}

export default App;
