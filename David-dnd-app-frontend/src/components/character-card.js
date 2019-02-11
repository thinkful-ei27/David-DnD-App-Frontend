import React, { Component } from 'react';
import {editCharacterFrontend, deleteCharacter, hideCharacters} from '../actions/dashboard'
import {connect} from 'react-redux'
import '../styles/character-card.css'


class CharacterCard extends Component {
  editCharacter() {
    return this.props.dispatch(editCharacterFrontend())
  }
  deleteCharacter(id) {
    this.props.dispatch(hideCharacters())
    return this.props.dispatch(deleteCharacter(id))
  }
  
  render() {
    if (this.props.sideBar) {
      return (
        <div className="sideBar">
          <div className={`character-card select`}>
            <p>
            Name: {this.props.character.name} <br></br>
            Class : {this.props.character.characterClass} <br></br>
            Race : {this.props.character.race} <br></br>
            Level: {this.props.character.level} <br></br>
            Strength: {this.props.character.Strength} <br></br>
            Dexterity: {this.props.character.Dexterity} <br></br>
            Constitution: {this.props.character.Charisma} <br></br>
            Intelligence: {this.props.character.Intelligence} <br></br>
            Wisdom: {this.props.character.Wisdom} <br></br>
            Charisma:{this.props.character.Charisma} <br></br>
            <button onClick={ () => this.editCharacter()}>Edit Character</button>
            <button onClick={ () => this.deleteCharacter(this.props.character.id)}>Delete Character</button>
            </p>
          </div>
        </div>
      );
    }
    if (this.props.index === this.props.indexSelected) {
      return (
        <div className="character-card-border selected">
          <div className={`character-card select`}>
            <p>
            Name: {this.props.character.name} <br></br>
            Class : {this.props.character.characterClass} <br></br>
            Race : {this.props.character.race} <br></br>
            Level: {this.props.character.level} <br></br>
            Strength: {this.props.character.Strength} <br></br>
            Dexterity: {this.props.character.Dexterity} <br></br>
            Constitution: {this.props.character.Charisma} <br></br>
            Intelligence: {this.props.character.Intelligence} <br></br>
            Wisdom: {this.props.character.Wisdom} <br></br>
            Charisma:{this.props.character.Charisma} <br></br>
            </p>
          </div>
        </div>
      ); 
    }
    return (
      <div className="character-card-border" onClick={this.props.onCardClick}>
        <div className={`character-card`}>
          Name: {this.props.character.name} <br></br>
          Class : {this.props.character.characterClass} <br></br>
          Race : {this.props.character.race} <br></br>
          Level: {this.props.character.level} <br></br>
          Strength: {this.props.character.Strength} <br></br>
          Dexterity: {this.props.character.Dexterity} <br></br>
          Constitution: {this.props.character.Charisma} <br></br>
          Intelligence: {this.props.character.Intelligence} <br></br>
          Wisdom: {this.props.character.Wisdom} <br></br>
          Charisma:{this.props.character.Charisma} <br></br>
        </div>
      </div>
    );
  }
}


export default connect()(CharacterCard);