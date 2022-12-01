import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

function B_Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/b/dashboard");
  }, [user, loading]);
  return (
    <div className="login_page">
    <div className = "middle">
        <i className="fa-solid fa-cart-shopping fa-3x"></i>
        <h1>Welcome to TradeOMart</h1>
    </div>
    <div className = "container-fluid">
        <p>Login Here : </p>
        <form id = "my-form">
            <input type="email" name = "email" placeholder="Email ID" id = "mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name = "password" placeholder="Password" id = "pass" value={password} onChange={(e) => setPassword(e.target.value)} />
        </form>
    </div>
    <button type="submit" className="btn btn-lg bg-primary button" onClick={() => logInWithEmailAndPassword(email, password)} >Login</button>
    <div className = "signup_redirect">
        <p>Don't have an account? Create one <a href="/b/register" className="link-primary">here</a></p>
    </div>
    </div>
  );
}

export default B_Login;