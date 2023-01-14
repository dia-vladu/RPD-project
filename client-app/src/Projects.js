import { useEffect, useState } from "react"
// import { useNavigate, useParams } from "react-router-dom"
import Project from './Project'
import './Projects.css'

const SERVER = 'http://localhost:8080/api'

function Projects() {
    const [projects, setProjects] = useState([])
    //const {id} = useParams();

    //const navigate = useNavigate();

    const getProjects = async () => {
        const response = await fetch(`${SERVER}/getProjects`)

        const data = await response.json()
        setProjects(data)
    }

    useEffect(() => {
        getProjects()
    }, [])

    return (
        <div className="projects">
            {
                projects.map(e => <Project key={e.id} item={e} />)
            }
        </div>
        /* {<button onClick={() => {
            navigate("/students")
        }}> Go to students</button> }*/
    )
}

export default Projects