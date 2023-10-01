import React, { useState } from 'react';
import './App.css';
import { googleSignIn } from './firebase';

const Login = () => {
  const loginbool = googleSignIn()

  return (
    <>
      <p>`{loginbool}`</p>
    </>
  ) ;
};

export default Login;