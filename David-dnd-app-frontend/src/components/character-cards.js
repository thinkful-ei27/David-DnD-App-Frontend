import React, { Component } from 'react';
import CharacterCard from './character-card'
import {connect} from 'react-redux';
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
  changeSelected(index) {
    return this.props.dispatch(changeIndex(index))
  }
  render() {
    let clicked;
    console.log(` Character Data: `, this.props.characterData)
    return (
      <div className="character-card-display">
        <div className="scroll-left-box" onClick={ () => this.onMoveLeftClick()}/>
        {this.props.characterData.slice(this.props.index, this.props.index + 3).map( (char, index) => {
          return <CharacterCard character={char} key={index} indexSelected={this.props.indexSelected} index={index} onCardClick={ () => this.changeSelected(index)}/>
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