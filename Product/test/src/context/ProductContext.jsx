import { createContext, useState, useCallback } from "react";

export const ProductContext = createContext(null);

export function ProductProvider({ children }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState({});

  const selectProduct = useCallback((product) => {
    setSelectedProduct(product);
  }, []);

  const storeProduct = useCallback((id, qty) => {
    setCart((prev) => ({
      ...prev,
      [id]: qty, //  productId : quantity
    }));
  }, []);

  console.log(cart);

  return (
    <ProductContext.Provider
      value={{ selectedProduct, selectProduct, storeProduct, cart }}
    >
      {children}
    </ProductContext.Provider>
  );
}
