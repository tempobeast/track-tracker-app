import {configureStore} from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'
import teamsReducer from './features/teams/teamSlice'
import workoutsReducer from './features/workouts/workoutsSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        teams: teamsReducer,
        workouts: workoutsReducer,
    }
})