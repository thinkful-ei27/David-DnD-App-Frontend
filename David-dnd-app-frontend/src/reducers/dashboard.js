import {
  CHARACTER_ERROR,
  GET_CHARACTERS,
  MOVE_CHARACTERS_LEFT,
  MOVE_CHARACTERS_RIGHT 
} from '../actions/dashboard';

const initialState = {
  characterArray:[],
  displayCharacters:[],
  index: 0,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === CHARACTER_ERROR) {
      return Object.assign({}, state, {
          error: action.error
      });
  } else if (action.type === GET_CHARACTERS) {
    return Object.assign({}, state, {
      characterArray : action.characters,
    })
  } else if (action.type === MOVE_CHARACTERS_LEFT) {
    return Object.assign({}, state, {
      index : (state.index - 1)
    })
  } else if (action.type === MOVE_CHARACTERS_RIGHT) {
    return Object.assign({}, state, {
      index : (state.index + 1)
    })
  }
  return state;
}