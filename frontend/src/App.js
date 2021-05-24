import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import axios from "axios";
import "./App.css";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));
  const [username, setUsername] = useState("");
  const history = useHistory();

  useEffect(() => {
    history.push("/");
  }, [username, history]);
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
    <div className="App">
      <Navbar
        username={username}
        setUsername={setUsername}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
      <LoginForm setUsername={setUsername} setLoggedIn={setLoggedIn} />
      <SignupForm setUsername={setUsername} setLoggedIn={setLoggedIn} />
    </div>
  );
}
