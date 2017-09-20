import { combineReducers } from 'redux';
import CounterReducer from './CounterReducer';

const counterApp = combineReducers({
    CounterReducer
});

export default counterApp;