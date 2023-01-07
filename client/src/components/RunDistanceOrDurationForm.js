import React, {useState} from "react";

function RunDistanceOrDurationForm( {newWorkoutFormData, setNewWorkoutFormData} ) {

    const [runDetail, setRunDetail] = useState({
        distance_or_duration: "",
        unit_of_measure: "meters"
    })

    function handleRunDetailChange(e) {
        setRunDetail({...runDetail, [e.target.name]: e.target.value})
    }

    function handleRunDetailSubmit(e) {
        e.preventDefault();
        const detail = `${runDetail.distance_or_duration} ${runDetail.unit_of_measure} run`
        setNewWorkoutFormData({...newWorkoutFormData, details: detail})
    }

    return (
        <div>
            <form onSubmit={handleRunDetailSubmit}>
                <div className="interval_form_item">
                    <label>Description: </label>
                    <input onChange={handleRunDetailChange} name="distance_or_duration" type="number"></input>
                    <select name="unit_of_measure" onChange={handleRunDetailChange}>
                        <option defaultValue="meters">meters</option>
                        <option value="mile">miles</option>
                        <option value="minute">minutes</option>
                    </select>
                </div>
                <button type="submit">Next</button>
            </form>
        </div>
    )
}

export default RunDistanceOrDurationForm