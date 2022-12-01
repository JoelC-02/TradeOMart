import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Product.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Swal from 'sweetalert2'

function Product() {
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

  const handleSubmit = (event) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    var urlencoded = new URLSearchParams();
    urlencoded.append("prodname", "beats");
    urlencoded.append("email", user?.email);
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
      urlencoded.append(key, value);
    }
    fetch(process.env.REACT_APP_API_URL+"product", {
        method: 'POST',
        headers: {
        "Content-Type": "application/x-www-form-urlencoded"
        },
        body: urlencoded,
    })
    .then(res => {
        if(res.status == 200) {
          Swal.fire({
            icon: 'success',
            title: 'Product purchased'
          })
        }else {
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong'
          })
        }
    })
    .then(result => {
        // window.location.href="/b/addproduct"; 
    })
  };

  return (
    <div className="product">
        <div class="container">
        {/* <!-- Left Column / Headphones Image --> */}
        <div class="left-column">
          <img data-image="red" class="active" src={require("./images1/red.png")} alt="" />
        </div>
        {/* <!-- Right Column --> */}
        <div class="right-column">
          {/* <!-- Product Description --> */}
          <div class="product-description">
            <span>Headphones</span>
            <h1>Beats EP</h1>
            <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
          </div>
          {/* <!-- Product Configuration --> */}
          <div class="product-configuration">
            {/* <!-- Product Color --> */}
            <div class="product-color">
              <span>Color</span>
              <div class="color-choose">
                <div>
                  <input data-image="red" type="radio" id="red" name="color" value="red" checked />
                  <label for="red"><span></span></label>
                </div>
              </div>
            </div>
            {/* <!-- Cable Configuration --> */}
            <div class="cable-config">
              <span>Cable configuration</span>
              <div class="cable-choose">
                <button>Straight</button>
              </div>
              <a href="https://www.techsolutions.support.com/how-to/how-to-set-up-beats-studio-wireless-headphones-10841">How to configurate your headphones</a>
            </div>
          </div>
          {/* <!-- Product form for delivery --> */}
          <div class="product-price">
            <form onSubmit={handleSubmit}>
            <h3>Enter the details to buy the product!</h3><br/> <br/>
            <table>
                <tr> Enter Name <input type="text" name="name" required/>
                <br/><br/></tr>
                <tr> Enter Address <input type="text" name="address" required/>
                <br/><br/> </tr>
                <tr> Enter pin code <input type="number" name="pin" required/>
                <br/><br/> </tr>
                <tr> Enter phone no <input type="text" name="phone" required/>
                <br/><br/> </tr>
            </table>
            <span>Rs.500</span>
            <input type="submit" class="cart-btn" value="Buy now" />
            </form>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Product;
