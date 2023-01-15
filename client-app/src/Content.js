import './Content.css'
import Projects from './Projects';
import Header from './Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import LandingPage from './LandingPage';
import MyTasks from './MyTasks';
import RegisterPage from './RegisterPage';
import NewProjectsPage from './NewProjectsForm';
import NewBugPage from './NewBugPage';

function Content() {
    return (
        <div className="content">
            <Header />
            <Routes>
                <Route path="/projects" element={<Projects />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/newProject" element={<NewProjectsPage />} />
                <Route path="/" element={<Navigate to='/login'/>} />
                <Route path='/about' element={<LandingPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/newbug' element={<NewBugPage />} />
                <Route path='/myTasks' element={<MyTasks />} />
            </Routes>
        </div>
    )
}

export default Content;