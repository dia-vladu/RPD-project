import logo from './logo.svg';
import './App.css';
import Greet from './Greet'
import Form from './Form';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Greet/>
      <Form/>
    </div>
  );
}

export default App;
