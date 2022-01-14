import { Product, ProductResponse } from "../domain/product/ProductModels";
import { Figure, Table } from "react-bootstrap";

function ProductRow(productResponse: ProductResponse): JSX.Element {
  return (
    <>
      <h1 className="mt-4 h4">Products in the warehouse</h1>
      <Table striped responsive bordered hover className="table-dark">
        <thead>
          <tr>
            <th>name</th>
            <th>stock</th>
            <th>price</th>
            <th>details</th>
            {/* <th>createdAt</th>
            <th>updatedAt</th>
            <th>uuid</th> */}
            <th>image</th>
          </tr>
        </thead>

        <tbody>
          {Object.values(productResponse.content).map(
            (product: Product, index: number) => {
              return (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.stock}</td>
                  <td>&euro; {product.price}</td>

                  <td>
                    <details>
                      <summary>More details</summary>
                      <ul className="list-group p-3">
                        <li className="list-group-item list-group-item-dark">
                          <small>
                            Created at:&nbsp;
                            {new Date(product.createdAt).toLocaleString()}
                          </small>
                        </li>
                        <li className="list-group-item list-group-item-dark">
                          <small>
                            Updated at:&nbsp;
                            {new Date(product.updatedAt).toLocaleString()}
                          </small>
                        </li>
                        <li className="list-group-item list-group-item-dark">
                          <small>
                            UUID:&nbsp;<code>{product.uid}</code>
                          </small>
                        </li>
                      </ul>
                    </details>
                  </td>
                  <td>{ImageList(product.name, product.imageURLs)}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </Table>
    </>
  );
}

function ImageList(productName: string, urls: string[] | null): JSX.Element {
  if (!urls) {
    return <div></div>;
  }

  return (
    <div>
      {Object.values(urls).map((url: string, index: number) => {
        //return <picture key={index}><img loading="lazy" alt="article image" src={url}></img></picture>
        return (
          <Figure key={index}>
            <Figure.Image
              width={171}
              height={180}
              alt={createProductThumbnailAlt(productName)}
              src={url}
            />
            {/* <Figure.Caption>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Figure.Caption> */}
          </Figure>
        );
      })}
    </div>
  );
}

function createProductThumbnailAlt(productName: string): string {
  return `${productName} thumbnail`;
}

export default ProductRow;
