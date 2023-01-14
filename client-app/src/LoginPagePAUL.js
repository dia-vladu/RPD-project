import React from 'react';
import './LoginPage.css';
import { useEffect, useState } from "react"
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import logo from './images/bugLogo.png';

const SERVER = 'http://localhost:8080/api'

function LoginPage(){

    const navigate = useNavigate();

    const [students, setStudents] = useState([]);

    const getStudents = async () => {
        const response = await fetch(`${SERVER}/getStudents`)
        const data = await response.json()
        setStudents(data);
    }

    useEffect(() => {
        getStudents()
    }, []);

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
                    
                    <input className='loginButton' id="loginButton" type="reset" value="Sign in" onClick={() => {
                        // const studentsArray = Object.entries(students).map((student) => {
                        //     console.log(student.username);
                        // });
                        var usernameText = document.querySelector('#username');
                        var passwordText = document.querySelector('#password');
                        let studentsArray = students.map((student) => {
                            return student;
                        });

                        studentsArray.forEach(element => {
                            if(usernameText.value == element.username){
                                if(passwordText.value == element.password){
                                    if(element.tip_user === 'MP'){
                                        navigate({
                                            pathname:"/projects",
                                            search: createSearchParams({
                                                username: element.username,
                                                id: element.id
                                            }).toString()
                                        });
                                    }
                                    else if(element.tip_user === 'TST'){
                                        navigate({
                                            pathname: "/newbug",
                                            search: createSearchParams({
                                                username: element.username,
                                                id: element.id
                                            }).toString()
                                        });
                                    }
                                }
                                else{
                                    alert("Parola este gresita!");
                                }
                            }
                        });

                        // for(var i = 0; i < studentsArray.length; i++){
                        //     if(usernameText.value == studentsArray[i].username){
                        //         if(passwordText.value == studentsArray[i].password){
                        //             navigate("/projects");
                        //         }
                        //         else{
                        //             alert("Parola este gresita!");
                        //         }
                        //     }
                        // }

                    }}/>
                </form>
            </div>
            <div className='backgroundCuLogo'>
                <img id="logoLoginPage" src={logo} style={{width: 300, height: 300, marginLeft: 260}}/>
            </div>
        </div>
    );
}

export default LoginPage;