import { ActionTypes, InitialStateType } from './types'
import {
  updateSynonym, findEditedSynonym, formatSynonym, setEditModeSynonym
} from './utils'

const initialState: InitialStateType = {
  synonyms: [],
  editMode: false
}

export const SynonymsReducer = (state = initialState, action: ActionTypes): typeof initialState => {
  switch (action.type) {
    case 'ADD_SYNONYM':
      return {
        ...state,
        synonyms: formatSynonym(action.payload.title, state.synonyms)
      }
    case 'UPDATE_SYNONYM': {
      const synonyms = updateSynonym(action.payload.id, action.payload.title, state.synonyms)
      return {
        ...state,
        synonyms,
        editMode: findEditedSynonym(synonyms)
      }
    }
    case 'REMOVE_SYNONYM':
      return {
        ...state,
        synonyms: state.synonyms.filter((i) => i.id !== action.payload.id)
      }
    case 'SET_EDIT_MODE_SYNONYM': {
      const synonyms = setEditModeSynonym(action.payload.id, state.synonyms)
      return {
        ...state,
        synonyms,
        editMode: findEditedSynonym(synonyms)
      }
    }
    case 'CLEAR_SYNONYMS':
      return {
        ...state,
        synonyms: []
      }
    default: return state
  }
}
