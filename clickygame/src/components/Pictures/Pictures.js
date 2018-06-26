import React from "react";

const Pictures = props => 
    <div className="img-container" {...props}>
        <img alt={props.id} src={props.image}/>
    </div>;

export default Pictures;
