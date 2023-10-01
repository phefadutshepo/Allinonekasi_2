import React, { useState } from 'react';
import './App.css';
import { googleSignIn } from './firebase';

const Login = () => {

  return  googleSignIn();
};

export default Login;