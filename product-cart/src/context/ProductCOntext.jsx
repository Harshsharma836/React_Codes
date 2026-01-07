import { createContext, useState } from "react";

export const ProStore = createContext(null);

export function StoreProvider({ children }) {

  const [product, setProduct] = useState(null); // It's for single product 
  const [cart, setCart] = useState({});

  console.log("Cart");
  console.log(cart)

  function selectPro(product) {
    setProduct(product);
  }

  function storePro(proId, proQty) {
    setCart((val) => ({
      ...val,
      [proId]: proQty,
    }));
  }

  return (
    <ProStore.Provider
      value={{ product, cart, selectPro, storePro }}
    >
      {children}
    </ProStore.Provider>
  );
}
