import React from 'react';
import EditCharacterCard from '../../components/edit-character-card'
import { shallow } from 'enzyme'
import './configure-tests'

describe('<EditCharacterCard /> Component', function() {
  it('Smoke test for Character Creator', () => {
    shallow(<EditCharacterCard/>)
  })
}) 
//state
//props
//eventListerns
//hasClass