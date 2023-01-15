import Wrapper from './Wrapper';
import { useLocation } from 'react-router-dom';
import LoginPage from './LoginPage';
import NewBugPage from './NewBugPage';
import RegisterPage from './RegisterPage';

function App() {
  let location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/login" && <LoginPage />}
      {location.pathname !== "/login" && location.pathname !== "/newbug" && location.pathname !== "/register" && <Wrapper />}
      {location.pathname === "/newbug" && <NewBugPage />}
      {location.pathname === "/register" && <RegisterPage />}
    </div>
  );
}

export default App;