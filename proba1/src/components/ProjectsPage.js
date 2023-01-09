import React from 'react'
import './ProjectsPage.css'

function ProjectsPage(){
    return(
        <div>
            <div className='header'>
                <div className='headerContainer'>
                    Projects
                </div>
            </div>
            <div className='body'>
                <div className='card'>
                    Project 1
                    <div className='cardContent'>
                        Tasks: (nr tasks)
                    </div>
                </div>
                <div className='card'>
                    Project 2
                    <div className='cardContent'>
                        Tasks: (nr tasks)
                    </div>
                </div>
                <div className='card'>
                    Project 3
                    <div className='cardContent'>
                        Tasks: (nr tasks)
                    </div>
                </div>
                <div className='card'>Project 4</div>
                <div className='card'>Project 5</div>
                <div className='card'>Project 6</div>
                <div className='card'>Project 7</div>
                <div className='card'>Project 8</div>
                <div className='card'>Project 9</div>
                <div className='card'>Project 10</div>
            </div>
        </div>
    );
}

export default ProjectsPage;