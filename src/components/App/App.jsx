import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Admin from '../Admin/Admin';
import Complete from '../Complete/Complete';
import '@fontsource/roboto';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {useSelector} from 'react-redux';

function App() {

  const progressStore = useSelector(store => store.formReducer)
  const progress = progressStore.progress

  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }))(LinearProgress);

  return (
    <Router>
      <div className='App'>
        <div className='full-width-header'>
          <div className='card-container'>
          <header className='App-header'>
            <h1 className='App-title'>FEEDBACK <span className='reg'>QUIZ</span></h1>
            <p>The goal of this project was to create a 4-step feedback quiz including a review page. 
              Once submitted, the quiz data is stored in a database that is used to display user responses in an admin view. </p>
          </header>
        <div className='question-card'>
        <BorderLinearProgress className='progress-bar' size='2rem' variant="determinate" value={progress} />
          <Route exact path="/">
            <Feeling />
          </Route>
          <Route path="/understanding">
            <Understanding />
          </Route>
          <Route path="/support">
            <Support />
          </Route>
          <Route path="/comments">
            <Comments />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/complete">
            <Complete />
          </Route>
          {/* this is the stretch goal */}
          <Route path="/admin">
            <Admin />
          </Route>
        </div>
        </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
