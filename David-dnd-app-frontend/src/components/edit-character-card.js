import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Field, reduxForm } from 'redux-form'
import {editCharacterBackend} from '../actions/dashboard'
import '../styles/modifier-card.css'

const renderField = ({ input, label, type, meta: { touched, error } }) => {
  let inputElement = <input {...input} placeholder={label} type="number"/>;
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
    console.log(this.props.character.id)
    character.id = this.props.character.id;
    return this.props.dispatch(editCharacterBackend(character))
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
  character: state.dashboard.character,
  shouldShow: state.dashboard.isEditCharacter,
  initialValues: state.dashboard.character
});
const connectedForm = reduxForm({form : 'Edit-Character', enableReinitialize: true})(EditCharacterCard)
export default (connect(mapStateToProps)(connectedForm))