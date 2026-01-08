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

  
    // console.log("Store " + JSON.stringify(store));

    const productDummy = [
        {id : 1, name : "pensil" , detail : "this is an pensil" , url : "https://krayond.com/produk/pensil-2b-faber-castell-12-pcs/?srsltid=AfmBOoqbdyZxxAG6thBBbyQl2UO-eCgkklDu2TD0bY_8llUoTJzleD5F"},
        {id : 2, name : "cup" , detail : "This is a cup" , url : "https://induspeople.in/cdn/shop/files/TIPCR_240CupSaucer_Teal_1.jpg?v=1687581195&width=1080"},
        {id : 3, name : "headphones" , detail : "this is an headphones" , url : "https://eu.shopviva.com/cdn/shop/products/V70848_600x.jpg?v=1609722822"},
    ]

  return (
    <ProStore.Provider
      value={{ product, cart, selectPro, storePro , productDummy}}
    >
      {children}
    </ProStore.Provider>
  );
}
