import React from 'react'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='containerNavbarButtons'>
                <input className='navbarButtons' id="homeButton" type="button" value="Home"/>
                <input className='navbarButtons' id="registerButton" type="button" value="Register"/>
                <input className='navbarButtons' id='random1' type="button" value="Random1"/>
                <input className='navbarButtons' id='random2' type="button" value="Random2"/>
                <input className='navbarButtons' id='random3' type="button" value="Random3"/>
                <input className='navbarButtons' id='random4' type="button" value="Random4"/>
                <input className='navbarButtons' id='random5' type="button" value="Random5"/>
            </div>
        </div>
    )
}

export default Navbar;