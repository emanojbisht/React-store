import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function getProducts() {
      setIsLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setIsLoading(false);
    }
    getProducts();
  }, []);

  return (
    <div className="container">
      <Header />
      <Main products={products} isLoading={isLoading} />
    </div>
  );
}

export default App;
