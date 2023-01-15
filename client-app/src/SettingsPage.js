import React from 'react';
import './SettingsPage.css';

function SettingsPage(){
    return(
       
            <div>
            <h1>ACCOUNT SETTINGS</h1>
        
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <label id="profileLabel">PROFILE</label>  
            <button id="changePic">CHANGE</button>
            <br/>
            <br/>
            <label id="firstName">FIRST NAME</label>
             <br/>
             <br/>
            <input type="text" name="inputName" placeholder='FIRST NAME' />
            <br/>
            <br/>
            <label id="lastName">LAST NAME</label>
             <br/>
             <br/>
            <input type="text" name="lastName" placeholder='LAST NAME' />
            <br/>
            <br/>
            <label id="email">EMAIL</label>
             <br/>
             <br/>
            <input type="text" name="email" placeholder='EMAIL' />

            <br/>
            <br/>
            <label id="username">USERNAME</label>
             <br/>
             <br/>
            <input type="text" name="username" placeholder='USERNAME' />
            <br/>
            <br/>
            <br/>
            <br/>
            <button id="btnsaveChanges">SAVE CHANGES</button>
            </div>
    );
}

export default SettingsPage;