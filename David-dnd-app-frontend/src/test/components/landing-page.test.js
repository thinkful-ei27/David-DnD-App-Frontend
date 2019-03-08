import React from 'react';
import LandingPage from '../../components/landing-page'
import { shallow } from 'enzyme'
import './configure-tests'

describe('<LandingPage /> Component', function() {
  it('Smoke test for LandingPage', () => {
    shallow(<LandingPage />)
  })
}) 
//state
//props
//eventListerns
//hasClass