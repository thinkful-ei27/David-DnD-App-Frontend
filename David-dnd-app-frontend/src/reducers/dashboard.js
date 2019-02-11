import {
  CHARACTER_ERROR,
  GET_CHARACTERS,
  MOVE_CHARACTERS_LEFT,
  MOVE_CHARACTERS_RIGHT,
  CHANGE_INDEX,
  EDIT_CHARACTER_START,
  EDIT_CHARACTER_END,
  HIDE_CHARACTERS
} from '../actions/dashboard';

const initialState = {
  characterArray:[],
  character:{},
  indexSelected: -1000,
  index: 0,
  isEditCharacter:false,
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
      index : (state.index - 1),
      indexSelected : (state.indexSelected + 1)
    })
  } else if (action.type === MOVE_CHARACTERS_RIGHT) {
    return Object.assign({}, state, {
      index : (state.index + 1),
      indexSelected : (state.indexSelected - 1)
    })
  } else if (action.type === CHANGE_INDEX) {
    return Object.assign({}, state, {
      indexSelected: action.index,
      character: action.character

  })
  } else if (action.type === EDIT_CHARACTER_START) {
    return Object.assign({}, state, {
      isEditCharacter : true
  })
  } else if (action.type === EDIT_CHARACTER_END) {
    return Object.assign({}, state, {
      isEditCharacter : false
  })  
 } else if (action.type === HIDE_CHARACTERS) {
    return Object.assign({}, state, {
      indexSelected : -1000
  });
  }
  return state;
}