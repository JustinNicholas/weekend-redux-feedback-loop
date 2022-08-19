import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Admin from '../Admin/Admin';
import Complete from '../Complete/Complete';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      <Route exact path="/">
        <Feeling />
        <Link to="/understanding">
        <button>Next</button>
        </Link>
      </Route>
      <Route path="/understanding">
        <Understanding />
        <Link to="/supported">
        <button>Next</button>
        </Link>
      </Route>
      <Route path="/supported">
        <Supported />
        <Link to="/comments">
        <button>Next</button>
        </Link>
      </Route>
      <Route path="/comments">
        <Comments />
        <Link to="/review">
        <button>Next</button>
        </Link>
      </Route>
      <Route path="/review">
        <Review />
        <Link to="/complete">
          <button>Submit</button>
        </Link>
      </Route>
      <Route path="/complete">
        <Complete />
        <Link to="/">
          <button>Submit New Feedback</button>
        </Link>
      </Route>
      {/* this is the stretch goal */}
      <Route path="/admin">
        <Admin />
      </Route>
      </div>
    </Router>
  );
}

export default App;
