"use client";

import { fetchListOfProducts } from "@/actions";
import { useEffect, useState } from "react";

function ClientPageExample() {
  const [products, setProducts] = useState([]);

  async function getListOfProducts() {
    const products = await fetchListOfProducts();
    console.log(products);
    if (products) setProducts(products);
  }

  useEffect(() => {
    getListOfProducts();
  }, []);

  return (
    <div>
      <h1>Client page server actions examples</h1>
      <ul>
        {products && products.length > 0 ? (
          products.map((item) => <li>{item.title}</li>)
        ) : (
          <h2>no products found</h2>
        )}
      </ul>
    </div>
  );
}
export default ClientPageExample;
