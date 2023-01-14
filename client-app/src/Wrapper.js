import './Wrapper.css';
import Content from './Content';
import Navbar from './Navbar';
import { useLocation, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';

function Wrapper() {
    let location = useLocation();

    return (
        <div className="wrapper">
            {/* {location.pathname !== "/login" && <Navbar/>} */}
            <Navbar />
            <Content />
        </div>
    )
}

export default Wrapper;