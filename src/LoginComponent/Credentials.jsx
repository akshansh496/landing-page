// import React from "react";
import { useNavigate } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import './Credentials.css';

export default function Credentials() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page reload
        // Here you can add authentication logic
        navigate("/performance"); // Navigate to Performance page
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <p className="input-label">Username</p>
            <div className="input-container">
                <EmailIcon className="input-icon"/>
                <input type="email" placeholder="Enter your username" required />
            </div>

            <p className="input-label">Password</p>
            <div className="input-container">
                <HttpsIcon className="input-icon"/>
                <input type="password" placeholder="Enter your password" required />
            </div>

            <button className="sign-in-button" type="submit">Sign In</button>
        </form>

        <p style={{marginTop:50}}>
            Don't have an account? <a href="http://localhost:5174/player-signup">Sign up here</a>
        </p>
        </>
    );
}
