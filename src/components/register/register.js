import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../authController/AuthContext";
import "./register.css"; // Import CSS

const Register = () => {
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const { registerUser } = useAuth();
    const navigate = useNavigate();

    const handleRegister = () => {
        registerUser(inputName, inputEmail);
        navigate("/account");
    };

    return (
        <div className="signup-wrapper">
            <div className="signup-box">
                <h1 className="signup-title">Create your <br/> PopX account</h1>

                <div className="signup-group">
                    <label className="signup-label">Full Name*</label>
                    <input 
                        type="text" 
                        className="signup-input" 
                        placeholder="Enter full name" 
                        value={inputName} 
                        onChange={(e) => setInputName(e.target.value)} 
                    />
                </div>

                <div className="signup-group">
                    <label className="signup-label">Phone Number*</label>
                    <input 
                        type="number" 
                        className="signup-input" 
                        placeholder="Enter phone number" 
                    />
                </div>

                <div className="signup-group">
                    <label className="signup-label">Email Address*</label>
                    <input 
                        type="email" 
                        className="signup-input" 
                        placeholder="Enter email address" 
                        value={inputEmail} 
                        onChange={(e) => setInputEmail(e.target.value)} 
                    />
                </div>

                <div className="signup-group">
                    <label className="signup-label">Password*</label>
                    <input 
                        type="password" 
                        className="signup-input" 
                        placeholder="Enter your password" 
                    />
                </div>

                <div className="signup-group">
                    <label className="signup-label">Company Name*</label>
                    <input 
                        type="text" 
                        className="signup-input" 
                        placeholder="Enter company name" 
                    />
                </div>

                <h3 className="signup-label">Are you an agency?*</h3>
                <div className="signup-radio-group">
                    <label className="signup-radio">Yes<input type="radio" name="agency" /></label>&nbsp;&nbsp;
                    <label className="signup-radio">No<input type="radio" name="agency" /></label>
                </div>

                <button onClick={handleRegister} className="signup-button" type="button">Create Account</button>
            </div>
        </div>
    );
};

export default Register;
