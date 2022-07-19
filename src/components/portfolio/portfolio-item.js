import React from "react";

export default function(props) {  //has to tell the function its going to receive props
    return (
        <div>
            <h3>{props.title}</h3>
            <h4>{props.url}</h4>
        </div>

    
    );
}