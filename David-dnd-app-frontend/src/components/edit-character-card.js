import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Field, reduxForm } from 'redux-form'
import {editCharacterBackend} from '../actions/dashboard'
import '../styles/modifier-card.css'

const renderField = ({ input, label, type, meta: { touched, error } }) => { //because a normal input type number, won't allow us to set initial values in jsx
  let inputElement = <input {...input} placeholder={label} type="number"/>; //this allows the edit form's input values to be initially rendered with the values of the character
  return (
    <div>
      <label>{label}</label>
      <div>
        {inputElement}
        { touched && error && <span>{ error }</span>}
      </div>
    </div>
  );
}

class EditCharacterCard extends Component {
  onSubmit(character) { 
    console.log("character ID from state", this.props.character.id)
    character.id = this.props.character.id; //grabs the character id from the character in state, and adds it on to the character object
    return this.props.dispatch(editCharacterBackend(character)) //passes the new values as a put request to the backend to update the character object in the database
  }


  
  render() {
    if (this.props.shouldShow) {
      return (
        <div>
        <form className="modifier-card" onSubmit={this.props.handleSubmit(character => this.onSubmit(character))}>
          <label>Level</label>
          <Field name="level" component={renderField} type="number" />
          <label>Strength</label>
          <Field name="Strength" component={renderField} type="number" />
          <label>Dexterity</label>
          <Field name="Dexterity" component={renderField} type="number" />
          <label>Constitution</label>
          <Field name="Constitution" component={renderField} type="number" />
          <label>Intelligence</label>
          <Field name="Intelligence" component={renderField} type="number" />
          <label>Wisdom</label>
          <Field name="Wisdom" component={renderField} type="number" />
          <label>Charisma</label>
          <Field name="Charisma" component={renderField} type="number" />
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
  character: state.dashboard.character, //character in state, used here, simply for it's id which is required to be passed for the put request in dispatch
  shouldShow: state.dashboard.isEditCharacter, //a boolean to let the dashboard know if it should render the update character card (edit character button toggles it)
  initialValues: state.dashboard.character //grabs the intial values of the character to set them to the values of the edit character form
});
const connectedForm = reduxForm({form : 'Edit-Character', enableReinitialize: true})(EditCharacterCard)
export default (connect(mapStateToProps)(connectedForm))