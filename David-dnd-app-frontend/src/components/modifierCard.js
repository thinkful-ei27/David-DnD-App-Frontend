import React, { Component } from 'react';
import '../styles/modifier-card.css'


class ModifierCard extends Component {
  calcModifer(initialStat) {
    
    return Math.floor((initialStat - 10) / 2);
  }
  
  render() {
    return (
      <p className="modifier-card">
        -=Core Stat Modifiers=-<br></br>
        Strength-Mod: {this.calcModifer(this.props.character.Strength)} <br></br>
        Dexterity-Mod: {this.calcModifer(this.props.character.Dexterity)} <br></br>
        Constitution-Mod: {this.calcModifer(this.props.character.Charisma)} <br></br>
        Intelligence-Mod: {this.calcModifer(this.props.character.Intelligence)} <br></br>
        Wisdom-Mod: {this.calcModifer(this.props.character.Wisdom)} <br></br>
        Charisma-Mod:{this.calcModifer(this.props.character.Charisma)} <br></br>
      </p>
    );
  }
}


export default ModifierCard;