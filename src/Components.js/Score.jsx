import React , { useEffect , useState } from 'react'

function Score(props) {

  // const [score, setScore] = useState({count:0});
  // useEffect(() => {
  //   setScore(props)
  // }, [props])
  // console.log(props);
  console.log("rendering score");
  console.log(props);
  return (
    <>
      <p className="score">Score: {props.score}</p>
    </>
  )
}

export default Score
