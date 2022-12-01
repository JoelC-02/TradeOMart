import React, { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home_page">
    <div className = "container-fluid">
        <div className = "row main">
            <div className = "col-lg-6 non-center">
                <div className = "heading">
                    <h1>Welcome To TradeOMart</h1>
                    <h1>Where netizens come to shop!</h1>
                </div>
                <div className = "row data">
                    <div className = "col-lg-6">
                        <h2>Customers</h2>
                        <p>Looking to buy amazing products at affordable prices</p>
                        <a href="/login"><button className = "button btn btn-lg bg-primary" action = "">Customer <br /> Login</button></a>
                    </div>
                    <div className = "col-lg-6">
                        <h2>Business/Seller</h2>
                        <p>Looking to sell your products to a wider market</p>
                        <a href="/b/login"><button className = "button btn btn-lg bg-primary">Business <br/>Login</button></a>
                    </div>
                </div>
                <p className = "copy">Copyright © 2022 TradeOMart</p>
            </div>
            <div className = "col-lg-6"><i className="fa-solid fa-cart-shopping fa-10x"></i></div>
        </div>
    </div>
    </div>
  );
}

export default Home;
