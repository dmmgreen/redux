import { combineReducers } from 'redux';
import counter from './counter.js';

//ʹ��redux��combineReducers���������е�reducer�������

const rootReducer=combineReducers({
    counter
});

export default  rootReducer;