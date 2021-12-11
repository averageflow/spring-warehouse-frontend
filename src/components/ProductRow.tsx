import {Product, ProductResponse} from "../domain/ProductModels";
import {Figure, Table} from "react-bootstrap";

function ProductRow(productResponse: ProductResponse): JSX.Element {
    return <Table striped responsive bordered hover>
        <thead>
        <tr>
            <th>name</th>
            {/* <th>imageURLs</th> */}
            <th>stock</th>
            <th>price</th>
            <th>createdAt</th>
            <th>updatedAt</th>
            <th>uuid</th>
            <th>image</th>
        </tr>
        </thead>
        <tbody>
        {Object.values(productResponse.content).map((product: Product, index: number) => {
            return <tr key={index}>
                <td>{product.name}</td>
                {/* <td>{product.imageUrls}</td> */}
                <td>{product.productStock}</td>
                <td>&euro; {product.price}</td>
                <td>{new Date(product.createdAt).toLocaleString()}</td>
                <td> {new Date(product.updatedAt).toLocaleString()}</td>
                <td><small><code>{product.uid}</code></small></td>
                {/* <td><details>
                        <summary>View</summary>
                        
                    </details></td> */}
                <td>{ImageList(product.name, product.imageURLs)}</td>

            </tr>
        })}
        </tbody>
    </Table>
}

function ImageList(productName: string, urls: string[] | null): JSX.Element {
    if (!urls) {
        return <div></div>
    }

    return <div>
        {Object.values(urls).map((url: string, index: number) => {
            //return <picture key={index}><img loading="lazy" alt="article image" src={url}></img></picture>
            return <Figure key={index}>
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
        })}
    </div>
}

function createProductThumbnailAlt(productName: string): string {
    return `${productName} thumbnail`
}

export default ProductRow
