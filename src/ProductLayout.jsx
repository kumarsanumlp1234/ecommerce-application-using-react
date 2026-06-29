import { Outlet } from "react-router-dom";
import FilterSidebar from "./component/FilterSidebar";
import './css/ProductLayout.css'

function ProductLayout() {
  return (
    <div className="product-layout">
      

      <main className="product-content">
        <Outlet />
      </main>
    </div>
  );
}

export default ProductLayout;