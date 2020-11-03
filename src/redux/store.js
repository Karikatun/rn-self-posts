import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import {postReducer} from './reducers/post';

const rootReducer = combineReducers({
  post: postReducer
});


export default createStore(rootReducer, applyMiddleware(ReduxThunk));
