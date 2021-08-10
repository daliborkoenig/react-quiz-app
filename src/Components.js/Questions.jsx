import React , { useEffect, useState , useContext , useCallback} from 'react'
import anime from 'animejs';
import parse from 'html-react-parser'

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
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(true);
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
    console.log("checking....");
    anime({
      targets: el,
      translateX: 270,
      delay: anime.stagger(100) // increase delay by 100ms for each elements.
    });
    if(item){
      console.log("correct");
      props.changeScore()
    }
  }
  return (
    <div>
      <p className="qNum">Question: {qNum}</p>
      <div>
        <p className="question">{parse(props.questions[qNum].question)}</p>
        {allAnsw.map((answer,i) => <p className="answer" key={Math.random()} id={`${answer.correct}`} onClick={(e)=>{checkAnswer(answer.correct, e.target)}}>{parse(answer.answer)}</p>)}
      </div>
      {qNum.count === 11 && show ? <button onClick={() => {props.showResult()}}>Finish</button> : <button onClick={() => {setQnum(qNum+1); setShow(false)}}>Next Question</button>}
    </div>
  )
}

export default Questions
