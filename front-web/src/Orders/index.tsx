import { useEffect, useState } from "react";
import { Product } from "./types";
import { fetchProducts } from "../api";
import StepsHeader from "./StepsHeader";
import ProductsList from "./ProductsList";
import "./styles.css";

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='orders-container'>
      <StepsHeader />
      <ProductsList products={products} />
    </div>
  );
}

export default Orders;