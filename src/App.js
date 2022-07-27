import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/Product";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  const user = false;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/products/:category" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<ProductPage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
