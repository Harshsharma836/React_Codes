import { ProStore } from '../context/ProductCOntext';
import {useContext} from 'react';


function Product(){
    const { selectPro } = useContext(ProStore);

    // console.log("Store " + JSON.stringify(store));

    const productDummy = [
        {id : 1, name : "pensil" , detail : "this is an pensil" , url : "https://krayond.com/produk/pensil-2b-faber-castell-12-pcs/?srsltid=AfmBOoqbdyZxxAG6thBBbyQl2UO-eCgkklDu2TD0bY_8llUoTJzleD5F"},
        {id : 2, name : "cup" , detail : "This is a cup" , url : "https://induspeople.in/products/240ml-cappuccino-cup-saucer-span-br-the-cafe-range-span"},
        {id : 3, name : "headphones" , detail : "this is an headphones" , url : "https://eu.shopviva.com/cdn/shop/products/V70848_600x.jpg?v=1609722822"},
    ]

    console.log("Hello")
    return (
        <div className="card p-3">
            {productDummy.map((val)=>{
                return (<button className="btn btn-danger" key={val.id} onClick={()=> selectPro(val)}>
                    {val.name}
                </button>)
            })}
        </div>
    )
}

export default Product;