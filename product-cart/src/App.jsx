import { useState } from 'react'
import Product from './components/ProductList'
import { StoreProvider } from './context/ProductCOntext'
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

function App() {
  const [count, setCount] = useState(0);

  return (
    <StoreProvider>
      <div className='container mt-4'>
          <div className='row'>
              <div className='col-md-4'>
                <Product></Product>
              </div>
              <div className='col-md-8'>
                  <ProductDetails></ProductDetails>
              </div>
              <div className='col-md-8'>
                  <Cart></Cart>
              </div>
          </div>
      </div>
      </StoreProvider>
  )
}

export default App
