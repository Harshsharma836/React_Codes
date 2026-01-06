import { createContext, useState } from "react";

export const ProStore = createContext(null);

export function StoreProvider({ children }) {
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState({});

  const productDummy = [
    { id: 1, name: "pensil" },
    { id: 2, name: "cup" },
    { id: 3, name: "headphones" },
  ];

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
      value={{ product, cart, selectPro, storePro, productDummy }}
    >
      {children}
    </ProStore.Provider>
  );
}
