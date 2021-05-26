import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import TutorDetailPage from "./pages/TutorDetailPage/TutorDetailPage";
import HomePage from "./pages/HomePage/HomePage";
import axios from "axios";
import "./App.css";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));
  const [username, setUsername] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  // const history = useHistory();

  // useEffect(() => {
  //   history.push("/");
  // }, [username, history]);

  useEffect(() => {
    async function getUser() {
      if (loggedIn) {
        axios
          .get("http://localhost:8000/current_user/", {
            headers: {
              Authorization: `JWT ${localStorage.getItem("token")}`,
            },
          })

          .then((response) => {
            console.log(response);
            setUsername(response.data.username);
          });
      }
    }
    getUser();
  }, [loggedIn]);

  return (
    <main className="App">
      {loggedIn ? (
        <>
          <Navbar
            username={username}
            setUsername={setUsername}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/details">
              <TutorDetailPage />
            </Route>
          </Switch>
        </>
      ) : (
        <>
          <h1>Log in or Sign Up</h1>
          {showLogin ? (
            <LoginForm setUsername={setUsername} setLoggedIn={setLoggedIn} />
          ) : (
            <SignupForm setUsername={setUsername} setLoggedIn={setLoggedIn} />
          )}
          <div>
            <button onClick={() => setShowLogin(!showLogin)}>
              {showLogin
                ? "CLICK TO SIGN UP A NEW ACCOUNT"
                : "CLICK TO LOG IN TO AN EXISTING ACCOUNT"}
            </button>
          </div>
        </>
      )}
    </main>
  );
}
