import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./B_AddProduct.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Swal from 'sweetalert2'

function B_AddProduct() {
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
    urlencoded.append("email", user?.email)
    for (let [key, value] of formData.entries()) {
      urlencoded.append(key, value);
    }
    fetch(process.env.REACT_APP_API_URL+"baddproduct", {
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
            title: 'Product added in marketplace'
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
    <div className="B_addproduct">
    <div className="header">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img src={require("./images/logo.jpg")} alt="logo"  width="125px" />
          </div>
          <nav>
            <ul>
              <li><a href="">Rewards</a></li>
              <li><a href="">Home</a></li>
              <li><a href="">Products</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Account</a></li>
            </ul>
          </nav>
          <img src={require("./images1/cart.png")} width="30px" height="30px" />
        </div>
        <body>
          <h1>Add products</h1>
          <form className="myForm" onSubmit={handleSubmit}>
            <p>
              <label>Product name
              <input type="text" name="name" required />
              </label>
            </p>
            <p>
              <label>Seller Contact
              <input type="tel" name="contact" required />
              </label>
            </p>
            <fieldset>
              <legend>Faulty Product</legend>
              <p><label className="choice"> <input type="radio" name="fault" required value="return" />Return</label></p>
              <p><label className="choice"> <input type="radio" name="fault" required value="exchange" />Exchange</label></p>
              <p><label className="choice"> <input type="radio" name="fault" required value="NA" />Neither</label></p>
            </fieldset>
            <fieldset>
              <legend>Extra information</legend>
              <p><label className="choice"> <input type="checkbox" name="extras" value="1year" /> 1 year warranty </label></p>
              <p><label className="choice"> <input type="checkbox" name="extras" value="delivery" /> Free delivery </label></p>
              <p><label className="choice"> <input type="checkbox" name="extras" value="bag" /> Bag included </label></p>
            </fieldset>
            <p>
              <label>Release Date/Time
              <input type="datetime-local" name="release" required />
              </label>
            </p>
            <p>
              <label>
                Country of manufacture
                <select id="origin" name="country">
                  <option value="" selected="selected">Select One</option>
                  <option value="India" >India</option>
                  <option value="Exported" >Exported</option>
                </select>
              </label>
            </p>
            <p>
              <label>Dropoff Place
              <input type="text" name="dropoff" required list="info" />
              </label>
            </p>
            <p>
            <label>Special Instructions
            <textarea name="comments" maxlength="500"></textarea>
            </label>
            </p>
            <br /><br /><br /><br /><br />
            Add Image for product
            <hr /><hr /><hr /><input type="file" accept="image/*" />
            <p><button>Sell Product</button></p>
          </form>
        </body>
      </div>
    </div>
    </div>
  );
}

export default B_AddProduct;