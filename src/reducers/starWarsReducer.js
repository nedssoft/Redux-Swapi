import { FETCHING, SUCCESS, FAILURE } from "../actions";
const initialState = {
  characters: null,
  // Array characters, Boolean fetching, null error.
  fetching: false,
  error: null,
  next: null,
  prev: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {
        ...state,
        fetching: true
      }
    case SUCCESS:
      return {
        ...state,
        fetching: false,
        characters: action.payload.results,
        next: action.payload.next,
        prev: action.payload.previous
      }
    case FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};
