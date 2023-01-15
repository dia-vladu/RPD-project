import { useEffect, useState } from "react"
import './Project.css'
import userPicture1 from './images/profilePhoto2.jpg'
import userPicture2 from './images/profilePhoto2.jpg'
import userPicture3 from './images/profilePhoto2.jpg'

const SERVER = 'http://localhost:8080/api'

function Project(props) {
    const { item } = props;

    const [bugs, setBugs] = useState([])

    const getBugs = async () => {
        const response = await fetch(`${SERVER}/getProject/${item.id}/bugs`)
        const data = await response.json()
        setBugs(data)
    }

    useEffect(() => {
        getBugs();
    }, [])

    // bugs.map(e => <Project key={e.id} bug={e} />)
    console.log(JSON.stringify(bugs));

    return (
        <div className="project">
            <div className="details">
                <div className="top">
                    <span className="text">
                        <p className='projectTitle'>{item.nume}</p>
                        <p className='bugs'>{bugs.length > 0 ? bugs.length : 0} Reported Bugs</p>
                    </span>
                    <div class="menu-project">
                        <div class="dropdown-container" >
                        {/* tabindex="-1" */}
                            <select class="three-dots">
                                <option>Rename</option>
                                <option>Delete</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="MPs">
                <span className="pictures">
                    <img id="logo" src={userPicture1} alt="" />
                    <img id="logo" src={userPicture2} alt="" />
                    <img id="logo" src={userPicture3} alt="" />
                </span>
                <p className='members'>nr Members</p>
            </div>
            <hr />
            <p className="createDate">Created on {new Date(item.createdAt).toLocaleDateString()}</p>
        </div>
    )
}

export default Project;