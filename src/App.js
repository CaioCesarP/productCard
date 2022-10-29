import { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product";
import { data } from "./mock/MockProduct";

function App() {
  const [productData, setProductData] = useState([]);
  const [productError, setProductError] = useState([]);
  const [productLoaded, setProductLoaded] = useState(false);
  const apiUrl = "https://635d5f38b13fd8c8607c7f99.mockapi.io/produto";

  useEffect(() => {
    fetch(apiUrl).then((response) => {
      response
        .json()
        .then((data) => {
          setProductData(data);
        })
        .catch((e) => {
          setProductError(e);
        })
        .finally(() => {
          setProductLoaded(true);
        });
    });
  }, []);

  if (!productLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <Product data={data.products} />
    </div>
  );
}

export default App;
