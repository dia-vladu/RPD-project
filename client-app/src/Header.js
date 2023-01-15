import './Header.css'
import userPicture from './images/profilePhoto2.jpg'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import React from 'react';

function Header() {
    const [searchparams] = useSearchParams();

    var stringHello = "Hello, " + searchparams.get('username');

    var currentPath = useLocation();
    const navigate = useNavigate();

    var pageLocation = currentPath.pathname.slice(1);
    var str = pageLocation;
    pageLocation = pageLocation.charAt(0).toUpperCase() + str.slice(1);

    var btn = document.createElement('button');
    btn.id = 'btnSpan';
    btn.innerHTML = 'New Project';
    btn.addEventListener('click', () => {
        console.log(currentPath.pathname);
    });

    return (
        <div className="header">
            <span className='topSpan'>
                <p className="pageLocation">Home</p>
                <p className="greetUser">
                    {stringHello}
                    <img id="logo" src={userPicture} alt="profile_pic" className="profilePicture" />
                </p>
            </span>
            <hr />
            <span className='bottomSpan' id="bottomSpan">
                <p className="pageTitle">{pageLocation}</p>
                <div className='divButoane'>
                    {currentPath.pathname === "/projects" && React.createElement(
                        'button',
                        {
                            className: 'newProjectBtn',
                            onClick: () => navigate('/newProject')
                        },
                        'New Project'
                    )}
                    {currentPath.pathname === "/newbug" && React.createElement(
                        'button',
                        {
                            className: 'newProjectBtn',
                            onClick: () => navigate('/login')
                        },
                        'Log Out'
                    )}
                    {(currentPath.pathname === "/projects" ||  currentPath.pathname === "/about" || currentPath.pathname === "/myTasks")&& React.createElement(
                        'button',
                        {
                            className: 'newProjectBtn',
                            onClick: () => navigate('/login')
                        },
                        'Log Out'
                    )}
                </div>
                {/* <button type='button' className='newProjectBtn' onClick={() => {
                    // navigate("/NewProject")
                }}>New Project</button> */}
            </span>
        </div>
    )
}

export default Header;