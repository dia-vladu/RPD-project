import React from 'react';
import './NewProjectsForm.css';

function NewProjectsPage(){
    return(
        <div className='newProj'>

            <label id="projectName">PROJECT NAME</label>
            <input type="text" name="inputProjName" placeholder='Please insert the name of the project.' />
            <label id="labelDesc">DESCRIRE PROIECT</label>
            <input type="text" name="inputDesc" placeholder='Please insert the description.' />
            <button id="btnReport">SUBMIT</button>
        </div>
    );
}

export default NewProjectsPage;