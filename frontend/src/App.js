import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";
import TutorSlots from "./components/Slots/TutorSlots";
import TutorDetailPage from "./pages/TutorDetailPage/TutorDetailPage";
import HomePage from "./pages/HomePage/HomePage";
import ConfirmationPage from "./pages/ConfirmationPage/ConfirmationPage";
import axios from "axios";
import "./App.css";

export default function App() {
  axios.defaults.xsrfCookieName = 'csrftoken'
  axios.defaults.xsrfHeaderName = 'X-CSRFToken'
  axios.defaults.withCredentials = true
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    async function getUser() {
      if (loggedIn) {
        axios
          .get("/api/current_user/", {
            headers: {
              Authorization: `JWT ${localStorage.getItem("token")}`,
            },
          })

          .then((response) => {
            setUser(response.data);
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
            username={user.username}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            userID={user.id}
          />
          <Switch>
            <Route exact path="/">
              <HomePage user={user}/>
            </Route>
            <Route exact path="/details/:id">
              <TutorDetailPage user={user} />
            </Route>
            <Route exact path="/add_slot">
              <TutorSlots user={user} />
            </Route>
            <Route exact path="/confirmation">
              <ConfirmationPage user={user} />
            </Route>
            <Redirect to="/" />
          </Switch>
        </>
      ) : (
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
      )}
    </main>
  );
}
