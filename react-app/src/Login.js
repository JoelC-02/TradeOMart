import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

function Login() {
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
    <div className="login_page">
    <div className = "middle">
        <i className="fa-solid fa-cart-shopping fa-3x"></i>
        <h1>Welcome to TradeOMart</h1>
    </div>
    <div className = "container-fluid">
        <p>Login Here : </p>
        <form action="/signin" method="post" id = "my-form">
            <input type="email" name = "email" placeholder="Email ID" id = "mail" />
            <input type="password" name = "password" placeholder="Password" id = "pass" />
        </form>
    </div>
    <button type="submit" className="btn btn-lg bg-primary button" form = "my-form">Login</button>
    <div className = "signup_redirect">
        <p>Don't have an account? Create one <a href="/register" className="link-primary">here</a></p>
    </div>
    </div>
  );
}

export default Login;
