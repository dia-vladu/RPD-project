import Wrapper from './Wrapper';
import { useLocation, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import NewBugPage from './NewBugPage';

function App() {
  let location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/login" && <LoginPage />}
      {location.pathname !== "/login" && location.pathname !== "/newbug" && <Wrapper />}
      {location.pathname === "/newbug" && <NewBugPage />}
    </div>
  );
}

export default App;