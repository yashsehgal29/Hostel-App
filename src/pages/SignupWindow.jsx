import React from "react";
import { Link } from "react-router-dom";
const SignupWindow = () => {
  return (
    <div className="flex flex-col">
      <div>Signup window</div>
      <div className="flex flex-col text-blue-900">
        <Link to={"/"}>First</Link>
        <Link to={"/signup"}>Sign Up</Link>
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
};

export default SignupWindow;
