import React , { useEffect , useState } from 'react'

function Score(props) {
  const [score, setScore] = useState({count:0});
  useEffect(() => {
    setScore(props)
  }, [props])
  return (
    <>
      <p className="score">Score: {score.count}</p>
    </>
  )
}

export default Score
