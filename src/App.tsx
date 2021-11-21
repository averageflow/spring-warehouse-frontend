import React from "react";
import {
  Route,
  Routes,
  Link,
  BrowserRouter
} from "react-router-dom";


import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from "react-bootstrap";


interface Product {
  id: number
  name: string
  price: number
  createdAt: number
  updatedAt: number
}

interface ProductResponse {
  data: Record<string, Product>
  sort: number[]
}


interface Article {
  id: number
  name: string
  createdAt: number
  updatedAt: number
}

interface ArticleResponse {
  data: Record<string, Article>
  sort: number[]
}

function formatProduct(productResponse: ProductResponse): JSX.Element {
  return <Table striped responsive bordered hover>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Created At</th>
      </tr>
    </thead>
    <tbody>
      {Object.values(productResponse.sort).map(sortItem => {
        return <tr>
          <td>{productResponse.data[sortItem].name}</td>
          <td>{productResponse.data[sortItem].price}</td>
          <td>{productResponse.data[sortItem].createdAt}</td>
        </tr>
      })}
    </tbody>
  </Table>
}

function formatArticle(articleResponse: ArticleResponse): JSX.Element[] {
  return Object.values(articleResponse.sort).map(sortItem => {
    return <h2>{articleResponse.data[sortItem].name}</h2>
  })
}

function AppView() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<ProductsView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/articles" element={<ArticlesView />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

function AppNavbar(): JSX.Element {
  return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Joe's Warehouse</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/products">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/articles">Articles</a>
          </li>
        </ul>
      </div>
    </div>
  </nav >
}


function ArticlesView(): JSX.Element {
  const [articleRows, setArticleRows] = useState([] as JSX.Element[]);

  const fetchArticleRows = async () => {
    fetch(
      `http://localhost:8080/api/articles`,
      {
        method: "GET",
      }
    )
      .then(res => res.json())
      .then(response => {
        setArticleRows(formatArticle(response))
      })
      .catch(error => console.log(error));
  }


  useEffect(() => {
    fetchArticleRows()
  }, []);

  return (
    <div className="container">
      {articleRows}
    </div>
  );
}

function ProductsView() {
  const [productRows, setProductRows] = useState(<></> as JSX.Element);

  const fetchProductRows = async () => {
    fetch(
      `http://localhost:8080/api/products`,
      {
        method: "GET",
      }
    )
      .then(res => res.json())
      .then(response => {
        setProductRows(formatProduct(response))
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    fetchProductRows()
  }, []);
  return (
    <div className="container">
      {productRows}
    </div>
  );
}



function App() {
  return (
    <div>
      <AppNavbar />
      <AppView />
    </div>
  );
}

export default App;

