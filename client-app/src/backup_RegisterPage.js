import React from 'react';
import './RegisterPage.css';

function RegisterPage() {
    return (
        <div>
            <div className='formBoxRegister'>
                <form>
                    <label className='registerLabel' for="username">Username</label>
                    <input className='registerTextField' id="username" type={"text"} />

                    <label className='registerLabel' for="password">Password</label>
                    <input className='registerTextField' id="password" type={"text"} />

                    <label className='registerLabel' for="email">Email</label>
                    <input className='registerTextField' id="email" type={"text"} />

                    <label className='registerLabel' for="nume">Nume</label>
                    <input className='registerTextField' id="nume" type={"text"} />

                    <label className='registerLabel' for="prenume">Prenume</label>
                    <input className='registerTextField' id="prenume" type={"text"} />

                    <label className='registerLabel' for="type">Type</label>
                    <select className='registerSelect' id="type">
                        <option className='registerOption' id="optionTester">TESTER</option>
                        <option className='registerOption' id="optionDeveloper">DEVELOPER</option>
                    </select>

                    <label className='registerLabel' for="gen">Gen</label>

                    <input className='registerTextField' id="F" type={"radio"} name='genBtn' value='F' checked />
                    <label className='registerLabel' for="F">F</label>

                    <input className='registerTextField' id="M" type={"radio"} name='genBtn' value='M' />
                    <label className='registerLabel' for="M">M</label>

                    <label className='registerLabel' for="data_nastere">Data Nastere</label>
                    <input className='registerTextField' id="data_nastere" type={"date"} />

                    <label className='registerLabel' for="facultate">Facultate</label>
                    <input className='registerTextField' id="facultate" type={"text"} />

                    <input className='registerButton' id="registerButton" type="button" value="Register" onClick={() => { inregistrare() }} />
                </form>
            </div>
        </div>
    );
}

function checkValues() {
    var usernameText = document.querySelector('#username');
    var passwordText = document.querySelector('#password');
    var emailText = document.querySelector('#email');
    var numeText = document.querySelector('#nume');
    var prenumeText = document.querySelector('#prenume');
    var numeText = document.querySelector('#nume');
    var prenumeText = document.querySelector('#prenume');


    if (usernameText.value.length === 0) {
        alert('Nu ati introdus username-ul!');
        return false;
    }

    if (passwordText.value.length === 0) {
        alert('Nu ati introdus parola!');
        return false;
    } else if (passwordText.value.length < 5) {
        alert('Parola trebuie sa aiba minimum 5 caractere!');
        return false;
    }

    if (emailText.value.length === 0) {
        alert('Nu ati introdus email-ul!');
        return false;
    }

    if (numeText.value.length === 0) {
        alert('Nu ati introdus numele!');
        return false;
    }

    if (prenumeText.value.length === 0) {
        alert('Nu ati introdus prenumele!');
        return false;
    }

    return true;
}

function inregistrare() {
    if (checkValues()) {
        const btn = document.querySelector('#btn');
        const radioButtons = document.querySelectorAll('input[name="genBtn"]');
        btn.addEventListener("click", () => {
            let gen;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    gen = radioButton.value;
                    break;
                }
            }
        })
        alert('Inregistrarea s-a efectuat cu succes!');
    }
    else {
        alert('Nu s-a efectuat inregistrarea');
    }
}

export default RegisterPage;