import React from 'react';
import './NewBugPage.css';
import Header from './Header'
import NewBugForm from './NewBugForm'

const SERVER = 'http://localhost:8080/api'

function NewBugPage() {

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
        <div className='bodyNewBugPage'>
            <Header />
            <NewBugForm onAdd={addBug} />
        </div>
    );
}

export default NewBugPage;