import React from 'react';
import './RegisterPage.css';

function RegisterPage(){
    return(
        <div>
            <div className='formBoxRegister'>
            <p className='registerFormTitle'>Register Form</p>
                <form>
                    <label className='registerLabel' for="username">Username</label>
                    <input className='registerTextField' id="username" type={"text"}/>

                    <label className='registerLabel' for="password">Password</label>
                    <input className='registerTextField' id="password" type={"text"}/>

                    <label className='registerLabel' for="email">Email</label>
                    <input className='registerTextField' id="email" type={"text"}/>

                    <label className='registerLabel' for="nume">Nume</label>
                    <input className='registerTextField' id="nume" type={"text"}/>

                    <label className='registerLabel' for="prenume">Prenume</label>
                    <input className='registerTextField' id="prenume" type={"text"}/>

                    <label className='registerLabel' for="type">Type</label>
                    <br/>
                    <select className='registerSelect' id="type">
                        <option className='registerOption' id="optionTester">TESTER</option>
                        <option className='registerOption' id="optionDeveloper">DEVELOPER</option>
                    </select>
                    
                    <input className='registerButton' id="registerButton" type="reset" value="Register" onClick={() => {inregistrare()}}/>
                </form>
            </div>
        </div>
    );
}

function checkValues(){
    var usernameText = document.querySelector('#username');
    var passwordText = document.querySelector('#password');
    var emailText = document.querySelector('#email');
    var numeText = document.querySelector('#nume');
    var prenumeText = document.querySelector('#prenume');

    if(usernameText.value.length === 0){
        alert('Nu ati introdus username-ul!');
        return false;
    }

    if(passwordText.value.length === 0){
        alert('Nu ati introdus parola!');
        return false;
    } else if(passwordText.value.length < 5){
        alert('Parola trebuie sa aiba minimum 5 caractere!');
        return false;
    }

    if(emailText.value.length === 0){
        alert('Nu ati introdus email-ul!');
        return false;
    }

    if(numeText.value.length === 0){
        alert('Nu ati introdus numele!');
        return false;
    }

    if(prenumeText.value.length === 0){
        alert('Nu ati introdus prenumele!');
        return false;
    }

    return true;
}

function inregistrare(){
    if(checkValues()){
        alert('Inregistrarea s-a efectuat cu succes!');
    }
    else{
        alert('Nu s-a efectuat inregistrarea');
    }
}

export default RegisterPage;