import React, {useState} from 'react';
import axios from 'axios';

export default function LoginForm({setUsername, setLoggedIn}) {
  const [form, setForm] = useState({
    username: '',
    password: '',
  })
  const [error, setError] = useState("")

  function handleChange(evt) {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  }

  async function handleSubmit(evt) {
    const options = {
      url: 'http://localhost:8000/token-auth/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        username: form.username,
        password: form.password,
      },
    }
    evt.preventDefault();
    
    try {
      const user = await axios(options)
      .then(response => {
        console.log(response)
        localStorage.setItem('token', response.data.token)
        setUsername(form.username)
        setLoggedIn(localStorage.getItem('token'))
        // ====== T O D O =======//
        // This section needs to also change state of
        // App.js to show that there is a logged in user
        // I moved this section to it's respective forms
        // for testing purposes but these may be moved to
        // AppJS if we don't mind AppJs clutter.

        // To pass user back to AppJS for userState, pass
        // "form" state back to AppJS and set state there.
      
      })
    } catch {
      setError("Sign Up Failed")
    }
  }

  return (
    <div>
      <h4> LOG IN </h4>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <label> Username </label>
        <input
          type= "text"
          name= "username"
          value= {form.username}
          onChange= {handleChange}
          required
        />
        <input
          type= "password"
          name= "password"
          value= {form.password}
          onChange= {handleChange}
          required
        />
        <button type='submit'> LOG IN </button>
      </form>

    </div>
  )

}


// class LoginForm extends React.Component {

//   state = {
//     username: '',
//     password: ''
//   };

//   handle_change = e => {
//     const name = e.target.name;
//     const value = e.target.value;
//     this.setState(prevstate => {
//       const newState = { ...prevstate };
//       newState[name] = value;
//       return newState;
//     });
//   };
  
//   render() {
//     return (
//       <form onSubmit={e => this.props.handle_login(e, this.state)}>
//         <h4>Log In</h4>
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           name="username"
//           value={this.state.username}
//           onChange={this.handle_change}
//         />
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           name="password"
//           value={this.state.password}
//           onChange={this.handle_change}
//         />
//         <input type="submit" />
//       </form>
//     );
//   }
// }
// export default LoginForm;

// LoginForm.propTypes = {
//   handle_login: PropTypes.func.isRequired
// };