import React from "react";
import "../App.css";

function Day({value}) {

    const shortDate = value.toString().split("").slice(0, 15)
    

return (
    <div id="header">
        <h1>{shortDate}</h1>
        
    </div>
    
  );
}
export default Day