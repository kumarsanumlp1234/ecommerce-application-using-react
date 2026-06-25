 import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Men from "./pages/Men";
import Women from "./pages/Women";

function App() {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;