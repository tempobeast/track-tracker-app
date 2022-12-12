import React from "react";
import "../App.css";
import DayThumbnail from "./DayThumbnail";



function DayThumbnailContainer ({currentWeek, workout}) {

    const daysOfTheWeek = currentWeek.map((day) => <DayThumbnail day={day} key={day.toString()}/>)
    
    return (
        <div id="day_thumb_container">
            {daysOfTheWeek}
        </div>
    )
}

export default DayThumbnailContainer