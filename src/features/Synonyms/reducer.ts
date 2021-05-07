import { ActionTypes, InitialStateType } from './types'

const initialState: InitialStateType = []

export const SynonymsReducer = (state = initialState, action: ActionTypes): typeof initialState => {
  switch (action.type) {
    case 'ADD_SYNONYM':
      return [...state, { id: state.length + 1, title: action.title, edit: false }]
    case 'UPDATE_SYNONYM': {
      const updatedSynonymIndex = state.findIndex((synonym) => synonym.id === action.payload.id)
      const updatedSynonyms = [...state]
      updatedSynonyms[updatedSynonymIndex] = {
        ...updatedSynonyms[updatedSynonymIndex],
        title: action.payload.title,
        edit: false
      }
      return updatedSynonyms
    }
    case 'REMOVE_SYNONYM':
      return state.filter((i) => i.id !== action.id)
    case 'SET_EDIT_MODE_SYNONYM': {
      const updatedSynonymIndex = state.findIndex((synonym) => synonym.id === action.id)
      const updatedSynonyms = [...state]
      updatedSynonyms[updatedSynonymIndex] = {
        ...updatedSynonyms[updatedSynonymIndex],
        edit: !updatedSynonyms[updatedSynonymIndex].edit
      }
      return updatedSynonyms
    }
    case 'CLEAR_SYNONYMS':
      return []
    default: return state
  }
}
