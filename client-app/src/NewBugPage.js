import React from 'react';
import './NewBugPage.css';
import Header from './Header'
import NewBugForm from './NewBugForm'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';


const SERVER = 'http://localhost:8080/api'

function NewBugPage() {

    var currentPath = useLocation();
    const navigate = useNavigate();

    const addBug = async (bug) => {
        await fetch(`${SERVER}/addBug`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bug)
        });
    }

    return (
        <div className='body'>
            <Header />
            <NewBugForm onAdd={addBug} />
        </div>
    );
}

export default NewBugPage;