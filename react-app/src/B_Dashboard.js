import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Swal from 'sweetalert2'

function B_Dashboard() {
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
        <div class="header">
          <div class="container">
          <div class="navbar">
            <div class="logo">
              <h2>TradeOMart</h2>
            </div>
            <nav>
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="/b/addreward">Add Rewards</a></li>
                <li><a href="/b/addproduct">Add Products</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Account</a></li>
              </ul>
            </nav>
            <img src={require("./images1/cart.png")} width="30px" height="30px" />
          </div>
          <div class="row">
            <div class="col-2">
              <h1>Welcome dear Seller! <br /> Are you ready to give it a boost?</h1>
              <p>Success isn't always about greatness. It's about consistency. <br /> Consistent hard work gains success. Greatness will come. </p>
              <a href="/b/addproduct" class="btn" style={{"margin-right":"50px"}}>Add products to marketplace &#8594;</a>
              <a href="/b/addreward" class="btn">Add reward tasks &#8594;</a>
            </div>
            <div class="col-2">
              <img src={require("./images/image1.jpg")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default B_Dashboard;