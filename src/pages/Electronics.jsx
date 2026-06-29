 import React, { useState, useContext } from "react";
import "../css/Electronics.css";
import { CartContext } from "../context/CartContext";
import FilterSidebar from "../component/FilterSidebar";
import Electronicfilter from "../component/Electronicfilter";

 

const Electronics = () => {
  const { addToCart } = useContext(CartContext);

  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("default");

  const [showForm, setShowForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const [filters, setFilters] = useState({
    brand: "",
    color: "",
    size: "",
    rating: 0,
    discount: 0,
  });

  const products = [
    {
      id: 1,
      name: "Laptop",
      brand: "Dell",
      price: 59999,
      color: "Silver",
      size: "15 inch",
      rating: 4.8,
      discount: 15,
       
    },
    {
      id: 2,
      name: "Smartphone",
      brand: "Samsung",
      price: 24999,
      color: "Black",
      size: "6.5 inch",
      rating: 4.6,
      discount: 20,
      
    },
    {
      id: 3,
      name: "Headphones",
      brand: "Sony",
      price: 3999,
      color: "Black",
      size: "Wireless",
      rating: 4.7,
      discount: 30,
       
    },
    {
      id: 4,
      name: "Smart Watch",
      brand: "Apple",
      price: 29999,
      color: "White",
      size: "44mm",
      rating: 4.9,
      discount: 10,
      
    },
    {
      id: 5,
      name: "Camera",
      brand: "Canon",
      price: 45999,
      color: "Black",
      size: "DSLR",
      rating: 4.8,
      discount: 18,
      
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      brand: "JBL",
      price: 5999,
      color: "Blue",
      size: "Portable",
      rating: 4.5,
      discount: 25,
       
    },
    {
      id: 7,
      name: "Keyboard",
      brand: "Logitech",
      price: 1999,
      color: "Black",
      size: "Full Size",
      rating: 4.4,
      discount: 15,
      
    },
    {
      id: 8,
      name: "Mouse",
      brand: "HP",
      price: 999,
      color: "Black",
      size: "Wireless",
      rating: 4.3,
      discount: 20,
      
    },
    {
      id: 9,
      name: "Monitor",
      brand: "LG",
      price: 14999,
      color: "Black",
      size: "24 inch",
      rating: 4.6,
      discount: 22,
      
    },
    {
      id: 10,
      name: "Printer",
      brand: "Epson",
      price: 8999,
      color: "White",
      size: "A4",
      rating: 4.2,
      discount: 12,
      
    },
    {
      id: 11,
      name: "Tablet",
      brand: "Lenovo",
      price: 18999,
      color: "Gray",
      size: "10 inch",
      rating: 4.5,
      discount: 18,
      
    },
    {
      id: 12,
      name: "Power Bank",
      brand: "Mi",
      price: 1499,
      color: "Black",
      size: "20000mAh",
      rating: 4.4,
      discount: 28,
       
    },
  ];

  let result = products.filter((item) => {
    return (
      item.brand.toLowerCase().includes(search.toLowerCase()) &&
      (filters.brand === "" || item.brand === filters.brand) &&
      (filters.color === "" || item.color === filters.color) &&
      (filters.size === "" || item.size === filters.size) &&
      (filters.rating === 0 || item.rating >= filters.rating) &&
      (filters.discount === 0 || item.discount >= filters.discount)
    );
  });

  if (sortType === "name") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortType === "priceLowHigh") {
    result.sort((a, b) => a.price - b.price);
  }

  if (sortType === "priceHighLow") {
    result.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="men-layout">
      <aside className="filter-sidebar">
        <Electronicfilter filters={filters} setFilters={setFilters} />
      </aside>

      <main className="men-page">
        <h1>Electronics</h1>

        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="default">Default</option>
          <option value="name">Sort by Name</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
        </select>

        <input
          type="text"
          placeholder="Search by brand..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="products">
          {result.map((item) => (
            <div className="card" key={item.id}>
          
              <h3>{item.name}</h3>
              <p>{item.brand}</p>
              <p>₹{item.price}</p>
              <p>⭐ {item.rating}</p>
              <p>🎨 {item.color}</p>
              <p>🏷️ {item.discount}%</p>
              <p>{item.size}</p>

              <div className="btn-group">
                <button
                  className="add-cart-btn"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>

                <button
                  className="buy-now-btn"
                  onClick={() => {
                    setSelectedItem(item);
                    setShowForm(true);
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {showForm && (
          <div className="checkout-modal">
            <div className="checkout-box">
              <h2>Checkout</h2>

              {selectedItem && (
                <p>
                  <b>{selectedItem.name}</b> - ₹{selectedItem.price}
                </p>
              )}

              <input placeholder="Full Name" />
              <input placeholder="Address" />
              <input placeholder="Pin Code" />
              <input placeholder="Phone Number" />

              <button onClick={() => setOrderSuccess(true)}>
                Place Order
              </button>

              <button onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </div>
          </div>
        )}

        {orderSuccess && (
          <div className="success-box">
            <h2>🎉 Order Confirmed!</h2>
            <button onClick={() => setOrderSuccess(false)}>OK</button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Electronics;