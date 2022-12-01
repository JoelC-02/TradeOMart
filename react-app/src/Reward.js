import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Reward.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Swal from 'sweetalert2'

function Reward() {
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

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
      fetch(process.env.REACT_APP_API_URL+'getrewards')
      .then(res => res.json())
      .then(setTasks)
  }, [user]);

  var completedTask = function (task) {
    var urlencoded = new URLSearchParams();
    urlencoded.append("email", user?.email);
    urlencoded.append("name", task);
    fetch(process.env.REACT_APP_API_URL+"completereward", {
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
            title: 'Reward task completed'
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
    <div className="rewards">
        <div class="header">
        <div class="container">
        <div class="navbar">
            <div class="logo">
                <img src={require("./images/logo.jpg")} alt="logo"  width="125px" />
            </div>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Add reward</a></li>
                    <li><a href="">Add product</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Account</a></li>
                </ul>
            </nav>
            <img src={require("./images1/cart.png")} width="30px" height="30px" />
        </div>
        <div>
            <h1>Reward Tasks</h1>
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
            {
                tasks.map((element) => {
                    return (
                    <div class="col">
                        <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3 text-bg-primary">
                            <h4 class="my-0 fw-normal">{element.name} pts</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">{element.points}</h1>
                            <ul class="list-unstyled mt-3 mb-4">
                            <li>{element.comments}</li>
                            </ul>
                            <button type="button" class="w-100 btn btn-lg btn-primary" onClick={() => completedTask(element.name)}>Completed</button>
                        </div>
                        </div>
                    </div>
                    );
                })
            }
            </div>
            {/* <div class="reward" >
                <p>Polo T-Shirt</p>
                <p>120 Reward Points Required</p>
                <p><small>An American style standard since 1972, the Polo shirt
                    has been imitated but never matched. This version includes a
                    hint of stretch, allowing for a trim fit and unparalleled ease
                    of movement.</small>
                </p>
                <button class="myButton" type="button">Redeem</button>
            </div>
            <div class="reward">
                <p>Polo T-Shirt</p>
                <p>120 Reward Points Required</p>
                <p><small>An American style standard since 1972, the Polo shirt
                    has been imitated but never matched. This version includes a 
                    hint of stretch, allowing for a trim fit and unparalleled ease
                    of movement.</small>
                </p>
                <button class="myButton">Redeem</button>
            </div> */}
        </div>
        </div>
    </div>
    </div>
  );
}

export default Reward;