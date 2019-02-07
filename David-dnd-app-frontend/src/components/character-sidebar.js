import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../styles/character-sidebar.css'
import CharacterCard from './character-card'
import ModifierCard from './modifierCard'
import '../styles/character-cards.css'
class CharacterSidebar extends Component {
  render() {
    return (
      <div className="character-sidebar">
        <CharacterCard character={this.props.character} sideBar={true}/>
        <div className="core-stat-modifiers">
            <ModifierCard character={this.props.character} />
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  character: state.dashboard.character
});

export default connect(mapStateToProps)(CharacterSidebar);
