import React from "react";
import "../App.css";
import DayThumbnail from "./day_thumbnail/DayThumbnail";

function DayThumbnailContainer ({ currentWeek, clickedDateValue, onCalendarChange }) {
    
    const daysOfTheWeek = currentWeek.map((day) => <DayThumbnail day={day} onCalendarChange={onCalendarChange} key={day.toString()}/>)
    
    return (
        <div id="day_thumb_container-with-buttons">
            <button className="day_thumb_container-button" onClick={() => onCalendarChange(new Date(clickedDateValue.setDate(clickedDateValue.getDate() - 7)))}>last week</button>
            <div id="day_thumb_container">
                {daysOfTheWeek}
            </div>
            <button className="day_thumb_container-button" onClick={() => onCalendarChange(new Date(clickedDateValue.setDate(clickedDateValue.getDate() + 7)))}>next week</button>
        </div>
    )
}

export default DayThumbnailContainer