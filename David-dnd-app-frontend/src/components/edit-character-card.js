import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Field, reduxForm } from 'redux-form'
import {editCharacterBackend} from '../actions/dashboard'
import '../styles/modifier-card.css'



class EditCharacterCard extends Component {
  onSubmit(character) {
    console.log(this.props.character.id)
    character.id = this.props.character.id;
    return this.props.dispatch(editCharacterBackend(character))
  }


  
  render() {
    if (this.props.shouldShow) {
      return (
        <div>
        <form className="modifier-card" onSubmit={this.props.handleSubmit(character => this.onSubmit(character))}>
          <label>Strength</label>
          <Field name="Strength" component="input" type="number" />
          <label>Dexterity</label>
          <Field name="Dexterity" component="input" type="number" />
          <label>Constitution</label>
          <Field name="Constitution" component="input" type="number" />
          <label>Intelligence</label>
          <Field name="Intelligence" component="input" type="number" />
          <label>Wisdom</label>
          <Field name="Wisdom" component="input" type="number" />
          <label>Charisma</label>
          <Field name="Charisma" component="input" type="number" />
          <input type="submit"/> 
        </form>
        </div>

      );
    } else {
      return <div></div>
    }
  }
}

const mapStateToProps = state => ({
  character: state.dashboard.character,
  shouldShow: state.dashboard.isEditCharacter
});
const connectedForm = reduxForm({form : 'Edit-Character'})(EditCharacterCard)
export default (connect(mapStateToProps)(connectedForm))