import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(() => {
        return JSON.parse(localStorage.getItem("users")) || []; 
    });
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
        console.log("Updated users state (AFTER state change):", users); 
    }, [users]);

    const registerUser = (name, email) => {
        const newUser = { name, email };

        setUsers(prevUsers => {
            const updatedUsers = [...prevUsers, newUser];
            console.log("Updated users array (BEFORE state change):", updatedUsers); 
            return updatedUsers;
        });

        setCurrentUser(newUser);  
        console.log("User registered:", newUser);
    };

    const loginUser = (email) => {
        console.log("Trying to login with email:", email);
        console.log("Existing users before search:", users);  

        const foundUser = users.find(user => user.email === email);
        if (foundUser) {
            setCurrentUser(foundUser);
            console.log("User logged in:", foundUser);
        } else {
            alert("User not found! Please register first.");
        }
    };

    return (
        <AuthContext.Provider value={{ users, currentUser, registerUser, loginUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
