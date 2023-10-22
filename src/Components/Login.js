import React,{useState} from "react";
import Header from "./Header";
import BackGroundImage from "../Utils/Images/background.jpg";
const Login = () => {
    const[isSignInForm,setSignInForm]=useState(true)
    const toggleSignInForm=()=>{
        setSignInForm(!isSignInForm)
    }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img alt="background Image" src={BackGroundImage} />
      </div>
      <form className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-90">
        <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" :"Sign Up"}
        </h1>
        {!isSignInForm &&  <input type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-800 rounded-lg" />}
        <input type="text" placeholder="Email address" className="p-3 my-4 w-full bg-gray-800 rounded-lg" />
        <input type="password" placeholder="Password" className="p-3 my-4 w-full bg-gray-800 rounded-lg" />
        <button className="p-3 my-6 bg-red-700 w-full rounded-lg">{isSignInForm?"Sign In": "Sign Up"}</button>
        <p className="py-4" onClick={toggleSignInForm}>{isSignInForm ? "New to NetFlix? Sign Up Now" :"Already Registered ! Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
