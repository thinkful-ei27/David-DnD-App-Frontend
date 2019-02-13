import React, { Component } from 'react';
import {connect} from 'react-redux';
import CharacterCard from './character-card'
import '../styles/character-cards.css'
import {
  moveCharactersLeft,
  moveCharactersRight,
  changeIndex,
} from '../actions/dashboard';

class CharacterCards extends Component {
  hasPrevCharacter() { //slices (which does not mutate) the character array to check if there is a charcter when the index is decremented by one
    if (this.props.characterData.slice(this.props.index -1, this.props.index + 2).length === 3) {
      return true
    } else {
      return false
    }
  }
  hasNextCharacter() {//slices (which does not mutate) the character array to check if there is a charcter when the index is incremented by one
    if (this.props.characterData.slice(this.props.index + 1, this.props.index + 4).length === 3) {
      return true
    } else {
      return false
    }
  }
  onMoveRightClick() {
    //if there is a character to the right, it adds one to the index, which "slides" the character array to the right
    if (this.hasNextCharacter()) this.props.dispatch(moveCharactersRight());
  }
  onMoveLeftClick() {
    //if there is a character to the left, it subtracts one from the index, which "slides" the character array to the left
    if (this.hasPrevCharacter()) this.props.dispatch(moveCharactersLeft());
  }
  changeSelected(index, character) {
    //two fold dispatch here,
    //first, it changes the indexSelected, which will allow that character card to light up,
    //Second, it passes that character to state, allowing the character card in the character-sidebar component to update from state accordingly
    return this.props.dispatch(changeIndex(index, character))
  }
  render() {
    console.log(` Character Data: `, this.props.characterData)
    const outputArray = this.props.characterData.slice(this.props.index, this.props.index + 3) //displays 3 characters, no matter how many are in store
    console.log('index: ', this.props.index);
    console.log('indexSelected', this.props.indexSelected)
    console.log('outputArray', outputArray)

    //I pass characters down through props here, so that actions and reducers (I.e. state) can handle all the the math required to display the characters we want
    return (
      <div className="character-card-display">
        <div className="scroll-left-box" onClick={ () => this.onMoveLeftClick()}/>
        {this.props.characterData.slice(this.props.index, this.props.index + 3).map( (char, index) => {
          return <CharacterCard character={char} key={index} indexSelected={this.props.indexSelected} index={index} onCardClick={ () => this.changeSelected(index, char)}/>
        })}
        <div className="scroll-right-box" onClick={ () => this.onMoveRightClick()}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characterData: state.dashboard.characterArray, //these are all the characters associated with this users userID
  index : state.dashboard.index,  //this is the index that the character-cards manager starts at (0 by default)
  indexSelected : state.dashboard.indexSelected //a number 0-2 that specifies which card is selected
});

export default connect(mapStateToProps)(CharacterCards)