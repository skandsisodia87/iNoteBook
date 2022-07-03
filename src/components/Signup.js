import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

function Signup() {
  const [credential, setcredential] = useState({ name: "", email: "", password: "" });
  const navigation = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credential;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json();
    if (json.success) {
      // Save the auth token and redirect 
      localStorage.setItem('token', json.authtoken)
      navigation('/')
    } else {
      alert("Login with right credential")
    }
  }

  const onchange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value })
  }

  return (
    <div className='container'>
      <form onSubmit={handlesubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" onChange={onchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email1" className="form-label">Email</label>
          <input type="email" className="form-control" id="email1" name='email' aria-describedby="emailHelp" onChange={onchange} minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' onChange={onchange} minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onchange} minLength={5} required />
        </div>
        <button type="submit" className="btn btn-dark">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
