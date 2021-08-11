import React from 'react'
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function Result(props) {
  let history = useHistory();
  console.log(props);
  const percentage = () => {
    let perc = ((100 * props.score) / 12).toFixed(2)
    return (
      <div className="result">
        <h1>You answered {props.score} {props.score === 1 ? "question" : "questions"} correctly!</h1>
        <h1>That is {perc}%</h1>
        <Button onClick={()=>history.push("/")}>Go Again</Button>
      </div>
    )
  }
  return (
    <div className="Result">
      {percentage()}
    </div>
  )
}

export default Result
