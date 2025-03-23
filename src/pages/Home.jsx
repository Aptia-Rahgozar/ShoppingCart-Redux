import { useState, useEffect } from "react";
import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components";

export const Home = () => {
  useTitle("Home");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Replace this with your Backendless REST API URL
    const url = `${import.meta.env.VITE_BACKENDLESS_URL}`;

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Set photos data from the response
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <main>
      <section className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
