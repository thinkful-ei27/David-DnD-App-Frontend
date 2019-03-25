import React from 'react';
import LoginForm from '../../components/login-form'
import { shallow } from 'enzyme'
import './configure-tests'

describe('<LoginForm /> Component', function() {
  it('Smoke test for LoginForm', () => {
    shallow(<LoginForm />)
  })
}) 
//state
//props
//eventListerns
//hasClass