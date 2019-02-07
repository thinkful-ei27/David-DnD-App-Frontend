import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../styles/character-sidebar.css'
import CharacterCard from './character-card'
import ModifierCard from './modifierCard'
import RaceModifierCard from './race-modifier-card'
import '../styles/character-cards.css'
class CharacterSidebar extends Component {
  hideSidebar() {
    if (this.props.shouldShow) {
      return (
        <div className="character-sidebar">
          <CharacterCard character={this.props.character} sideBar={true}/>
          <div className="core-stat-modifiers">
            <ModifierCard character={this.props.character} />
            <RaceModifierCard character={this.props.character}/>
        </div>
        </div>
      )
    } else {
      return <p></p>
    }
  }
  render() {
    return (<div>{this.hideSidebar()}</div>);
  }
}

const mapStateToProps = state => ({
  character: state.dashboard.character,
  shouldShow: (state.dashboard.indexSelected > -5)
});

export default connect(mapStateToProps)(CharacterSidebar);
