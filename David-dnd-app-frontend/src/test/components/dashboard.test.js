import React from 'react';
import Dashboard from '../../components/dashboard'
import { shallow } from 'enzyme'
import './configure-tests'

describe('<Dashboard /> Component', function() {
  it('Smoke test for Dashboard', () => {
    shallow(<Dashboard/>)
  })
}) 
//state
//props
//eventListerns
//hasClass