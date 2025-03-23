import { useState, useEffect } from "react";

import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components";

export const Home = () => {
  useTitle("Home");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Replace this with your Backendless REST API URL
    const url =
      "https://edifiedumbrella-eu.backendless.app/api/data/ShoppingCartWithRedux";

    fetch(url, {
      method: "GET",
      headers: {
        "application-id": import.meta.env.VITE_BACKENDLESS_APP_ID, // Replace with your App ID
        "secret-key": import.meta.env.VITE_BACKENDLESS_API_KEY, // Replace with your API Key
        "Content-Type": "application/json",
      },
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
