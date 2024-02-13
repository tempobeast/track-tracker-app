import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Home from "./components/home_component/Home";
import Profile from "./components/profile/Profile";
import AthleteProfile from "./components/athlete_profile/AthleteProfile";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./features/user/userSlice";
import { setTeams } from "./features/teams/teamSlice";
import AthleteContainer from "./components/athlete_container/AthleteContainer";
import { setWorkouts } from "./features/workouts/workoutsSlice";

function App() {
  const user = useSelector((state) => state.user.value);
  const workouts = useSelector((state) => state.workouts.value);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          dispatch(setUser(user));
          if (user.type === "Coach") {
            dispatch(setWorkouts(user.workouts));
          } else {
            dispatch(setWorkouts(user.workout_list));
          }
        });
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/teams")
      .then((res) => res.json())
      .then((allTeams) => dispatch(setTeams(allTeams)));
  }, [dispatch]);

  if (user && user.type === "Coach") {
    return (
      <div className='App'>
        <Header />
        <Nav />
        <h1>Coach View</h1>
        <Routes>
          <Route path='user_profile' element={<Profile />} />
          <Route path='view_athletes' element={<AthleteContainer />} />
        </Routes>
      </div>
    );
  } else if (user && user.type === "Athlete") {
    return (
      <div className='App'>
        <Header />
        <Nav />
        <h1>Athlete View</h1>
        <Routes>
          <Route path='user_profile' element={<AthleteProfile user={user} />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <div className='App'>
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default App;
