import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../authController/AuthContext";
import "./login.css";

const Login = () => {
    const [inputEmail, setInputEmail] = useState("");
    const { loginUser, currentUser } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        loginUser(inputEmail);
        navigate("/account");
    };

    return (
        <div className="login-wrapper">
            <div className="login-box">
                <h2 className="login-heading">Signin to your<br /> To-Do-App account</h2>
                <p className="login-text">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>

                <div className="login-group">
                    <label className="login-label">Email Address</label>
                    <input 
                        type="email" 
                        className="login-input" 
                        placeholder="Enter email address" 
                        value={inputEmail} 
                        onChange={(e) => setInputEmail(e.target.value)} 
                    />
                </div>

                <div className="login-group">
                    <label className="login-label">Password</label>
                    <input type="password" className="login-input" placeholder="Enter your password" />
                </div>

                <button className={`login-btn ${inputEmail ? "enabled" : ""}`} onClick={handleLogin} type="button">
                    Login
                </button>

                {currentUser && <h3>Welcome, {currentUser.name}!</h3>}
            </div>
        </div>
    );
}

export default Login;
