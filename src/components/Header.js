import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate=useNavigate();
  const user=useSelector(store=> store.user);
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-36"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt=""
      />
      {user && <div className="flex">
        <img
          className=" w-12 h-12 p-2 m-2"
          src={user?.photoURL}
          alt="userimg"
        />
        <button className="text-white font-bold " onClick={handleSignOut}>SignOut</button>
      </div>}
    </div>
  );
};

export default Header;
