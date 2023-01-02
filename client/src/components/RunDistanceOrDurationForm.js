import React, {useState} from "react";

function RunDistanceOrDurationForm() {

    const [unitOfMeasure, setUnitOfMeasure] = useState('meters')

    function handleUnitOfMeasureChange(e) {
        setUnitOfMeasure(e.target.value)
    }

    function handleDrillIntervalClick(e) {

    }

    return (
        <div>
            <form>
                <div className="interval_form_item">
                    <label>Description: </label>
                    <input type="number"></input>
                    <select name="unit_of_measure" onChange={handleUnitOfMeasureChange}>
                        <option value="meters">meters</option>
                        <option value="miles">miles</option>
                        <option value="minutes">minutes</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default RunDistanceOrDurationForm