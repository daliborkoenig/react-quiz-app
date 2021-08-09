import React , { useEffect, useState , useReducer } from 'react'
import reducer from '../Reducer/QuestionReducer'
import parse from 'html-react-parser'

function Question(props) {
  const [qNum, dispatch] = useReducer(reducer, { count: 0 });
  const [loaded, setLoaded] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setLoaded(true)
  }, [props.loaded]) 
  const shuffle = (array) => {
    let counter = array.length;
    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    return array;
  }
  const questions = () => {
    let question = props.questions[qNum.count].question
    let correctAnswer = props.questions[qNum.count].correct_answer
    let incorrectAnswers = props.questions[qNum.count].incorrect_answers
    let allAnswers = [{answer: correctAnswer, correct: true}]
    incorrectAnswers.forEach(element => {
      allAnswers.push({answer: element, correct: false})
    });
    return (
      <div>
        <p className="question">{parse(question)}</p>
        {allAnswers.map((answer,i) => <p className="answer" key={Math.random()} id={`${answer.correct}`} onClick={(e)=>{!show && checkAnswer(answer.correct)}}>{parse(answer.answer)}{show && <span className={`${answer.correct}`}></span>}</p>)}
      </div>
    )
  }
  const checkAnswer = (item) => {
    setShow(true)
    if(item){
      props.changeScore()
    }
  }
  return (
    <div>
      <p>Question: {qNum.count+1}/{props.questions.length}</p>
      {loaded  && questions()}
      {qNum.count === 11 && show ? <button onClick={() => {props.showResult()}}>Finish</button> : <button onClick={() => {dispatch({type: 'ADD'}); setShow(false)}}>Next Question</button>}
    </div>
  )
}

export default Question
