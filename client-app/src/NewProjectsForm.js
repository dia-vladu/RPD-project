import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import './NewProjectsForm.css';

const SERVER = 'http://localhost:8080/api'

function NewProjectsPage(props) {
    const navigate = useNavigate();

    const { onAdd } = props;
    const [id_repo, setIdRepo] = useState('');
    const [titlu, setTitlu] = useState('');
    const [descriere, setDescriere] = useState('');

    const addProject = () => {
        onAdd({
            id_repo,
            titlu,
            descriere
        });
    }

    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        const response = await fetch(`${SERVER}/getProjects`)
        const data = await response.json()
        setProjects(data);
    }

    useEffect(() => {
        getProjects()
    }, []);

    return (
        <div className='newProj'>
            <div className="projectForm">
                <label id="projectName">Id Repo</label>
                <input type="text" id='repo' name="inputProjName" placeholder='Please insert the repo id.' onChange={(evt) => setIdRepo(evt.target.value)} />
                <label id="projectName">Project Name</label>
                <input type="text" id='titlu' name="inputProjName" placeholder='Please insert the name of the project.' onChange={(evt) => setTitlu(evt.target.value)} />
                <label id="labelDesc">Descriere Proiect</label>
                <input type="text" id='descriere' name="inputDesc" placeholder='Please insert the description.' onChange={(evt) => setDescriere(evt.target.value)} />
                <input id="btnReport" type="button" value="Submit" onClick={() => { inregistrare() }}/>
            </div>
        </div>
    );

    function checkValues() {
        var id_repo = document.querySelector('#repo');
        var titlu = document.querySelector('#titlu');
        var descriere = document.querySelector('#descriere');

        if (id_repo.value.length === 0) {
            alert('Nu ati introdus niciun id repo!');
            return false;
        }

        if (titlu.value.length === 0) {
            alert('Nu ati introdus titlul proiectului!');
            return false;
        }

        if (descriere.value.length === 0) {
            alert('Nu ati introdus descrierea proiectului!');
            return false;
        }

        return true;
    }

    function inregistrare() {
        if (checkValues()) {
            alert('Inregistrarea s-a efectuat cu succes!');
            addProject();
        }
        else {
            alert('Nu s-a efectuat inregistrarea');
        }
    }
}

export default NewProjectsPage;