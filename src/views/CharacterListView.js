import React from "react";
import { connect } from "react-redux";
import ReduxToastr from 'react-redux-toastr'
import { CharacterList } from "../components";
// import actions
import { fetchCharacters } from "../actions/index";
import Spinner from "../components/UI/Spinner/Spinner";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchCharacters();
  }

  render() {
    return (
      <div className="CharactersList_wrapper">
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />
        {this.props.fetching && <Spinner />}
        {this.props.characters && (
          <CharacterList
            characters={this.props.characters}
            fetchCharacters={this.props.fetchCharacters}
            next={this.props.next}
            prev={this.props.prev}
          />
        )}
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error,
    characters: state.charsReducer.characters,
    next: state.charsReducer.next,
    prev: state.charsReducer.prev
  };
};
export default connect(
  mapStateToProps,
  {
    fetchCharacters
  }
)(CharacterListView);
