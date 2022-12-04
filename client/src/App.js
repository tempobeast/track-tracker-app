import {useState, useEffect} from 'react'
import './App.css';
import LoginPage from './components/LoginPage';

function App() {

  const [user, setUser] = useState(false)
  const [teams, setTeams] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch("/teams")
    .then((res) => res.json())
    .then((allTeams) => setTeams(allTeams)
    )
  }, [])

  function onSignUpSubmit(formData) {
    if (formData.password !== formData.password_confirmation) {
      alert("Passwords do not match");
    } else {
      setErrors([]);
      setIsLoading(true);
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => {
        setIsLoading(false);
        if (res.ok) {
          res.json().then((updatedUser) => {
            console.log(updatedUser)
            setUser(updatedUser);
          });
        } else {
          res.json().then((err) => setErrors(err.errors));
        }
      });
    }
  }

  function handleLogoutClick(e) {
    fetch(`/logout`, { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setUser(null)
      }
    });
  }

  if (user) {
  return ( 
    <div>
      <h1>Track Tracker</h1>
      <h4>{user.first_name}</h4>
      <button onClick={handleLogoutClick}>Log out</button>
    </div>
  );
  } else {
    return ( 
      <div>
        <h1>Track Tracker</h1>
        {user ? <h2>Welcome {user.first_name}</h2> : <LoginPage onSignUpSubmit={onSignUpSubmit} teams={teams} isLoading={isLoading} setUser={setUser}/>}
      </div>
    );
  }
}

export default App;
