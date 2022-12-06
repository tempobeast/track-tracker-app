import {configureStore} from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'
import teamsReducer from './features/teams/teamSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        teams: teamsReducer,
    }
})