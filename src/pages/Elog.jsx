import React from "react";
import { Link } from "react-router-dom";

const Elog = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="username" name="username" />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
        />
        <button>Login</button>
        <p>this is an error!</p>
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Elog;