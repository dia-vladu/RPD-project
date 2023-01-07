import React from 'react';
import './LoginPage.css';

function login(){
    
}

function LoginPage(){
    return(
        <div className='loginPageBody'>
            <div className='formBoxLogin'>
            <p className='logoStyle'>Logo HERE</p>
            <p className='loginFormTitle'>Sign in into your account </p>
                <form>
                    <label className='loginLabel' for="username">Username</label>
                    <input className='loginTextField' id="username" type={"text"}/>

                    <label className='loginLabel' for="password">Password</label>
                    <input className='loginTextField' id="password" type={"text"}/>
                    
                    <input className='loginButton' id="loginButton" type="reset" value="Sign in" onClick={() => {login()}}/>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;