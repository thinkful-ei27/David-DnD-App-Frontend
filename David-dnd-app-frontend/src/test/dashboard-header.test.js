import React from 'react';
import DashboardHeader from '../components/dashboard-header'
import { shallow } from 'enzyme'
import '../configure-tests'

describe('<DashboardHeader /> Component', function() {
  it('Smoke test for Dashboard Header', () => {
    shallow(<DashboardHeader/>)
  })
}) 
//state
//props
//eventListerns
//hasClass