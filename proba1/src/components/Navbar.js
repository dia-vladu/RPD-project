import React from 'react'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='containerNavbarButtons'>
                <a href='#about' id="menuAbout">About</a>
                <a href='#register' id="menuRegister">Register</a>
                <a href='#login' id="loginMenu">Login</a>
                <a href='#menu' id="menu">Menu</a>
            </div>
        </div>
    )
}

export default Navbar;