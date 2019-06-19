// we'll need axios
import axios from "axios";

export const SUCCESS = "SUCCESS";
export const FETCHING = "FETCHING";
export const FAILURE = "FAILURE";
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

const requestFailed = payload => {
  return { type: FAILURE, payload };
};
const requestFetching = () => {
  return { type: FETCHING };
};

const requestSucceeded = (payload) => {
  return { type: SUCCESS, payload }
}

export const fetchCharacters = () => dispatch => {
  dispatch(requestFetching())
  axios.get('https://swapi.co/api/people/')
  .then( ({ data}) => {
    console.log(data)
    dispatch(requestSucceeded(data))
  })
  .catch( err => {
    console.log(err.message)
    dispatch(requestFailed(err.message))
  })
}
