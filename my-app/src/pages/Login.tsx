import React from 'react';
import { handleGoogleLogin } from './api/googleApi';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
    </div>
  );
};

export default Login;