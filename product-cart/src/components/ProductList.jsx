import { ProStore } from '../context/ProductCOntext';
import {useContext} from 'react';


function Product(){
    const store = useContext(ProStore);
    console.log("Store " + JSON.stringify(store));

    const productDummy = [
        {id : 1, name : "pensil" , detail : "this is an pensil"},
        {id : 2, name : "cup" , detail : "This is a cup"},
        {id : 3, name : "headphones" , detail : "this is an headphones"},
    ]

    console.log("Hello")
    return (
        <div className="card p-3">
            {productDummy.map((val)=>{
                return (<button className="btn btn-danger" key={val.id} onClick={ProStore.selectPro}>
                    {val.name}
                </button>)
            })}
        </div>
    )
}

export default Product;