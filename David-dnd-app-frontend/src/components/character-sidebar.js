import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../styles/character-sidebar.css'
import CharacterCard from './character-card'
import '../styles/character-cards.css'
class CharacterSidebar extends Component {
  render() {
    return (
      <div className="character-sidebar">
      <CharacterCard character={this.props.character} sideBar={true}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  character: state.dashboard.character
});

export default connect(mapStateToProps)(CharacterSidebar);
