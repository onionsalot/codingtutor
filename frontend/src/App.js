import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";
import AuthPage from "./pages/AuthPage/AuthPage"
import TutorSlots from "./components/Slots/TutorSlots";
import TutorDetailPage from "./pages/TutorDetailPage/TutorDetailPage";
import HomePage from "./pages/HomePage/HomePage";
import DashboardPage from "./pages/DashboardPage/DashboardPage"
import AboutPage from "./pages/AboutPage/AboutPage"
import axios from "axios";
import "./App.css";
import Toast from 'react-bootstrap/Toast'
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

export default function App() {
  axios.defaults.xsrfCookieName = 'csrftoken'
  axios.defaults.xsrfHeaderName = 'X-CSRFToken'
  axios.defaults.withCredentials = true
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});

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
          <ScrollToTop />
          <Switch>
            <Route exact path="/">
              <HomePage user={user}/>
            </Route>
            <Route exact path="/details/:id">
              <TutorDetailPage user={user} />
            </Route>
            <Route exact path="/dashboard">
              <DashboardPage user={user} />
            </Route>
            <Route exact path="/add_slot">
              <TutorSlots user={user} />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Redirect to="/" />
          </Switch>
        </>
      ) : (
        <>
          <Switch>
            <Route exact path="/">
              <AuthPage setLoggedIn={setLoggedIn} setUser={setUser}/>
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
          </Switch>
        </>
      )}
    </main>
  );
}
