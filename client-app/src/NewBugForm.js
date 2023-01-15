import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import './NewBugPage.css';

const SERVER = 'http://localhost:8080/api'

function NewBugForm(props) {

    const [searchparams] = useSearchParams();

    const {onAdd} = props;
    const [descriere, setDescription] = useState('');
    const [severitate, setSeverity] = useState('1', '2' , '3');
    const [link_commit, setLink] = useState('');
    const prioritate = 3;
    const status = 'Nerezolvat';

    var StudentId = (parseInt(searchparams.get("id")));
    var ProiectId = 0;

    const addBug = () => {
        onAdd({
            severitate,
            prioritate,
            link_commit,
            status,
            descriere,
            StudentId,
            ProiectId
        })
    }

    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        const response = await fetch(`${SERVER}/getProjects`)
        const data = await response.json()
        setProjects(data);
    }

    var dropdown = document.querySelector('#projectNames');

    useEffect(() => {
        getProjects();
    }, []);

    var projectsArray = (projects.map(project => {
        return project;
    }));
    
    projectsArray.forEach(element => {
        if(dropdown.length < projectsArray.length){
            var option = document.createElement('option');
            option.text = element.nume;
            dropdown.add(option);
        }
    });

    // console.log(projectsArray);

    return(
        <div className="bodyNewBugPage">
            <br/>
            <div className='background'>
                <label id="projectName">PROJECT NAME</label>
                <br/>
                <select id="projectNames" className="projectNames" onChange={function verificareDropdown(){
                    
                }}>
                </select>
                <br/>
                <label id="labelsvr">GRAD DE SEVERITATE</label>
                <br/>
                <select id="format" className="severityLevels" onChange={(evt) => setSeverity(evt.target.value)}>
                    <option id="severity1">1</option>
                    <option id="severity2">2</option>
                    <option id="severity3">3</option>
                </select>
                <br/>
                <label id="labelDesc">DESCRIERE BUG</label>
                <br/>
                <input id="descriereBug" type="text" name="inputDesc" placeholder='Please insert the description' onChange={(evt) => setDescription(evt.target.value)} />
                <br/>
                <br/>
                <label id="labelDesc">LINK COMMIT</label>
                <br/>
                <input id="linkCommit" type="text" name="linkcommit" placeholder='Please insert the link commit' onChange={(evt) => setLink(evt.target.value)}/>
                <br/>
                <br/>
                <button id="btnReport" onClick={function() {
                    if(checkValues()){
                        alert('S-a inregistrat bug-ul! Multumim!');
                        projectsArray.forEach(element => {
                            if(dropdown.value === element.nume){
                                ProiectId = element.id;
                            }
                        });
                        addBug();
                    }
                }}>SEND REPORT</button>
                <br/>
            </div>
        </div>
    );

    function isValidURL(urlString){
        try {
            return Boolean(new URL(urlString));
        }
        catch(e){
            return false;
        }
    }

    function checkValues(){
        var descriereTextField = document.querySelector('#descriereBug');
        var urlTextField = document.querySelector('#linkCommit');

        if(descriereTextField.value.length === 0){
            alert("Nu ati introdus descrierea!");
            return false;
        }

        if(urlTextField.value.length === 0){
            alert("Nu ati introdus link-ul!");
            return false;
        } else if(!isValidURL(urlTextField.value)){
            alert("Link-ul este invalid!");
            return false;
        }

        return true;
    }
}

export default NewBugForm;