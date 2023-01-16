import React from 'react';
// import './RegisterPage.css';
import RegisterForm from './RegisterForm';

const SERVER = 'http://localhost:8080/api'

function RegisterPage() {
    const addStudent = async (student) => {
        await fetch(`${SERVER}/addStudent`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        });
    }

    return(
        <div>
            <RegisterForm onAdd={addStudent}/>
        </div>
    );
}

export default RegisterPage;