import {useState, useEffect} from 'react'
import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Profile from './components/Profile'
import {useSelector, useDispatch} from 'react-redux'
import { setUser } from './features/user/userSlice'
import { setTeams } from './features/teams/teamSlice'
import AthleteContainer from './components/AthleteContainer';
import { setWorkouts } from './features/workouts/workoutsSlice';

function App() {

  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          dispatch(setUser(user))
          dispatch(setWorkouts(user.workouts))
        })
      } else {
        res.json().then((err) => setErrors(err.errors))
      }
    })
  }, [])

  useEffect(() => {
    fetch("/teams")
    .then((res) => res.json())
    .then((allTeams) => dispatch(setTeams(allTeams))
    )
  }, [dispatch])

  if (user) {
  return ( 
    <div className='App'>
      <Header />
      <Nav />
      <Routes>
        <Route path="user_profile" element={<Profile />}/>
        <Route path="view_athletes" element={<AthleteContainer/>} />
      </Routes>
    </div>
  );
  } else {
    return ( 
      <div className='App'>
        <Header />
        <Nav /> 
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
        
      </div>
    );
  }
}

export default App;
