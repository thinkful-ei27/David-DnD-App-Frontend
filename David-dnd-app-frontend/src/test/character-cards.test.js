import React from 'react';
import CharacterCards from '../components/character-cards'
import { shallow } from 'enzyme'
import '../configure-tests'

describe('<CharacterCards /> Component', function() {
  it('Smoke test for Character Cards', () => {
    shallow(<CharacterCards/>)
  })
}) 
//state
//props
//eventListerns
//hasClass