import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'

// we track all of the info from the form and we have progress amounts kept track of in this reducer.
// each page has a different action type that sets the corresponding key in the object, and updates the
// progress by updating the hard coded progress amounts.
const formReducer = (state = {feeling: 0, understanding: 0, support: 0, comments: '', progress: 0}, action) => {
    if (action.type === 'SET_FEELING'){
        return {...state, feeling: action.payload, progress: 20}
    } else if (action.type === 'SET_UNDERSTANDING'){
        return {...state, understanding: action.payload, progress: 40}
    } else if (action.type === 'SET_SUPPORT'){
        return {...state, support: action.payload, progress: 60}
    } else if (action.type === 'SET_COMMENTS'){
        return {...state, comments: action.payload, progress: 80}
    } else if (action.type === 'CLEAR_FORM') {
        return {feeling: 0, understanding: 0, support: 0, comments: '', progress:100}
    } else if (action.type === 'CLEAR_PROGRESS') {
        return {feeling: 0, understanding: 0, support: 0, comments: '', progress:0}
    }
    return state;
}

// this holds our info that we get from our get request in the /admin page.
const responseReducer = ( state = [], action ) => {
    if (action.type === 'SET_RESPONSES') {
        return action.payload;
    }
    return state;
}

// we pass both reducers in the store.
const storeInstance = createStore(
    combineReducers({
        formReducer,
        responseReducer
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
