import { useEffect, useState } from "react";
import ProductRow from "../components/ProductRow";
import { ProductResponse } from "../domain/ProductModels";

function ProductsView() {
  const [productRows, setProductRows] = useState((<></>) as JSX.Element);

  const fetchProductRows: () => Promise<void> = async () => {
    fetch(`http://localhost:8080/api/products`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((response: ProductResponse) => {
        setProductRows(ProductRow(response));
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProductRows();
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="h4">Products in the warehouse</h1>
        <div>{productRows}</div>
      </div>
    </>
  );
}

export default ProductsView;
