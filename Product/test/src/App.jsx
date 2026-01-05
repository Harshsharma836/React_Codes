import "bootstrap/dist/css/bootstrap.min.css";
import { ProductProvider } from "./context/ProductContext";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

export default function App() {
  return (
    <ProductProvider>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <ProductDetails />
          </div>
          <div className="col-md-8">
            <ProductList />
          </div>
        </div>
      </div>
    </ProductProvider>
  );
}
