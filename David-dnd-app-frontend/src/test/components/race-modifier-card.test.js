import React from 'react';
import RaceModifierCard from '../../components/race-modifier-card'
import { shallow } from 'enzyme'
import './configure-tests'

describe('<RaceModifierCard /> Component', function() {
  it('Smoke test for RaceModifierCard', () => {
    shallow(<RaceModifierCard />)
  })
}) 
//state
//props
//eventListerns
//hasClass