import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
    
    const [isSignForm,setIsSignForm]=useState(true);
    const toggleButton=()=>{
        setIsSignForm(!isSignForm);
    }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form className="absolute text-white w-4/12 bg-black p-12 my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignForm?"Sign In":"Sign Up"}</h1>
        {!isSignForm && <input
          type="text"
          placeholder="Full Name"
          className="p-2 my-4 w-full bg-gray-700"
        />}
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <button className="p-2 my-6 rounded-lg bg-red-600 w-full" 
        >
          {isSignForm?"Sign In":"Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleButton}>{isSignForm?"New to Netflix? Sign Up Now":"Already Registered?Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
