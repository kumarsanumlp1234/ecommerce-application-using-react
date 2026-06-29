import React from "react";
import "../css/Electronicfilter.css";

const Electronicfilter = ({ filters, setFilters }) => {

  const handleChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type] === value ? "" : value,
    }));
  };

  const handleRating = (value) => {
    setFilters((prev) => ({
      ...prev,
      rating: prev.rating === value ? 0 : value,
    }));
  };

  const handleDiscount = (value) => {
    setFilters((prev) => ({
      ...prev,
      discount: prev.discount === value ? 0 : value,
    }));
  };

  return (
    <div className="sidebar">
      <h2>Filters</h2>

      {/* Brand */}
      <div className="filter-section">
        <h3>Brand</h3>

        {[
          "Apple",
          "Samsung",
          "Dell",
          "HP",
          "Sony",
          "Canon",
          "Lenovo",
          "JBL",
          "Logitech",
          "LG",
          "Mi"
        ].map((brand) => (
          <label key={brand}>
            <input
              type="checkbox"
              checked={filters.brand === brand}
              onChange={() => handleChange("brand", brand)}
            />
            {brand}
          </label>
        ))}
      </div>

      {/* Color */}
      <div className="filter-section">
        <h3>Color</h3>

        {[
          "Black",
          "White",
          "Silver",
          "Gray",
          "Blue"
        ].map((color) => (
          <label key={color}>
            <input
              type="checkbox"
              checked={filters.color === color}
              onChange={() => handleChange("color", color)}
            />
            {color}
          </label>
        ))}
      </div>

      {/* Rating */}
      <div className="filter-section">
        <h3>Rating</h3>

        {[4, 4.5].map((rating) => (
          <label key={rating}>
            <input
              type="checkbox"
              checked={filters.rating === rating}
              onChange={() => handleRating(rating)}
            />
            {rating}★ & Above
          </label>
        ))}
      </div>

      {/* Discount */}
      <div className="filter-section">
        <h3>Discount</h3>

        {[10, 20, 30].map((discount) => (
          <label key={discount}>
            <input
              type="checkbox"
              checked={filters.discount === discount}
              onChange={() => handleDiscount(discount)}
            />
            {discount}% & Above
          </label>
        ))}
      </div>
    </div>
  );
};

export default Electronicfilter;