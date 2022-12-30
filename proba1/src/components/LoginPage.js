import React from 'react';
import './LoginPage.css';

function login(){
    
}

function LoginPage(){
    return(
        <div>
            <div className='formBoxLogin'>
            <p className='loginFormTitle'>Login Form</p>
                <form>
                    <label className='loginLabel' for="username">Username</label>
                    <input className='loginTextField' id="username" type={"text"}/>

                    <label className='loginLabel' for="password">Password</label>
                    <input className='loginTextField' id="password" type={"text"}/>
                    
                    <input className='loginButton' id="loginButton" type="reset" value="Login" onClick={() => {login()}}/>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;