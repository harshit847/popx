import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./home.css"

const Home = () => {
    const navigate = useNavigate();
    return (

        <div className='container'>
            <div className='card'>
                <h2 className='title'>Welcome to PopX</h2>
                <p className='subtitle'>lorem ipsum dolor sit amet,<br/>consectetur adispising elit,</p>
                <button className='button create-account' onClick={() => navigate("/register")}>Create Account</button><br />
                <button className='button login' onClick={() => navigate("/login")}>Already Registered?Login</button>
            </div>
        </div>

    )
}

export default Home