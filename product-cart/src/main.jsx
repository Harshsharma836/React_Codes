import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { StoreProvider } from './context/ProductCOntext.jsx'

createRoot(document.getElementById('root')).render(
      <App />
)
