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
export const selectNewCharacter = () => ({
  type: SELECT_NEW_CHARACTER
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




export const editCharacterBackend = (character) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(editCharacterFrontend(character));
  console.log(character)
  return (
    fetch(`${API_BASE_URL}/characters/${character.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify(character)
    })
    .then( (res) => {
       dispatch(getCharactersFromDatabase())
       dispatch(editCharacterEnd())
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
    }).then(res => normalizeResponseErrors(res))
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
        .then(res => {
          dispatch(getCharactersFromDatabase());
        })
        .catch(err => {
          dispatch(CharacterError(err));
        });
};

