// frontend/src/components/SignupFormPage/index.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

const handleDemoSubmit = async (e) => {
    e.preventDefault()
    return dispatch(sessionActions.login({ credential: 'demo@user.io', password: 'password' }));       
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, fullName, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
  <div className="container" id="container">
    <div className="form-container sign-in-container">
      <form onSubmit={handleSubmit} className="form-si" id="form-si">
        <h1>Sign Up</h1>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <label>
          Full Name
          <input
            id='fullName'
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </label>

        <label id="label2">
          Email
          <input
            id='email'
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      
        <label>
          Password
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label id="confirmPasswordText">
          Confirm Password
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>

    <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with 
                        your personal info
                    </p>
                    <button className="ghost" id="signIn">
                        Sign In
                    </button>                
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p className="overlayp">Sign in with a demo user instead!</p>
                    <button className="ghost" id="demo" onClick={handleDemoSubmit}>Demo User</button>
                </div>
            </div>
        </div>
            
    </div>
  


    

  );
}

export default SignupFormPage;