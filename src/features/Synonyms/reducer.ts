import { ActionTypes, InitialStateType } from './types'

const initialState: InitialStateType = []

export const SynonymsReducer = (state = initialState, action: ActionTypes): typeof initialState => {
  switch (action.type) {
    case 'ADD_SYNONYM':
      return [...state, { id: state.length + 1, title: action.title, edit: false }]
    case 'UPDATE_SYNONYM': {
      const updateSynonymIndex = state.findIndex((synonym) => synonym.id === action.payload.id)
      const updateSynonyms = [...state]
      updateSynonyms[updateSynonymIndex] = {
        ...updateSynonyms[updateSynonymIndex],
        title: action.payload.title,
        edit: false
      }
      return updateSynonyms
    }
    case 'REMOVE_SYNONYM':
      return state.filter((i) => i.id !== action.id)
    case 'SET_EDIT_MODE_SYNONYM': {
      const updateSynonymIndex = state.findIndex((synonym) => synonym.id === action.id)
      const updateSynonyms = [...state]
      updateSynonyms[updateSynonymIndex] = {
        ...updateSynonyms[updateSynonymIndex],
        edit: !updateSynonyms[updateSynonymIndex].edit
      }
      return updateSynonyms
    }
    case 'CLEAR_SYNONYMS':
      return []
    default: return state
  }
}
