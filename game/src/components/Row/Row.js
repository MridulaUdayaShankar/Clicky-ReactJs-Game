import React from "react";

const Row = props => (
  <div className='row'>
    <p className="lead"> Score : {props.score} | High Score: {props.high_score}</p>
    <h3>{props.message}</h3>
  </div>
);
export default Row;
