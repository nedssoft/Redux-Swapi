import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr'
import { charsReducer } from './starWarsReducer';

export default combineReducers({
  charsReducer,
  toastr: toastrReducer
});
