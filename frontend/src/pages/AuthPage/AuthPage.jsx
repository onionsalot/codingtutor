import { render } from "react-dom";
import React, {  useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";
import "../../App.css";

export default function AuthPage({setLoggedIn, setUser}) {
    const [showLogin, setShowLogin] = useState(true);


    return(
        <>
          <h1>Coding Tutor</h1>

          {showLogin ? (
            <LoginForm setUser={setUser} setLoggedIn={setLoggedIn} />
          ) : (
            <SignupForm setUser={setUser} setLoggedIn={setLoggedIn} />
          )}
          <div>
            <br />
            <button
              class="btn btn-outline-dark"
              onClick={() => setShowLogin(!showLogin)}
            >
              {showLogin
                ? "CLICK TO SIGN UP A NEW ACCOUNT"
                : "CLICK TO LOG IN TO AN EXISTING ACCOUNT"}
            </button>
          </div>
        </>
    )
}