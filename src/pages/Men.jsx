 import React, { useState, useContext } from "react";
import "../css/Men.css";
import { CartContext } from "../context/CartContext";


const Men = () => {
  const { addToCart } = useContext(CartContext);

  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("default");

  const [showForm, setShowForm] = useState(false);
const [selectedItem, setSelectedItem] = useState(null);
const [orderSuccess, setOrderSuccess] = useState(false);

  const products = [
    { id: 1, name: "T-Shirt", brand: "Nike", price: 499, image: "tshirt.jpg" },
    { id: 2, name: "Shirt", brand: "Adidas", price: 799, image: "shirt.jpg" },
    { id: 3, name: "Jeans", brand: "Levi's", price: 1299, image: "jeans.jpg" },
    { id: 4, name: "Jacket", brand: "Puma", price: 1999, image: "jacket.jpg" },
    { id: 5, name: "Hoodie", brand: "Nike", price: 1499, image: "hoodie.jpg" },
    { id: 6, name: "Sweatshirt", brand: "H&M", price: 999, image: "sweatshirt.jpg" },
    { id: 7, name: "Shorts", brand: "Adidas", price: 599, image: "shorts.jpg" },
    { id: 8, name: "Formal Shirt", brand: "Allen Solly", price: 1099, image: "formalshirt.jpg" },
    { id: 9, name: "Blazer", brand: "Zara", price: 2499, image: "blazer.jpg" },
    { id: 10, name: "Track Pants", brand: "Nike", price: 899, image: "trackpants.jpg" },
    { id: 11, name: "Cargo Pants", brand: "Roadster", price: 1199, image: "cargo.jpg" },
    { id: 12, name: "Denim Jacket", brand: "Levi's", price: 1799, image: "denimjacket.jpg" },
  ];

  // FILTER
  let result = products.filter((item) =>
    item.brand.toLowerCase().includes(search.toLowerCase())
  );

  // SORT
  if (sortType === "name") {
    result = [...result].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (sortType === "priceLowHigh") {
    result = [...result].sort((a, b) => a.price - b.price);
  }

  if (sortType === "priceHighLow") {
    result = [...result].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="men-page">
      <h1>Men's Clothing</h1>

      {/* SORT */}
      <select onChange={(e) => setSortType(e.target.value)}>
        <option value="default">Default</option>
        <option value="name">Sort by Name</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="priceHighLow">Price: High to Low</option>
      </select>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search by brand..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* PRODUCTS */}
      <div className="products">
        {result.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.brand}</p>
            <p>₹{item.price}</p>

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
{showForm && (
  <div className="checkout-modal">
    <div className="checkout-box">
      <h2>Checkout</h2>

      <input type="text" placeholder="Full Name" />
      <input type="text" placeholder="Address" />
      <input type="text" placeholder="Pin Code" />
      <input type="text" placeholder="Phone Number" />

      <button
        className="place-order-btn"
        onClick={() => {
          setShowForm(false);
          setOrderSuccess(true);
        }}
      >
        Place Order
      </button>

      <button
        className="cancel-btn"
        onClick={() => setShowForm(false)}
      >
        Cancel
      </button>
    </div>
  </div>
)}
{orderSuccess && (
  <div className="success-box">
    <h2>🎉 Order Confirmed!</h2>
    <p>Your order has been placed successfully.</p>
    <p>📦 Estimated Delivery: 1 - 2 Days</p>

    <button onClick={() => setOrderSuccess(false)}>
      OK
    </button>
  </div>
)}

          </div>
        ))}
      </div>
    </div>
  );
};

export default Men;