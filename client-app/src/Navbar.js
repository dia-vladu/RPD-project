import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from './images/bugLogo.png';

function Navbar() {
    const navigate = useNavigate();
    
    var currentPath = useLocation();
    // console.log('hash', currentPath.hash);
    // console.log('pathname', currentPath.pathname);
    // console.log('search', currentPath.search);

    return (
        <div className='navbar'>
            <div className='containerLogo'>
                <img src={logo} style={{width: 80, height: 80}}/>
            </div>
            <div className='containerNavbarButtons'>
                <button className="navbarButtons" id="menuAbout" onClick={() => {navigate("/about")}}>About</button>
                <button className="navbarButtons" id="menuLogin" onClick={() => {navigate("/login")}}>Login</button>
                <button className="navbarButtons" id="menuProjects" onClick={() => {navigate("/projects")}}>Projects</button>
                <button className="navbarButtons" id="menuMyTasks" onClick={() => {navigate("/myTasks")}}>My Tasks</button>
            </div>
        </div>
    )
}

export default Navbar;