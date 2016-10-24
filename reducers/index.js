import { combineReducers } from 'redux';
import counter from './counter.js';

//使用redux的combineReducers方法将所有的reducer打包起来

const rootReducer=combineReducers({
    counter
});

export default  rootReducer;