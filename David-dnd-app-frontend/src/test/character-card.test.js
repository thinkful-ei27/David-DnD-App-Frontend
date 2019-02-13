import React from 'react';
import CharacterCard from '../components/character-card'
import { shallow } from 'enzyme'
import '../configure-tests'

describe('<CharacterCard /> Component', function() {
  it('Smoke test for Character Card', () => {
    shallow(<CharacterCard/>)
  })
}) 
//state
//props
//eventListerns
//hasClass