import icon from '../Images/icon.svg'
import logo from '../Images/logo-solo.svg'
import React, { useState, useContext } from 'react'
import useFetch from 'react-fetch-hook';
import Categories from './Categories';
import Questions from './Questions';
import Score from './Score';
import Result from './Result';

function Home(props) {
  const [result, setResult] = useState(false);
  const [api, setApi] = useState({category: null, level: null});
  const [score, setScore] = useState(0);

  console.log("rendering home");
  const { isLoading , error , data } = useFetch(`https://opentdb.com/api.php?amount=12&category=${api.category}&difficulty=${api.level}`)
  if(isLoading) return <div className="loading"><p>...loading</p></div>;
  if(error) return "Error: " + error;
  const changeScore = () => {
    console.log("changing score");
    setScore(score+1)
  }
  const showResult = () => {
    setResult(true)
  }
  const chooseCat = async (cat, lvl) => {
    setApi({category: cat, level: lvl})
  }
  console.log(score);
  return (
    <div className="quiz-container">
      <div className="logotrip">
        <img src={logo} alt="logo" className="logo"/>
        {data.results.length === 0 && <img src={icon} alt="logo-icon" className="icon"/>}
        <p>Test your knowledge!</p>
      </div>
      {/* <Score score={score}/> */}
      {data.results.length === 0 && <Categories {...props} chooseCat={chooseCat}/>}
      {data.results.length > 0 && <Questions score={score} changeScore={changeScore} questions={data.results}/>}
    </div>
  )
}

export default Home
