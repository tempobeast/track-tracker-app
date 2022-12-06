import {useState, useEffect} from 'react'
import './App.css';
import LoginPage from './components/LoginPage';
import { Route, Routes, Navigate } from "react-router-dom";
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Profile from './components/Profile'
import {useSelector, useDispatch} from 'react-redux'
import {setUser} from './features/user/userSlice'
import { setTeams } from './features/teams/teamSlice'

function App() {

  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch("/teams")
    .then((res) => res.json())
    .then((allTeams) => dispatch(setTeams(allTeams))
    )
  }, [dispatch])

  useEffect(() => {
    fetch("/me")
    .then((res) => res.json())
    .then((user) => dispatch(setUser(user)))
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
            dispatch((setUser(updatedUser)));
          });
        } else {
          res.json().then((err) => setErrors(err.errors));
        }
      });
    }
  }



  if (user) {
  return ( 
    <div className='App'>
      <Header />
      <Nav />
      <Profile user={user} setUser={setUser}/>
      <h2>{user.first_name}</h2>
    </div>
  );
  } else {
    return ( 
      <div className='App'>
        <Header />
        <Nav /> 
        <Home />
        <LoginPage onSignUpSubmit={onSignUpSubmit}/>
      </div>
    );
  }
}

export default App;
