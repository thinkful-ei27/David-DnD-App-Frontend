import React from 'react';
import RegistrationForm from '../../components/registration-form'
import { shallow } from 'enzyme'
import './configure-tests'

describe('<RegistrationForm /> Component', function() {
  it('Smoke test for RegistrationForm', () => {
    shallow(<RegistrationForm />)
  })
}) 
//state
//props
//eventListerns
//hasClass