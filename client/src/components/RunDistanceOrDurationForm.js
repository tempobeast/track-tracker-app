import React from "react";

function RunDistanceOrDurationForm( {handleFormChange} ) {


    return (
        <div>
                <div className="interval_form_item">
                    <label>Description: </label>
                    <input onChange={handleFormChange} name="distance_or_duration" type="number"></input>
                    <select name="unit_of_measure" onChange={handleFormChange}>
                        <option defaultValue="miles">miles</option>
                        <option value="meters">meters</option>
                        <option value="minute">minutes</option>
                    </select>
                </div>
        </div>
    )
}

export default RunDistanceOrDurationForm