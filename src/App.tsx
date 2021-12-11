import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import ProductsView from "./views/ProductsView"
import ArticlesView from "./views/ArticlesView"
import AppNavbar from "./components/AppNavbar";


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




function App() {
  return (
    <div>
      <AppNavbar />
      <AppView />
    </div>
  );
}

export default App;

