import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchCharacters } from '../actions/index'
import Spinner from '../components/UI/Spinner/Spinner'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchCharacters()
  }

  render() {
    console.log(this.props.characters)
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      // <Spinner />
    }
    return (
      <div className="CharactersList_wrapper">
        {this.props.fetching && <Spinner />}
        {this.props.characters && <CharacterList characters={this.props.characters} />}
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  console.log(state)
  return {
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error,
    characters: state.charsReducer.characters
  }
}
export default connect(
  mapStateToProps,
  {
   fetchCharacters
  }
)(CharacterListView);
