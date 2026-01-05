import { useContext, useState, useCallback } from "react";
import { ProductContext } from "../context/ProductContext";

export default function ProductDetails() {
  const { selectedProduct, storeProduct } = useContext(ProductContext);
  const [qty, setQty] = useState(1);

  const increase = useCallback(() => {
    setQty((prev) => prev + 1);
  }, []);

  const decrease = useCallback(() => {
    setQty((prev) => (prev > 1 ? prev - 1 : 1));
  }, []);

  const store = useCallback(() => {
    if (selectedProduct) {
      storeProduct(selectedProduct.id, qty);
      alert("Stored successfully");
    }
  }, [selectedProduct, qty, storeProduct]);

  if (!selectedProduct) {
    return (
      <div className="card p-3">
        <h5>Select a product</h5>
      </div>
    );
  }

  return (
    <div className="card p-3">
      <h5>{selectedProduct.name} Details</h5>

      <div className="d-flex align-items-center gap-3 my-3">
        <button className="btn btn-danger" onClick={decrease}>
          -
        </button>

        <span className="fw-bold">{qty}</span>

        <button className="btn btn-success" onClick={increase}>
          +
        </button>
      </div>

      <button className="btn btn-primary" onClick={store}>
        Store
      </button>
    </div>
  );
}
