import React, { useState, useContext } from "react";
import "../css/Women.css";
import { CartContext } from "../context/CartContext";
import kurti from '../assets/kurti.png'

const Women = () => {
  const { addToCart } = useContext(CartContext);

  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("default");

  const [showForm, setShowForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const products = [
    { id: 1, name: "Kurti", brand: "Biba", price: 799, image: kurti },
    { id: 2, name: "Saree", brand: "FabIndia", price: 1999, image: kurti },
    { id: 3, name: "Top", brand: "Zara", price: 599, image: kurti },
    { id: 4, name: "Jeans", brand: "Levi's", price: 1299, image: kurti },
    { id: 5, name: "Dress", brand: "H&M", price: 1499, image: kurti },
    { id: 6, name: "Jacket", brand: "Nike", price: 1999, image: kurti },
    { id: 7, name: "Skirt", brand: "Roadster", price: 899, image: kurti },
    { id: 8, name: "Leggings", brand: "Puma", price: 499, image: kurti},
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
      <h1>Women's Clothing</h1>

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
            <img src={item.image}  alt={item.name}  width="200" />
            
            <h3>{item.name}</h3>
            <p>{item.brand}</p>
            <p>₹{item.price}</p>

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

      {/* CHECKOUT MODAL (OUTSIDE MAP - FIXED) */}
      {showForm && (
        <div className="checkout-modal">
          <div className="checkout-box">
            <h2>Checkout</h2>

            <p><b>Product:</b> {selectedItem?.name}</p>

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

      {/* SUCCESS MESSAGE */}
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
  );
};

export default Women;