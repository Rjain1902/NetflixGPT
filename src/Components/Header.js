import React from "react";
import Logo from "../Utils/Images/Netflix_Logo_PMS.png";
import {useNavigate} from "react-router-dom"
import Icon from "../Utils/Images/UserIcon.png";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
const Header = () => {

  const navigate=useNavigate()
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
    
  }
  return (
    
      <div className="absolute px-8 py-2 px-8 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
        <img className="w-44" src={Logo} alt="Netflix Logo" />
        <div className="flex p-2">
        <img alt="User icon" src={Icon} className="w-10 h-10 my-1 mx-2"/>
        <button className="font-bold text-white" onClick={handleSignOut}>Sign Out</button>
      </div>
      </div>
      
    
  );
};

export default Header;
