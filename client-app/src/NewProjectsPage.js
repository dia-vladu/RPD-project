import React from 'react';
import NewProjectsForm from './NewProjectsForm'

const SERVER = 'http://localhost:8080/api'

function NewProjectsPage(){
    const addProject = async (project) => {
        await fetch(`${SERVER}/addProject`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        });
    }

    return(
        <div>
            <NewProjectsForm onAdd={addProject}/>
        </div>
    );
}

export default NewProjectsPage;