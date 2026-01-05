import React, { memo, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const products = [
  { id: 1, name: "P1" },
  { id: 2, name: "P2" },
  { id: 3, name: "P3" },
];

const ProductList = memo(() => {
  const { selectProduct } = useContext(ProductContext);

  return (
    <div className="card p-3">
      <h5>Products</h5>

      {products.map((p) => (
        <button
          key={p.id}
          className="btn btn-outline-primary mb-2 w-100"
          onClick={() => selectProduct(p)}
        >
          {p.name}
        </button>
      ))}
    </div>
  );
});

export default ProductList;
