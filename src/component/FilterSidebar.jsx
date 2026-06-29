 import React from "react";
import "../css/FilterSidebar.css";

const FilterSidebar = ({ filters, setFilters }) => {

  const handleChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type] === value ? "" : value, // toggle behavior
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

      {/* BRAND */}
      <div className="filter-section">
        <h3>Brand</h3>

        {["Nike", "Adidas", "Puma", "Levi's",].map((brand) => (
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

      {/* SIZE */}
      <div className="filter-section">
        <h3>Size</h3>

        {["S", "M", "L", "XL"].map((size) => (
          <label key={size}>
            <input
              type="checkbox"
              checked={filters.size === size}
              onChange={() => handleChange("size", size)}
            />
            {size}
          </label>
        ))}
      </div>

      {/* COLOR */}
      <div className="filter-section">
        <h3>Color</h3>

        {["Black", "White", "Blue", "Red"].map((color) => (
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

      {/* RATING */}
      <div className="filter-section">
        <h3>Rating</h3>

        {[4, 3].map((r) => (
          <label key={r}>
            <input
              type="checkbox"
              checked={filters.rating === r}
              onChange={() => handleRating(r)}
            />
            {r}★ & above
          </label>
        ))}
      </div>

      {/* DISCOUNT */}
      <div className="filter-section">
        <h3>Discount</h3>

        {[10, 25, 50].map((d) => (
          <label key={d}>
            <input
              type="checkbox"
              checked={filters.discount === d}
              onChange={() => handleDiscount(d)}
            />
            {d}% or more
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;