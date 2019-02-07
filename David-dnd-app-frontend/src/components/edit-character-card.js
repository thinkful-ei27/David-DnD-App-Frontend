import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Field, reduxForm } from 'redux-form'
import {editCharacterBackend} from '../actions/dashboard'
import '../styles/modifier-card.css'



class EditCharacterCard extends Component {
  onSubmit(character) {
    return this.props.dispatch(editCharacterBackend(character))
  }
  
  render() {
    if (this.props.shouldShow) {
      return (
        <form className="modifier-card" onSubmit={this.props.handleSubmit(character => this.onSubmit(character))}>
          <Field name="strength-input" type="number" />
          <Field name="dexterity-input" type="number" />
          <Field name="constitution-input" type="number" />
          <Field name="intelligence-input" type="number" />
          <Field name="wisdom-input" type="number" />
          <Field name="charisma-input" type="number" />
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

export default connect(mapStateToProps)(EditCharacterCard);