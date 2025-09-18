import React from "react";
import './Signup.css';
import Signup_Header from "./Signup_Header";
import Credentials from "./Credentials";
export default function Signup(){
    return(
        <>
        <div className="SignupBox">
            <Signup_Header/>
            <Credentials/>
        </div>
        </>
    )
}