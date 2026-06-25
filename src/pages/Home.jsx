 import React from "react";
import img from "../assets/img.webp";
import ouy from "../assets/ouy.jpg"
import ree from "../assets/ree.webp"
import ttt from "../assets/ttt.webp"
import '../css/Home.css'
import Footer from "../component/Footer"


function Home() {
  return (
    <div className="hero">

      <img
        src={img}
        alt="Smart Shopping"
        className="hero-img"
      />

      <div className="features">

        <div className="feature-item">
          <img src={ouy} alt="7 Days Easy Return" className="img1" />
          <span>7 Days Easy Return</span>
        </div>

        <div className="feature-item">
          <img src={ree} alt="Cash on Delivery" className="img2" />
          <span>Cash on Delivery</span>
        </div>

        <div className="feature-item">
          <img src={ttt} alt="Lowest Prices" className="img3" />
          <span>Lowest Prices</span>
        </div>
<p>cdscvhjdvjcdkv d</p>
      </div>
      <Footer />

    </div>
  );
}

export default Home;