import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Swal from 'sweetalert2'

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      console.log(data);
      setName(data.name);
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'An error occured while fetching user data'
      })
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  return (
    <div className="dashboard">
        <div className="header">
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <img src={require('./images/logo.jpg')} alt="logo"  width="125px" />
                    </div>
                    <nav>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Products</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Account</a></li>
                        </ul>
                    </nav>
                    <img src={require("./images1/cart.png")} width="30px" height="30px" />
                </div>
                <div className="row">
                    <div className="col-2">
                        <h1>Give your business <br />a new boost!</h1>
                        <p>Success isn't always about greatness. It's about consistency. Consistent<br />hard work gains success. Greatness will come. </p>
                        <a href="" className="btn">Explore Now &#8594;</a>
                    </div>
                    <div className="col-2">
                        <img src={require("./images/image1.jpg")} alt="" />
                    </div>
                </div>
            </div>
        </div>

        {/* Featured categories */}
        <div className="categories">
            <div className="small-container">
                <div className="row">
                    <div className="col-3">
                        <img src={require("./images1/category-1.jpg")} />
                    </div>
                    <div className="col-3">
                        <img src={require("./images1/category-2.jpg")} />
                    </div>
                    <div className="col-3">
                        <img src={require("./images1/category-3.jpg")} />
                    </div>
                </div>
            </div>
        </div>
        
        {/* Featured products */}
        <div className="small-container">
            <h2 className="title">Featured Products</h2>
            <div className="row">
                <div className="col-4">
                    <a href="/product"><img src={require("./images1/beats headphone.png")} /></a>
                    <h4>Beats Headphone</h4>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                    <p>Rs.500</p>
                </div>
                <div className="col-4">
                    <img src={require("./images1/product-1.jpg")} />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                    <p>Rs.500</p>
                </div>
                <div className="col-4">
                    <img src={require("./images1/product-2.jpg")} />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                    <p>Rs.500</p>
                </div>
                <div className="col-4">
                    <img src={require("./images1/product-3.jpg")} />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                    <p>Rs.500</p>
                </div>
            </div>
            <h2 className="title">Latest Products</h2>
            <div className="row">
                <div className="col-4">
                    <img src={require("./images1/product-5.jpg")} />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                    <p>Rs.500</p>
                </div>
                <div className="col-4">
                    <img src={require("./images1/product-6.jpg")} />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                    <p>Rs.500</p>
                </div>
                <div className="col-4">
                    <img src={require("./images1/product-7.jpg")} />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                    <p>Rs.500</p>
                </div>
                <div className="col-4">
                    <img src={require("./images1/product-8.jpg")} />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                    <p>Rs.500</p>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <img src={require("./images1/product-9.jpg")} />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                    <p>Rs.500</p>
                </div>
                <div className="col-4">
                    <img src={require("./images1/product-10.jpg")} />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                    <p>Rs.500</p>
                </div>
                <div className="col-4">
                    <img src={require("./images1/product-11.jpg")} />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                    <p>Rs.500</p>
                </div>
                <div className="col-4">
                    <img src={require("./images1/product-12.jpg")} />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                    <p>Rs.500</p>
                </div>
            </div>
        </div>
        
        {/* OFFER */}
        <div className="offer">
            <div className="small-container">
                <div className="row">
                    <div className="col-2">
                        <img src={require("./images1/exclusive.png")} className="offer-img" />
                    </div>
                    <div className="col-2">
                        <p>Exclusively available on TradeOMart</p>
                        <h1>Smart Band 4</h1>
                        <small>The Mi Smart Band 4 feautures a 39.9% larger
                        AMOLED color full-touch display
                        with adjustable brightness, so everything is clear as can
                        be.</small>
                        <a href="" className="btn">Buy Now &#8594;</a>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Testimonial */}
        <div className="testimonial">
            <div className="small-container">
                <div className="row">
                    <div className="col-3">
                        <i className="fa fa-quote-left"></i>
                        <p>TradeOMart Is excellent and amazing. Please support us!</p>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <img src={require("./images1/user-1.png")} />
                        <h3>Sean Parker</h3>
                    </div>
                    <div className="col-3">
                        <i className="fa fa-quote-left"></i>
                        <p>TradeOMart Is excellent and amazing. Please support us!</p>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <img src={require("./images1/user-2.png")} />
                        <h3>Mike Smith</h3>
                    </div>
                    <div className="col-3">
                        <i className="fa fa-quote-left"></i>
                        <p>TradeOMart Is excellent and amazing. Please support us!</p>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <img src={require("./images1/user-3.png")} />
                        <h3>Mabel Joe</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Dashboard;