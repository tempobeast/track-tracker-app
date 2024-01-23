import React from "react";
import "./AthleteList.css"
import "../../App.css";

function AthleteList ({athlete}) {

    return (
        <div id="athlete_list" >
            <p>{`${athlete.last_name}, ${athlete.first_name}`}</p>           
        </div>
    )
}

export default AthleteList