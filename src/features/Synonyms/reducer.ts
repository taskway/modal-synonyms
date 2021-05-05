import { ActionTypes, InitialStateType } from './types'

const initialState: InitialStateType = {
  editedSynonyms: [],
  savedSynonyms: [],
  editMode: false
}

export const SynonymsReducer = (state = initialState, action: ActionTypes): typeof initialState => {
  switch (action.type) {
    case 'SET_EDIT_MODE':
      return {
        ...state,
        editMode: action.payload
      }
    case 'UPDATE_EDITED_SYNONYMS':
      return {
        ...state,
        editedSynonyms: action.payload
      }
    case 'SAVE_SYNONYMS':
      return {
        ...state,
        savedSynonyms: action.payload
      }
    default: return state
  }
}
