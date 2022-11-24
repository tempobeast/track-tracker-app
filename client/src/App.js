import {useState, useEffect} from 'react'
import './App.css';
import LoginPage from './components/LoginPage';

function App() {

  const [user, setUser] = useState('')

  return ( 
    <div>
      <h1>Track Tracker</h1>
      {user ? <h2>Welcome {user.first_name}</h2> : <LoginPage setUser={setUser}/>}
    </div>
  );
}

export default App;
