import React, {useState} from "react";

function IntervalItemForm() {

    const [unitOfMeasure, setUnitOfMeasure] = useState('meters')

    function handleUnitOfMeasureChange(e) {
        setUnitOfMeasure(e.target.value)
    }

    return (
        <div>
            <form>
                <div className="interval_form_item">
                    <input name="qty" placeholder="1" type="number"/>
                    <input name="distance" type="number"/>
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

export default IntervalItemForm