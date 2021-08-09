import React , { useState , useEffect } from 'react';
import './App.scss'
import Home from './Components.js/Home';
import { BrowserRouter, Switch, Route , Redirect } from 'react-router-dom';

function App() {
  const [categories, setCategories] = useState({loaded: false, categories: []});
  const [questions, setQuestions] = useState({loaded: false, questions: []});

  useEffect(() => {
    getCategories()
  }, [])
  const getCategories = async () => {
    try{
      const result = await fetch('https://opentdb.com/api_category.php')
      const res = await result.json()
      setCategories({loaded: true, categories: res.trivia_categories})
    }catch(e){throw e}
  }
  const getQuestions = async (cat, lvl) => {
    let category = await cat;
    let level = await lvl;
    try{
      const result = await fetch(`https://opentdb.com/api.php?amount=12&category=${category}&difficulty=${level}`)
      const res = await result.json()
      setQuestions({loaded: true, questions: res.results})
    }catch(e){throw e}
  }

  const getCategory = (id,lvl) => {
    getQuestions(id,lvl)
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/quizalicious"><Home categories={categories} getCategory={getCategory} questions={questions}/></Route>
          <Route render={() => <Redirect to={{pathname: "/quizalicious"}} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
