import logo from '../Images/logo.svg'
import React, { useState } from 'react'
import Categories from './Categories';
import Questions from './Questions';
import Score from './Score';
import Result from './Result';

function Home(props) {
  const [res, setRes] = useState({count:0});
  const [result, setResult] = useState(false);
  const changeScore = () => {
    setRes({...res, count: res.count+1})
  }
  const showResult = () => {
    setResult(true)
  }
 
  return (
    <div className="quiz-container">
      <img src={logo} alt="" />
      <h1>My little Quiz</h1>
      <p>Check your knowledge!</p>
      {!props.questions.loaded ? <Categories {...props} /> : result ? <Result {...res}/> : <><Score {...res}/><Questions showResult={showResult} changeScore={changeScore} {...props.questions}/></>}
    </div>
  )
}

export default Home
