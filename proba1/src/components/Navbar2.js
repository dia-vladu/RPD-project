import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Navbar2.css'

function Navbar2() {
    const navigate = useNavigate();

    return (
        <div className='navbar'>
            <div className='containerNavbarButtons'>
                <button className="navbarButtons" id="menuAbout" onClick={() => {navigate("/")}}>About</button>
                <button className="navbarButtons" id="menuRegister" onClick={() => {navigate("/register")}}>Register</button>
                <button className="navbarButtons" id="loginMenu" onClick={() => {navigate("/login")}}>Login</button>
                <button className="navbarButtons" id="menu" onClick={() => {navigate("/menu")}}>Menu</button>
            </div>
        </div>
    )
}

export default Navbar2;