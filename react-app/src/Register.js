import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
// import {
//   auth,
//   registerWithEmailAndPassword,
//   signInWithGoogle,
// } from "./firebase";
// import Swal from 'sweetalert2'
import "./Register.css";

function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [user, loading, error] = useAuthState(auth);
//   const navigate = useNavigate();
//   const register = () => {
//     if (!name) Swal.fire({
//         icon: 'warning',
//         title: 'Please enter name'
//       });
//     registerWithEmailAndPassword(name, email, password);
//   };
//   useEffect(() => {
//     if (loading) return;
//     if (user) navigate("/registerform");
//   }, [user, loading]);
  return (
    <div className="register">
    <div className = "middle">
        <i className="fa-solid fa-cart-shopping fa-3x"></i>
        <h1>Welcome to TradeOMart</h1>
    </div>
    <div className = "container-fluid">
        <p>Sign up here : </p>
        <form action="/signup" method="post" id = "my-form">
            <input type="text" name = "First_Name" placeholder="First Name" id = "FN" />
            <input type="text" name = "Last_Name" placeholder="Last Name" id = "LN" />
            <input type="email" name = "email" placeholder="Email ID" id = "mail" />
            <input type="password" name = "password" placeholder="Password" id = "pass" />
        </form>
    </div>
    <button type="submit" className="btn btn-lg bg-primary button" form = "my-form">Create Account</button>
    <div className = "signup_redirect">
        <p>Already have one? Login <a href="/login" className="link-primary">here</a></p>
    </div>
    </div>
  );
}

export default Register;