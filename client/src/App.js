import {useState, useEffect} from 'react'
import './App.css';
import LoginPage from './components/LoginPage';

function App() {

  const [user, setUser] = useState('')
  const [teams, setTeams] = useState([])

  useEffect(() => {
    fetch("/teams")
    .then((res) => res.json())
    .then((allTeams) => setTeams(allTeams)
    )
  }, [])

  return ( 
    <div>
      <h1>Track Tracker</h1>
      {user ? <h2>Welcome {user.first_name}</h2> : <LoginPage setUser={setUser} teams={teams}/>}
    </div>
  );
}

export default App;
