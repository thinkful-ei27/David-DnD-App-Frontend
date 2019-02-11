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
        Strength: {this.calcModifer(this.props.character.Strength)} <br></br>
        Dexterity: {this.calcModifer(this.props.character.Dexterity)} <br></br>
        Constitution: {this.calcModifer(this.props.character.Charisma)} <br></br>
        Intelligence: {this.calcModifer(this.props.character.Intelligence)} <br></br>
        Wisdom: {this.calcModifer(this.props.character.Wisdom)} <br></br>
        Charisma:{this.calcModifer(this.props.character.Charisma)} <br></br>
      </p>
    );
  }
}


export default ModifierCard;