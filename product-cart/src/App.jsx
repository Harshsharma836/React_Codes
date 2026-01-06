import { useState } from 'react'
import Product from './components/ProductList'
import { StoreProvider } from './context/ProductCOntext'

function App() {
  const [count, setCount] = useState(0);

  return (
    <StoreProvider>
      <div className='container mt-4'>
          <div className='row'>
              <div className='col-md-8'>
                <Product></Product>
              </div>
          </div>
      </div>
      </StoreProvider>
  )
}

export default App
