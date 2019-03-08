import React from 'react';
import App from '../../components/app'
import { shallow } from 'enzyme'
import './configure-tests'

describe('<App /> Component', function() {
  it('Smoke test for App', () => {
    shallow(<App />)
  })
}) 
//state
//props
//eventListerns
//hasClass