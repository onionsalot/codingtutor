// import './App.css';
// import Navbar from './components/Navbar/Navbar'
// import HomePage from './pages/HomePage/HomePage';

// export default function App() {

//   return (
//     <>
//       <Navbar />
//       <HomePage />
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import "./App.css";
import axios from "axios";

export default function App() {
  // const [displayForm, setDisplayForm] = useState("");
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));
  const [username, setUsername] = useState("");
  const history = useHistory();

  useEffect(() => {
    history.push('/')
  }, [username, history]
  )
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
            setUsername(response.data.username) 
          });
      }
    }
    getUser();
  }, []);



  return (
    <div className="App">
      {/* <Nav
      logged_in={this.state.logged_in}
      display_form={this.display_form}
      handle_logout={this.handle_logout}
      /> */}
      <Navbar username={username} setUsername={setUsername} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <LoginForm setUsername={setUsername}/>
      <SignupForm setUsername={setUsername} />
    </div>
  );
}

// componentDidMount() {
//       if (this.state.logged_in) {
//         fetch('http://localhost:8000/current_user/', {
//           headers: {
//             Authorization: `JWT ${localStorage.getItem('token')}`
//           }
//         })
//           .then(res => res.json())
//           .then(json => {
//             this.setState({ username: json.username });
//           });
//       }

//   handle_logout = () => {
//     localStorage.removeItem('token');
//     this.setState({ logged_in: false, username: '' });
//   };

//   display_form = form => {
//     this.setState({
//       displayed_form: form
//     });
//   };

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       displayed_form: '',
//       logged_in: localStorage.getItem('token') ? true : false,
//       username: ''
//     };
//   }

//   componentDidMount() {
//     if (this.state.logged_in) {
//       fetch('http://localhost:8000/current_user/', {
//         headers: {
//           Authorization: `JWT ${localStorage.getItem('token')}`
//         }
//       })
//         .then(res => res.json())
//         .then(json => {
//           this.setState({ username: json.username });
//         });
//     }
//   }

// ==== NO LONGER NECESSARY ====//
// ==== Code moves to form. SEE LOGINFORM.JSX ====//

// handle_login = (e, data) => {
//   e.preventDefault();
//   fetch('http://localhost:8000/token-auth/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//     .then(res => res.json())
//     .then(json => {
//       localStorage.setItem('token', json.token);
//       this.setState({
//         logged_in: true,
//         displayed_form: '',
//         username: json.user.username
//       });
//     });
// };

// ==== NO LONGER NECESSARY ====//
// ==== Code moves to form. SEE SIGNUPFORM.JSX ====//

// handle_signup = (e, data) => {
//   e.preventDefault();
//   fetch('http://localhost:8000/users/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//     .then(res => res.json())
//     .then(json => {
//       localStorage.setItem('token', json.token);
//       this.setState({
//         logged_in: true,
//         displayed_form: '',
//         username: json.username
//       });
//     });
// };

//   handle_logout = () => {
//     localStorage.removeItem('token');
//     this.setState({ logged_in: false, username: '' });
//   };

//   display_form = form => {
//     this.setState({
//       displayed_form: form
//     });
//   };

//   render() {
//     let form;
//     switch (this.state.displayed_form) {
//       case 'login':
//         form = <LoginForm handle_login={this.handle_login} />;
//         break;
//       case 'signup':
//         form = <SignupForm handle_signup={this.handle_signup} />;
//         break;
//       default:
//         form = null;
//     }

//     return (
//       <div className="App">
//         <Nav
//           logged_in={this.state.logged_in}
//           display_form={this.display_form}
//           handle_logout={this.handle_logout}
//         />
//         {form}
//         <h3>
//           {this.state.logged_in
//             ? `Hello, ${this.state.username}`
//             : 'Please Log In'}
//         </h3>
//       </div>
//     );
//   }
// }
// export default App;
