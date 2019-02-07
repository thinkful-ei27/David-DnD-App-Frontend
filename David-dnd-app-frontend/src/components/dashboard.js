import React, { Component } from 'react';
import CharacterSidebar from './character-sidebar';
import CharacterCards from './character-cards';
import '../styles/dashboard.css'
import CharacterCreator from './character-creator';

class Dashboard extends Component {
  render() {
    return (
   <div className="dashboard">
     <CharacterCreator/>
     <CharacterSidebar/>
     <CharacterCards/>
   </div>
    );
  }
}

export default Dashboard;