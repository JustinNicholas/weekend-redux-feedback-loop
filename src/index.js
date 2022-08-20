import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'

const formReducer = (state = {feeling: 0, understanding: 0, supported: 0, comments: ''}, action) => {
    if (action.type === 'SET_FEELING'){
        return {...state, feeling: action.payload}
    } else if (action.type === 'SET_UNDERSTANDING'){
        return {...state, understanding: action.payload}
    } else if (action.type === 'SET_SUPPORTED'){
        return {...state, supported: action.payload}
    } else if (action.type === 'SET_COMMENTS'){
        return {...state, somments: action.payload}
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({
        formReducer
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
