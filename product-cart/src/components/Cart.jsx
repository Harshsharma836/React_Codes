import { useContext } from "react";
import { ProStore } from "../context/ProductCOntext";

function Cart(){
    const { cart , productDummy} = useContext(ProStore);

    console.log("productDummy")
    console.log(productDummy)

    console.log("CART FROM THE STORE")
    console.log(cart)
    const cartItems = Object.keys(cart).map((id)=>{
      const product = productDummy.find(
        (p) =>
          p.id == id
      )
      console.log(product)

      return {
        ...product,
        qty : cart[id]
      }
    });

    console.log("cartItems")
    console.log(cartItems);

    

    if(cartItems.length === 0){
      return (
        <div className="card p-3 mt-3">
          <h5>Cart is Empty</h5>
        </div>
      )
    }

    return (
      <div className="card p-3 mt-3">
          <div className="mb-3">Cart Items</div>

          {cartItems.map((item)=>{

          return <div key={item.id} className="d-flex mb 3 border-bottom pb-2">
                <img src={item.url} alt={item.name} style={{width : "100px", height:"100px", objectFit:"cover" }}></img>

                <div className="ms-3">
                    <h3>{item.name}</h3>
                    <p className="mb-1">{item.detail}</p>
                    <b>
                      <p>QTY : {item.qty}</p>
                    </b>
                </div>
            </div>
          })}
      </div>
    )
}

export default Cart;