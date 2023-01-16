import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import './RegisterForm.css';

const SERVER = 'http://localhost:8080/api'

function RegisterForm(props) {
    const navigate = useNavigate();

    const { onAdd } = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nume, setNume] = useState('');
    const [prenume, setPrenume] = useState('');
    const [email, setEmail] = useState('');
    const [tip_user, setTipuser] = useState("TST", "MP");
    const [gen, setGen] = useState('F', 'M');
    const [data_nasterii, setDatanastere] = useState('');
    const [facultate, setFacultate] = useState('');

    const addStudent = () => {
        onAdd({
            username,
            password,
            nume,
            prenume,
            email,
            tip_user,
            gen,
            data_nasterii,
            facultate
        });
    }

    const [students, setStudents] = useState([]);

    const getStudents = async () => {
        const response = await fetch(`${SERVER}/getStudents`)
        const data = await response.json()
        setStudents(data);
    }

    useEffect(() => {
        getStudents()
    }, []);

    // console.log(document.querySelector('#data_nasterii').value);

    var userArray = [];

    return (
        <div className='formBoxRegister'>
            <div className="register">
                <h1>Register page</h1>
                <form className='registerForm'>
                    <div className="elementeForm">
                        <label className='registerLabel' for="username">Username</label>
                        <input className='registerTextField' id="username" type={"text"} onChange={(evt) => setUsername(evt.target.value)} />

                        <label className='registerLabel' for="password">Password</label>
                        <input className='registerTextField' id="password" type={"text"} onChange={(evt) => setPassword(evt.target.value)} />

                        <label className='registerLabel' for="email">Email</label>
                        <input className='registerTextField' id="email" type={"email"} onChange={(evt) => setEmail(evt.target.value)} />

                        <label className='registerLabel' for="nume">Nume</label>
                        <input className='registerTextField' id="nume" type={"text"} onChange={(evt) => setNume(evt.target.value)} />

                        <label className='registerLabel' for="prenume">Prenume</label>
                        <input className='registerTextField' id="prenume" type={"text"} onChange={(evt) => setPrenume(evt.target.value)} />

                        <div className="grupSelect">
                            <label className='registerLabel' for="tip_user">Type</label>
                            <select className='registerSelect' id="tip_user" onChange={(evt) => setTipuser(evt.target.value)}>
                                <option className='registerOption' id="optionTester" value={"TST"}>TST</option>
                                <option className='registerOption' id="optionDeveloper" value={"MP"}>MP</option>
                            </select>
                        </div>

                        <div className="grupSelect">
                            <label className='registerLabel' for="gen">Gen</label>
                            <select className='registerSelect' id="gen" onChange={(evt) => setGen(evt.target.value)}>
                                <option className='registerOption' id="optionF" value={"F"}>F</option>
                                <option className='registerOption' id="optionM" value={"M"}>M</option>
                            </select>
                        </div>

                        <label className='registerLabel' for="data_nasterii">Data Nastere</label>
                        <input className='registerTextField' id="data_nasterii" type={"date"} onChange={(evt) => {
                            console.log(evt.target.value);
                            setDatanastere(evt.target.value)
                        }
                        } />

                        <label className='registerLabel' for="facultate">Facultate</label>
                        <input className='registerTextField' id="facultate" type={"text"} onChange={(evt) => setFacultate(evt.target.value)} />

                    </div>
                    <input className='registerButton' id="registerButton" type="button" value="Register" onClick={() => { inregistrare() }} />
                </form>
            </div>
        </div>
    );

    function checkValues() {
        var usernameText = document.querySelector('#username');
        var passwordText = document.querySelector('#password');
        var emailText = document.querySelector('#email');
        var numeText = document.querySelector('#nume');
        var prenumeText = document.querySelector('#prenume');
        var dataNasteriiText = document.querySelector('#data_nasterii');
        var facultateText = document.querySelector('#facultate');

        var typeSelectText = document.querySelector('#tip_user');
        var genText = document.querySelector('#gen');

        if (usernameText.value.length === 0) {
            alert('Nu ati introdus username-ul!');
            return false;
        }

        if (passwordText.value.length === 0) {
            alert('Nu ati introdus parola!');
            return false;
        } else if (passwordText.value.length < 4) {
            alert('Parola trebuie sa aiba minimum 4 caractere!');
            return false;
        } else if (passwordText.value.length > 16) {
            alert('Parola trebuie sa aiba maximum 16 caractere!');
            return false;
        }

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (emailText.value.length === 0) {
            alert('Nu ati introdus email-ul!');
            return false;
        }
        if (!reg.test(emailText.value)) {
            alert("Email-ul este intr-un format invalid!");
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

        if (dataNasteriiText.value.length === 0) {
            alert('Nu ati ales data nasterii!');
            return false;
        }

        if (facultateText.value.length === 0) {
            alert('Nu ati introdus numele facultatii!');
            return false;
        }

        // userArray.push(
        //     usernameText.value, passwordText.value,
        //     emailText.value, numeText.value, prenumeText.value,
        //     typeSelectText.value, genText.value, dataNasteriiText.value,
        //     facultateText.value
        // ); 

        // console.log(userArray);

        return true;
    }

    function inregistrare() {
        if (checkValues()) {
            var typeSelectText = document.querySelector('#tip_user');
            var usernameText = document.querySelector('#username');
            var passwordText = document.querySelector('#password');
            // let studentsArray = students.map((student) => {
            //     return student;
            // });

            alert('Inregistrarea s-a efectuat cu succes!');
            addStudent();
            if (typeSelectText.value === 'MP') {
                navigate({
                    pathname: "/projects",
                    search: createSearchParams({
                        username: usernameText.value,
                        // id: element.id
                    }).toString()
                });
            } else {
                navigate({
                    pathname: "/newbug",
                    search: createSearchParams({
                        username: usernameText.value,
                        // id: element.id
                    }).toString()
                });
            }
        }
        else {
            alert('Nu s-a efectuat inregistrarea');
        }
    }
}

export default RegisterForm;