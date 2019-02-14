import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const CHARACTER_ERROR = 'CHARACTER_ERROR';
export const CharacterError = error => ({
    type: CHARACTER_ERROR,
    error
});

export const GET_CHARACTERS = 'GET_CHARACTERS'
export const getCharacters = (characters) => ({
  type: GET_CHARACTERS,
  characters
})

export const SELECT_NEW_CHARACTER = 'SELECT_NEW_CHARACTER'
export const selectNewCharacter = (character) => ({
  type: SELECT_NEW_CHARACTER,
  character,
})

export const MOVE_CHARACTERS_LEFT = 'MOVE_CHARACTERS_LEFT'
export const moveCharactersLeft = () => ({
    type: MOVE_CHARACTERS_LEFT,
})

export const MOVE_CHARACTERS_RIGHT = 'MOVE_CHARACTERS_RIGHT'
export const moveCharactersRight = () => ({
    type: MOVE_CHARACTERS_RIGHT,
})

export const HIDE_CHARACTERS = 'HIDE_CHARACTERS'
export const hideCharacters = () => ({
  type: HIDE_CHARACTERS
})

export const CHANGE_INDEX = 'CHANGE_INDEX'
export const changeIndex = (index, character) => ({
  type: CHANGE_INDEX,
  index,
  character
})

export const EDIT_CHARACTER_START = 'EDIT_CHARACTER_START';
export const editCharacterFrontend = () => ({
  type: EDIT_CHARACTER_START,
});



export const EDIT_CHARACTER_END = 'EDIT_CHARACTER_END';
export const editCharacterEnd = () => ({
  type: EDIT_CHARACTER_END,
});

export const DELETE_CHARACTER_INDEX = 'DELETE_CHARACTER_INDEX';
export const deleteCharacterIndex = () => ({
  type: DELETE_CHARACTER_INDEX
})

export const UPDATE_CHARACTER = 'UPDATE_CHARACTER';
export const updateCharacter = (character) => ({
  type: UPDATE_CHARACTER,
  character
})

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const showModal = () => ({
  type: TOGGLE_MODAL
})

export const UPDATE_INDEX ='UPDATE_INDEX';
export const updateIndex = () => ({
  type: UPDATE_INDEX
})


export const editCharacterBackend = (character) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(updateCharacter(character))
  dispatch(editCharacterFrontend(character));
  dispatch(editCharacterEnd())
  return (
    fetch(`${API_BASE_URL}/characters/${character.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify(character)
    })
    .then( (res) => res.json())
    .then( (res) => {
      dispatch(getCharactersFromDatabase())
    })
  )
}

export const deleteCharacter  = (id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return (
    fetch(`${API_BASE_URL}/characters/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      }
    })
    .then( (res) => {
      dispatch(getCharactersFromDatabase())
    })
    .then( (res) => {
      dispatch(updateIndex())
    })
  )
}




export const getCharactersFromDatabase = (authToken) => (dispatch, getState) => {
  if (!authToken) {
    authToken = getState().auth.authToken;
  }
  return fetch(`${API_BASE_URL}/characters`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    },
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then((data) => dispatch(getCharacters(data)))
  .catch(err => {
    dispatch(CharacterError(err));
  });
}

export const createCharacter = (characterObject) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  console.log("CharacterObject in post action: ",characterObject)
  return fetch(`${API_BASE_URL}/characters`, {
    method: 'POST',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(characterObject)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(res => {
      console.log("Response is: ", res)
      dispatch(getCharactersFromDatabase());
      dispatch(selectNewCharacter(res));
    })
    .catch(err => {
      dispatch(CharacterError(err));
    });
};

