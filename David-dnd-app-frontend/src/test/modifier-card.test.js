import React from 'react';
import ModifierCard from '../components/modifier-card'
import { shallow } from 'enzyme'
import '../configure-tests'

describe('<ModifierCard /> Component', function() {
  it('Smoke test for ModifierCard', () => {
    shallow(<ModifierCard />)
  })
}) 
//state
//props
//eventListerns
//hasClass