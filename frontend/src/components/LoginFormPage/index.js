// frontend/src/components/LoginFormPage/index.js
import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginFormPage.css';
function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
 
  if (sessionUser) return (
    <Redirect to="/" />
  );
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const handleDemoSubmit = async (e) => {
        e.preventDefault()
        return dispatch(sessionActions.login({ credential: 'demo@user.io', password: 'password' }));       
    }
 
  return (
    <div className="container" id="container">
        
        <div className="form-container sign-in-container">
            <form className="form-si" id="form-si" onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label>
               
                Email
                <input
                id='email'
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
                />
                </label>
                <label id="label2">
                    Password
                <input  
                type="password"
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                 </label>
        <button type="submit">Sign In</button>
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
                    <p className='overlayp'>Sign in with a demo user instead!</p>
                    <button className="ghost" id="demo" onClick={handleDemoSubmit}>Demo User</button>
                </div>
            </div>
        </div>
            
    </div>
 
 
  );
}
 
export default LoginFormPage;
 
/*
<form onSubmit={handleSubmit}>
<ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <label>
            Email
            <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
            />
        </label>
        <label>
            Password
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </label>
*/
