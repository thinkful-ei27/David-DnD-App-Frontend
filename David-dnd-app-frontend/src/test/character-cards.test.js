import React from 'react';
import CharacterCards from '../components/character-cards'
import { shallow } from 'enzyme'
import '../configure-tests'

describe('<CharacterCards /> Component', function() {
  it('Smoke test for Character Cards', () => {
    shallow(<CharacterCards/>)
  })

  it('Character Card Gets the select class when the Character Card is clicked', () => {
    const wrapper = shallow(<CharacterCards/>)
    expect(wrapper.hasClass)

  })
}) 

