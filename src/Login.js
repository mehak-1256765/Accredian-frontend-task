import React from 'react';
import './Login.css';
const LoginPage = () => {
  return (
    <div className="container">
      <h1>Login Page</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

