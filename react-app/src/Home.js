import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
import "./Home.css";

function Home() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, loading, error] = useAuthState(auth);
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (loading) {
//       // maybe trigger a loading screen
//       return;
//     }
//     if (user) navigate("/dashboard");
//   }, [user, loading]);
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
                        <a href="/login"><button className = "button btn btn-lg bg-primary">Business <br/>Login</button></a>
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
