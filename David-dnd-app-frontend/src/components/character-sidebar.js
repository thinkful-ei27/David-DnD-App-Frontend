import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../styles/character-sidebar.css'
import CharacterCard from './character-card'
import ModifierCard from './modifierCard'
import RaceModifierCard from './race-modifier-card'
import EditCharacterCard from './edit-character-card'
import '../styles/character-cards.css'
class CharacterSidebar extends Component {
  render() {
    if (this.props.shouldShow) {
      return (
        <div className="character-sidebar">
          <CharacterCard character={this.props.character} sideBar={true}/> {/*this sideBar prop is what allows the edit character, and delete buttons to be on the character card*/}
          <div className="core-stat-modifiers">
            <ModifierCard character={this.props.character} />{/*calculates bonuses, based on core stats */}
            <RaceModifierCard character={this.props.character}/>{/*calculates bonuses, based on race */}
            <EditCharacterCard  /> {/*Displays conditionally based on state inside the component*/}
        </div>
        </div>
      )
    } else {
      return <p></p>
    }
  }
}

const mapStateToProps = state => ({
  character: state.dashboard.character, //character that comes from state
  shouldShow: (state.dashboard.indexSelected >= 0) //checks if there is a character selected in character-cards component 
});


export default connect(mapStateToProps)(CharacterSidebar);
