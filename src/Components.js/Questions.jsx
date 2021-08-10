import React , { useEffect, useState , useContext , useCallback} from 'react'
import anime from 'animejs';
import parse from 'html-react-parser'
import Result from './Result';

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

function Questions(props) {
  const [qNum, setQnum] = useState(0);
  const [show, setShow] = useState(false);
  const [colors,] = useState(["#D9F5D2", "#D2EAF5", "#EFD2F5", "#E07A7A"])
  const [qa, setQa] = useState({
    question: props.questions[qNum].question,
    correctAnswer: props.questions[qNum].correct_answer,
    incorrectAnswers: props.questions[qNum].incorrect_answers,
  });
  const [allAnsw, setAllAnsw] = useState(shuffle([{answer: qa.correctAnswer, correct: true}, ...qa.incorrectAnswers.map(i => ({answer: i, correct: false}))]));
  useEffect(() => {
    console.log("WTF");
  }, [props])
  useEffect(() => {
    setQa({
    question: props.questions[qNum].question,
    correctAnswer: props.questions[qNum].correct_answer,
    incorrectAnswers: props.questions[qNum].incorrect_answers,
    })
  }, [qNum])
  useEffect(() => {
    setAllAnsw(shuffle([{answer: qa.correctAnswer, correct: true}, ...qa.incorrectAnswers.map(i => ({answer: i, correct: false}))]))
  }, [qa])
  console.log("rendering questions");

  const checkAnswer = (item, el) => {
    if(qNum !== 11){
      setQnum(qNum+1)
      anime({
        targets: el.parentElement,
        translateX: [-5,5,0],
        duration: 100,
      });
      if(item){
        console.log("correct");
        props.changeScore()
      }
    }
    else{
      if(item){
        console.log("correct");
        props.changeScore()
      }
      setShow(true)
    }    
  }
  console.log(props);
  return (
    <div className="quiz">
      {!show ? <><p className="qNum">{qNum+1}/{props.questions.length}</p>
      <div className="quiz-qa">
        <p className="question">{parse(props.questions[qNum].question)}</p>
        <div className="answers">{allAnsw.map((answer,i) => <div className="answer" style={{backgroundColor: colors[i]}}><p className="answer" key={Math.random()} id={`${answer.correct}`} onClick={(e)=>{checkAnswer(answer.correct, e.target)}}>{parse(answer.answer)}</p></div>)}</div>
      </div></> : <Result score={props.score}/>}
      {/* {qNum.count === 11 && show ? <button onClick={() => {props.showResult()}}>Finish</button> : <button onClick={() => {setQnum(qNum+1); setShow(false)}}>Next Question</button>} */}
    </div>
  )
}

export default Questions
