import React from "react";
import Person2Icon from '@mui/icons-material/Person2';
import ShieldIcon from '@mui/icons-material/Shield';
import './LoginDivHead.css';
export default function LoginDivHead(){
    return(
        <div className="LoginDivHead">
            <p><b>Sign in to your account</b></p>
            <p style={{fontSize:12}}>Choose your account type to countinue</p>
            <div className="button-container">
            <button className="LoginButtons"><Person2Icon></Person2Icon> Player</button>&nbsp;&nbsp;
            <button className="LoginButtons"><ShieldIcon></ShieldIcon> Coach</button>
            </div>
        </div>
    )
}
