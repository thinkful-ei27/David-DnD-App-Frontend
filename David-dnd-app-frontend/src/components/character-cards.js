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
  hasPrevCharacter() {
    if (this.props.characterData.slice(this.props.index -1, this.props.index + 2).length === 3) {
      return true
    } else {
      return false
    }
  }
  hasNextCharacter() {
    if (this.props.characterData.slice(this.props.index + 1, this.props.index + 4).length === 3) {
      return true
    } else {
      return false
    }
  }
  onMoveRightClick() {
    if (this.hasNextCharacter()) this.props.dispatch(moveCharactersRight());
  }
  onMoveLeftClick() {
    if (this.hasPrevCharacter()) this.props.dispatch(moveCharactersLeft());
  }
  changeSelected(index, character) {
    return this.props.dispatch(changeIndex(index, character))
  }
  render() {
    console.log(` Character Data: `, this.props.characterData)
    const outputArray = this.props.characterData.slice(this.props.index, this.props.index + 3)
    console.log('index: ', this.props.index);
    console.log('indexSelected', this.props.indexSelected)
    console.log('outputArray', outputArray)

    return (
      <div className="character-card-display">
        <div className="scroll-left-box" onClick={ () => this.onMoveLeftClick()}/>
        {this.props.characterData.slice(this.props.index, this.props.index + 3).map( (char, index) => {
          return <CharacterCard character={char} key={index} indexSelected={this.props.indexSelected} index={index} onCardClick={ () => this.changeSelected(index, char)}/>
        }
        )
      }
        <div className="scroll-right-box" onClick={ () => this.onMoveRightClick()}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characterData: state.dashboard.characterArray,
  index : state.dashboard.index,
  indexSelected : state.dashboard.indexSelected
});

export default connect(mapStateToProps)(CharacterCards)