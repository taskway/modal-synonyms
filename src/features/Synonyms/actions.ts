import { SynonymType, ThunkType } from './types'

export const actions = {
  updateEditedSynonyms: (payload: SynonymType[]) => ({ type: 'UPDATE_EDITED_SYNONYMS', payload } as const),
  saveSynonyms: (payload: SynonymType[]) => ({ type: 'SAVE_SYNONYMS', payload } as const),
  setEditMode: (payload: boolean) => ({ type: 'SET_EDIT_MODE', payload } as const)
}

export const addSynonym = (title: string): ThunkType => async (dispatch, getState) => {
  const { editedSynonyms } = getState().synonyms
  const newSynonym = {
    id: editedSynonyms.length + 1,
    title,
    edit: false
  }
  dispatch(actions.updateEditedSynonyms([...editedSynonyms, newSynonym]))
}

export const updateSynonym = (id: number, title: string): ThunkType => async (dispatch, getState) => {
  const { editedSynonyms } = getState().synonyms
  const newSynonyms = editedSynonyms.map((synonym) => {
    if (synonym.id === id) {
      return {
        ...synonym,
        title,
        edit: false
      }
    }
    return synonym
  })
  await dispatch(checkEditMode(newSynonyms))
  dispatch(actions.updateEditedSynonyms(newSynonyms))
}

export const setEditMode = (id: number): ThunkType => async (dispatch, getState) => {
  const { editedSynonyms } = getState().synonyms
  const newSynonyms = editedSynonyms.map((synonym) => {
    if (synonym.id === id) {
      return {
        ...synonym,
        edit: !synonym.edit
      }
    }
    return synonym
  })
  await dispatch(checkEditMode(newSynonyms))
  dispatch(actions.updateEditedSynonyms(newSynonyms))
}

export const checkEditMode = (synonyms: SynonymType[]): ThunkType => async (dispatch, getState) => {
  const currentEditedSynonyms = synonyms.filter((synonym) => synonym.edit)
  if (currentEditedSynonyms.length > 0) {
    dispatch(actions.setEditMode(true))
  } else {
    dispatch(actions.setEditMode(false))
  }
}

export const removeSynonym = (id: number): ThunkType => async (dispatch, getState) => {
  const { editedSynonyms } = getState().synonyms
  const newSynonyms = editedSynonyms.filter((synonym) => synonym.id !== id)
  dispatch(actions.updateEditedSynonyms(newSynonyms))
}

export const saveSynonyms = (): ThunkType => async (dispatch, getState) => {
  const { editedSynonyms } = getState().synonyms
  dispatch(actions.saveSynonyms(editedSynonyms))
}

export const clearSynonyms = (): ThunkType => async (dispatch, getState) => {
  dispatch(actions.updateEditedSynonyms([]))
  dispatch(actions.saveSynonyms([]))
  dispatch(actions.setEditMode(false))
}
