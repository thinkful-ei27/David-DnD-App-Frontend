import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Field, reduxForm } from 'redux-form'
import {editCharacterBackend} from '../actions/dashboard'
import '../styles/modifier-card.css'



class EditCharacterCard extends Component {
  onSubmit(character) {
    console.log(this.props.character.id)
    character.id = this.props.character.id;
    // return this.props.dispatch(editCharacterBackend(character))
  }
  
  render() {
    if (this.props.shouldShow) {
      return (
        <form className="modifier-card" onSubmit={this.props.handleSubmit(character => this.onSubmit(character))}>
          <Field name="Strength" component="input" type="number" />
          <Field name="Dexterity" component="input" type="number" />
          <Field name="Constitution" component="input" type="number" />
          <Field name="Intelligence" component="input" type="number" />
          <Field name="Wisdom" component="input" type="number" />
          <Field name="Charisma" component="input" type="number" />
          <input type="submit"/>
        </form>
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
export default reduxForm({form : 'Edit-Character'})(connect(mapStateToProps)(EditCharacterCard))