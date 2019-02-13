import React, { Component } from 'react';
import CharacterSidebar from './character-sidebar';
import CharacterCards from './character-cards';
import DashboardHeader from './dashboard-header'
import '../styles/dashboard.css'
import CharacterCreator from './character-creator';

class Dashboard extends Component {
  render() { //the top level component for dashboard
    return (
      <div className="dashboard">
        <DashboardHeader history={this.props.history} /> {/*get history from router (which was on the parent) */}
        <CharacterCreator/>
        <CharacterSidebar/>
        <CharacterCards/>
      </div>
    );
  }
}

export default Dashboard;