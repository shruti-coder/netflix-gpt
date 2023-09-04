import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidata, checkValidataSignUp } from "../utils/validate";
import {auth} from "../utils/firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const navigate=useNavigate();
  const dispatch =useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleSubmit = () => {
    //validate the form data
    // console.log(email);
    // console.log(password);
    console.log(email.current.value);
    console.log(password.current.value);
    if (isSignForm) {
      const message = checkValidata(
        email.current.value,
        password.current.value
      );
      console.log(message);
      setErrorMessage(message);
      if(message) return;

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage +" -"+ errorCode);
  });

        //Sign In

    } else {
      console.log(name);
      // console.log(email);
      // console.log(password);
      const message = checkValidataSignUp(
        name.current.value,
        email.current.value,
        password.current.value
      );
      console.log(message);
      setErrorMessage(message);
      if(message) return;

      // SignUp

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png"
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
            navigate("/browse");
            // ...
          }).catch((error) => {
          setErrorMessage(error.message);
          });
          
          console.log(user);
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage +" -"+ errorCode);
          // ..
        });
    }
  };

  const toggleButton = () => {
    setIsSignForm(!isSignForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute text-white w-4/12 bg-black p-12 my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignForm && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email or Phone Number"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
        <button
          className="p-2 my-6 rounded-lg bg-red-600 w-full"
          onClick={handleSubmit}
        >
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleButton}>
          {isSignForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered?Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
