import './Header.css'
// import { useNavigate, useParams } from "react-router-dom"
import userPicture from './images/profilePhoto2.jpg'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Button from './Button';
import React from 'react';
import LandingPage from './LandingPage';

function Header(props) {
    const { item } = props;
    const [searchparams] = useSearchParams();

    var stringHello = "Hello, " + searchparams.get('username');

    var currentPath = useLocation();
    const navigate = useNavigate();

    var pageLocation = currentPath.pathname.slice(1);
    var str = pageLocation;
    pageLocation = pageLocation.charAt(0).toUpperCase() + str.slice(1);

    var span = document.querySelector('#bottomSpan');
    var btn = document.createElement('button');
    btn.id = 'btnSpan';
    btn.innerHTML = 'New Project';
    btn.addEventListener('click', () => {
        console.log(currentPath.pathname);
    });

    function Button(props) {
        return React.createElement('button', { onClick: props.handleClick }, props.name);
    }

    return (
        <div className="header">
            <span className='topSpan'>
                <p className="pageLocation">Home</p>
                <p className="greetUser">
                    {stringHello}
                    <img id="logo" src={userPicture} alt="This is a profile picture." className="profilePicture" />
                </p>
            </span>
            <hr />
            {/* && <Button value='test'/> */}
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