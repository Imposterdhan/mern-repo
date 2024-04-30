import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../components/AuthContext'; // Import AuthContext

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { setLoggedIn } = useContext(AuthContext); // Get setLoggedIn function from context

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password
      })
    });
    const json = await response.json();

    if (!json.success) {
      alert("Enter valid credentials");
    } else {
      setLoggedIn(true); // Update isLoggedIn state upon successful login
      navigate("/");
    }
  }

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/signup" className='m-3 btn btn-danger'>I'm a new user</Link>
        </form>
      </div>
    </div>
  );
}
