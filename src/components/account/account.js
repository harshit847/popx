import React from "react";
import { useAuth } from "../authController/AuthContext";
import { FaUserCircle } from "react-icons/fa"; // Import React Icon
import "./account.css"; // Import CSS

const Account = () => {
    const { currentUser } = useAuth();

    return (
        <div className="profile-wrapper">
            <div className="profile-card">
                <h2 className="profile-title">Account Settings</h2>
                {currentUser ? (
                    <div className="profile-info">
                        <div className="go">
                        <FaUserCircle className="profile-icon" />
                        <p><b>{currentUser.name}</b><br/>
                        {currentUser.email}</p>
                        </div>
                        <p className="profile-bio">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque metus in malesuada scelerisque. 
                            Nunc cursus auctor dolor non iaculis. Donec eleifend arcu sed turpis efficitur ultricies. Quisque malesuada eget enim a consequat.
                        </p>
                    </div>
                ) : (
                    <p className="profile-error">No user logged in.</p>
                )}
            </div>
        </div>
    );
};

export default Account;
