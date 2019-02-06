import React, { Component } from 'react';
import CharacterCard from './character-card'
import {connect} from 'react-redux';
import '../styles/character-cards.css'
import {
  moveCharactersLeft,
  moveCharactersRight
} from '../actions/dashboard';

class CharacterCards extends Component {
  onMoveRightClick() {
    return this.props.dispatch(moveCharactersRight())
  }
  onMoveLeftClick() {
    return this.props.dispatch(moveCharactersLeft())
  }
  render() {
    console.log(` Character Data: `, this.props.characterData)
    return (
      <div className="character-card-display">
        <div className="scroll-left-box" onClick={ () => this.onMoveLeftClick()}/>
        {this.props.characterData.slice(this.props.index, this.props.index + 3).map(char => {
          return <CharacterCard character={char}/>
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
  index : state.dashboard.index
});

export default connect(mapStateToProps)(CharacterCards)