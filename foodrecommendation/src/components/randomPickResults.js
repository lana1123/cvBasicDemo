import React from "react";
import "./randomPickResults.css";

//Child list items component / function
const RandomPickResults = ({ pickedFood }) => {
  return (
    <div className="randomPickResults">
      {pickedFood.map((food) => (
        <div>{food.text}</div>
      ))}
    </div>
  );
};
export default RandomPickResults;
