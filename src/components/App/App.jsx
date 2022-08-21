// dependencies
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Comments from "../Comments/Comments";
import Review from "../Review/Review";
import Admin from "../Admin/Admin";
import Complete from "../Complete/Complete";
import "@fontsource/roboto";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

function App() {
  //different levels of progress are shared from the formReducer in the store.
  const progressStore = useSelector((store) => store.formReducer);
  const progress = progressStore.progress;

  //styling for progress bar from MUI
  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: "#5923F2",
    },
  }))(LinearProgress);

  return (
    <Router>
      {/* This info and header is returned on every page */}
      <div className="App">
        <div className="full-width-header">
          <div className="card-container">
            <header className="App-header">
              <h1 className="App-title">
                FEEDBACK <span className="reg">QUIZ</span>
              </h1>
              <p>
                The goal of this project was to create a 4-step feedback quiz
                including a review page. Once submitted, the quiz data is stored
                in a database that is used to display user responses in an admin
                view.
              </p>
            </header>
          {/* Each route has the progress bar and question card shown except for the admin page */}
            <Route exact path="/">
              <div className="question-card">
                <BorderLinearProgress
                  className="progress-bar"
                  size="2rem"
                  variant="determinate"
                  value={progress}
                />
              
              <Feeling />
              </div>
            </Route>
            <Route path="/understanding">
              <div className="question-card">
                <BorderLinearProgress
                  className="progress-bar"
                  size="2rem"
                  variant="determinate"
                  value={progress}
                />
              
              <Understanding />
              </div>
            </Route>
            <Route path="/support">
              <div className="question-card">
                <BorderLinearProgress
                  className="progress-bar"
                  size="2rem"
                  variant="determinate"
                  value={progress}
                />
              
              <Support />
              </div>
            </Route>
            <Route path="/comments">
              <div className="question-card">
                <BorderLinearProgress
                  className="progress-bar"
                  size="2rem"
                  variant="determinate"
                  value={progress}
                />
              
              <Comments />
              </div>
            </Route>
            <Route path="/review">
              <div className="question-card">
                <BorderLinearProgress
                  className="progress-bar"
                  size="2rem"
                  variant="determinate"
                  value={progress}
                />
              
              <Review />
              </div>
            </Route>
            <Route path="/complete">
              <div className="question-card">
                <BorderLinearProgress
                  className="progress-bar"
                  size="2rem"
                  variant="determinate"
                  value={progress}
                />
              
              <Complete />
              </div>
            </Route>
          </div>
        </div>
        {/* the admin page is stored outside of the header and card container div. 
        Since it needs to be below the header and not in the card when rendered*/}
        <Route path="/admin">
          <Admin />
        </Route>
      </div>
    </Router>
  );
}

export default App;
