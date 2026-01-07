import { useCallback, useContext, useState } from "react";
import { ProStore } from "../context/ProductCOntext";

function ProductDetails(){
    const { product , storePro} = useContext(ProStore);
    console.log("selectPro  " + product)
    
    const [qty , setQty] = useState(1); 

    const increase = useCallback(()=>{
        setQty((prev) => prev + 1);
    } , []);

    const decrease = useCallback(()=>{ // -1 
        setQty((prev) => (prev > 1 ? prev - 1 : 1 ) );
    } , []);

    const store = useCallback(() =>{
        if(product){
            storePro(product.id , qty);
            alert("Stored success")
        }
    } , [product , storePro , qty ] );

    if(!product){
        return (
            <div className="card p-3">
                <h5>Select a product</h5>
            </div>
        )
    };

    return (
        <div className="card p-3">
            <h5>{product.name} Details</h5>

            <div>
                <button className="btn btn-danger" onClick={increase}> + </button>

                <span className="fw-bold">{qty}</span>

                <button className="btn btn-danger" onClick={decrease}> - </button>

                <button className="btn btn-primary" onClick={store}>Store</button>
            </div>
        </div>
    )
}

export default ProductDetails;