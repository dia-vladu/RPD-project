import './App.css';
import Navbar3 from './components/Navbar3';
import { Routes, Route, useLocation} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import MenuPage from './components/MenuPage';
import ProjectsPage from './components/ProjectsPage';
import MyTasksPage from './components/MyTasksPage';

function App() {
  //declaram variabila
  let location= useLocation();
  console.log(location);

  return (
    <div className="App">
      {/* aici e conditie, un fel de if pe scurt */}
        {location.pathname !=="/login"&&<Navbar3/>}
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
          <Route path="/myTasks" element={<MyTasksPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/menu" element={<MenuPage/>}/>
        </Routes>
    </div>
  );
}

export default App;