import { useEffect, useState } from "react";
import ProductRow from "../components/ProductRow";
import { redirectToLogin } from "../domain/auth/UnauthorizedPolicies";
import { ProductResponse } from "../domain/product/ProductModels";

const getProducts = (): Promise<ProductResponse> => {
  const url = `http://localhost:8080/api/products`;
  const options: RequestInit = {
    method: "GET",
    credentials: "include",
  };

  return fetch(url, options)
    .then((res: Response) => {
      if (res.status !== 200) {
        return redirectToLogin();
      }

      return res.json();
    })
    .catch((error) => {
      console.log("error occured", error);
    });
};

function ProductsView() {
  const [productRows, setProductRows] = useState((<></>) as JSX.Element);

  useEffect(() => {
    getProducts().then((products: ProductResponse) => {
      setProductRows(ProductRow(products));
    });
  }, []);

  return (
    <div className="container">
      <div>{productRows}</div>
    </div>
  );
}

export default ProductsView;
