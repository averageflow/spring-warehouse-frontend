import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import ProductsView from "./views/ProductsView";
import ArticlesView from "./views/ArticlesView";
import AppNavbar from "./components/AppNavbar";
import LoginView from "./views/LoginView";

function App() {
  return (
    <div>
      <AppNavbar />
      <div>
        <Routes>
          <Route path="/" element={<ProductsView />} />
          <Route path="/authenticate" element={<LoginView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/articles" element={<ArticlesView />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
