import React from "react";
import "../App.css";
import AthleteList from "./AthleteList";
import { useSelector } from 'react-redux'



function AthleteContainer () {
    const user = useSelector((state) => state.user.value)

    const athletesToDisplay = user.athletes.map((athlete) => <AthleteList athlete={athlete} key={athlete.id} />)
    
    return (
        <div id="athlete_container">
            {athletesToDisplay}
        </div>
    )
}

export default AthleteContainer