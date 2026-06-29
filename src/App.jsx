 import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import ProductLayout from "./ProductLayout";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Electronics from "./pages/Electronics";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />

        {/* All product pages with filters */}
        <Route element={<ProductLayout />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="electronics" element={<Electronics/>}/>
          
        </Route>
      </Route>
    </Routes>
  );
}

export default App;