import React from 'react'

function Result(props) {
  // console.log(props);
  const percentage = () => {
    let perc = ((100 * props.count) / 12).toFixed(2)
    return (
      <>
        <h1>You answered {props.count} {props.count === 1 ? "question" : "questions"} correctly!</h1>
        <h1>That is {perc}%</h1>
      </>
    )
  }
  return (
    <div className="Result">
      {percentage()}
    </div>
  )
}

export default Result
