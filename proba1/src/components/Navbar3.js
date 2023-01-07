import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Navbar3.css';

function switchMode(){
    var body = document.querySelector('body');
    var bgColor = body.style.backgroundColor;

    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    var butonSwitch = document.querySelector('#dayNightModeButton');

    if(bgColor === 'white'){
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        
        butonSwitch.style.backgroundColor = 'black';
        butonSwitch.style.color = 'white';
        butonSwitch.innerHTML = 'Night Mode';
    }
    if(bgColor === 'black'){
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        
        butonSwitch.style.backgroundColor = 'white';
        butonSwitch.style.color = 'black';
        butonSwitch.style.border = 'white';
        butonSwitch.innerHTML = 'Day Mode';
    }
}

function Navbar3() {
    const navigate = useNavigate();

    return (
        <div className='navbar'>
            <div className='containerLogo'>
                LOGO AICI
            </div>
            <div className='containerNavbarButtons'>
                <button className="navbarButtons" id="menuAbout" onClick={() => {navigate("/")}}>About</button>
                <button className="navbarButtons" id="menuLogin" onClick={() => {navigate("/login")}}>Login</button>
                <button className="navbarButtons" id="menuProjects" onClick={() => {navigate("/projects")}}>Projects</button>
                <button className="navbarButtons" id="menuMyTasks" onClick={() => {navigate("/myTasks")}}>My Tasks</button>
                <button className="navbarButtons" id="menu" onClick={() => {navigate("/menu")}}>Menu</button>
            </div>
            <div className='containerDayNightMode'>
                <button className="dayNightMode" id="dayNightModeButton" onClick={switchMode}>DayNightMode</button>
            </div>
        </div>
    )
}

export default Navbar3;