import React from 'react';
import CharacterCreator from '../components/character-creator'
import { shallow } from 'enzyme'
import '../configure-tests'

describe('<CharacterCreator /> Component', function() {
  it('Smoke test for Character Creator', () => {
    shallow(<CharacterCreator/>)
  })
}) 
//state
//props
//eventListerns
//hasClass