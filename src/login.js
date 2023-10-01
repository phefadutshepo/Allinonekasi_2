import React, { useState } from 'react';
import GoogleSignIn from './googlesignin';
import './App.css';

export default function Login() {
  const [showLogin, setLoginView] = useState(true);

  const toggleView = () => {
    setLoginView(!showLogin);
  };

  return (
    <div>

      {showLogin ? (
        
        <div id = "login---screen">
           <button onClick={toggleView}>
            {'Switch to GoogleSignIn'}
          </button>
          <h2>Login</h2>
          <form>
            <div>
              <label id='label'>Email     :</label>
              <input id="right" type="email" name="email" />
            </div>
            <div>
              <label id='label'>Password  :</label>
              <input id="right" type="password" name="password" />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <>
          <GoogleSignIn />
        </>
        
      )}
    </div>
  );
}