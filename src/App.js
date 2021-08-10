import React , {useReducer, useContext, useState} from 'react';
import './App.scss'
import Home from './Components.js/Home';
import { BrowserRouter, Switch, Route , Redirect } from 'react-router-dom';
import useFetch from 'react-fetch-hook';

function App() {
  const {isLoading, error, data} = useFetch('https://opentdb.com/api_category.php')
  if(isLoading) return <div className="loading"><p>...loading</p></div>;
  if(error) return "Error: " + error;
  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/quizalicious">
            <Home {...data}/>
          </Route>           
          <Route render={() => <Redirect to={{pathname: "/quizalicious"}} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
