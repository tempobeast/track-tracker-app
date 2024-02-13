import React, { useState } from "react";
import IntervalItemForm from "../interval_item_form/IntervalItemForm";
import RunDistanceOrDurationForm from "../run_distance_or_duration_form/RunDistanceOrDurationForm";

function IntervalForm({}) {
  const [warmUp, setWarmUp] = useState(false);
  const [drill, setDrill] = useState([]);
  const [intervalDistance, setIntervalDistance] = useState([]);
  const [coolDown, setCoolDown] = useState(false);

  function handleWarmUpCoolDownClick(e) {
    setWarmUp(true);
  }

  return (
    <div>
      {warmUp ? <RunDistanceOrDurationForm /> : null}
      {drill > 0 ? <IntervalItemForm /> : null}
      <IntervalItemForm />
      {intervalDistance > 0 ? <IntervalItemForm /> : null}
      {coolDown ? <RunDistanceOrDurationForm /> : null}
    </div>
  );
}

export default IntervalForm;
