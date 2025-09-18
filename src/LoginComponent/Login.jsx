import React from "react";
import './Login.css';
import LoginDivHead from "./LoginDivHead";
import Credentials from "./Credentials";
export default function Login(){
    return(
        <>
        <div className="LoginBox">
            <LoginDivHead></LoginDivHead>
            <br></br>
            <Credentials></Credentials>
        </div>
        </>
    )
}

