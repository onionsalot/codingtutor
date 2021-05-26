import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import TutorSlots from "./components/Slots/TutorSlots"
import TutorDetailPage from "./pages/TutorDetailPage/TutorDetailPage";
import HomePage from "./pages/HomePage/HomePage";
import axios from "axios";
import "./App.css";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const [showLogin, setShowLogin] = useState(true);

  
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
          />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/details/:id">
              <TutorDetailPage user={user}/>
            </Route>
            <Route exact path="/add_slot">
              <TutorSlots user={user}/>
            </Route>
            {/* <Route exact path="/slots/:sid/assoc_student/:slotid">
              <StudentSlots />
            </Route> */}
          </Switch>
        </>
      ) : (
        <>
          <h1>Log in or Sign Up</h1>
          {showLogin ? (
            <LoginForm setUser={setUser} setLoggedIn={setLoggedIn} />
          ) : (
            <SignupForm setUser={setUser} setLoggedIn={setLoggedIn} />
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
