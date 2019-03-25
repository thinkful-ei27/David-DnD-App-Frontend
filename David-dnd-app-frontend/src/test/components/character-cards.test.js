import React from 'react';
import CharacterCards from '../../components/character-cards'
import { shallow } from 'enzyme'
import './configure-tests'
import {
  CHARACTER_ERROR,
  GET_CHARACTERS,
  MOVE_CHARACTERS_LEFT,
  MOVE_CHARACTERS_RIGHT,
  CHANGE_INDEX,
  EDIT_CHARACTER_START,
  EDIT_CHARACTER_END,
  HIDE_CHARACTERS,
  SELECT_NEW_CHARACTER,
  UPDATE_CHARACTER,
  TOGGLE_MODAL,
  UPDATE_INDEX
} from '../../actions/dashboard';

describe('<CharacterCards /> Component', function() {
  it('Smoke test for Character Cards', () => {
    shallow(<CharacterCards/>)
  })

  it('Character Card Gets the select class when the Character Card is clicked', () => {
    const wrapper = shallow(<CharacterCards/>)
    expect(wrapper.hasClass)
  })
}) 

