import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
} from "./firebase";
import Swal from 'sweetalert2'
import "./Register.css";

function B_Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!name) Swal.fire({
        icon: 'warning',
        title: 'Please enter name'
      });
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/b/dashboard");
  }, [user, loading]);
  return (
    <div className="register">
    <div className = "middle">
        <i className="fa-solid fa-cart-shopping fa-3x"></i>
        <h1>Welcome to TradeOMart</h1>
    </div>
    <div className = "container-fluid">
        <p>Sign up here : </p>
        <form action="/b/addproduct" method="post" id = "my-form">
            <input type="text" name = "Name" placeholder="Full Name" id = "FN" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" name = "email" placeholder="Email ID" id = "mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name = "password" placeholder="Password" id = "pass" value={password} onChange={(e) => setPassword(e.target.value)} />
        </form>
    </div>
    <button type="submit" className="btn btn-lg bg-primary button" onClick={register}>Create Account</button>
    <div className = "signup_redirect">
        <p>Already have one? Login <a href="/b/login" className="link-primary">here</a></p>
    </div>
    </div>
  );
}

export default B_Register;