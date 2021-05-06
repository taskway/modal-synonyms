export const actions = {
  addSynonym: (title: string) => ({ type: 'ADD_SYNONYM', payload: { title } } as const),
  updateSynonym: (id: number, title: string) => ({ type: 'UPDATE_SYNONYM', payload: { id, title } } as const),
  removeSynonym: (id: number) => ({ type: 'REMOVE_SYNONYM', payload: { id } } as const),
  setEditModeSynonym: (id: number) => ({ type: 'SET_EDIT_MODE_SYNONYM', payload: { id } } as const),
  clearSynonyms: () => ({ type: 'CLEAR_SYNONYMS' } as const)
}
