import React from 'react';
import CharacterSidebar from '../../components/character-sidebar'
import { shallow } from 'enzyme'
import './configure-tests'

describe('<CharacterSidebar /> Component', function() {
  it('Smoke test for Character Creator', () => {
    shallow(<CharacterSidebar/>)
  })
}) 
//state
//props
//eventListerns
//hasClass