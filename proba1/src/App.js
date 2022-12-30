import './App.css';
import Navbar2 from './components/Navbar2';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import MenuPage from './components/MenuPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar2/>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/menu" element={<MenuPage/>}/>
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;