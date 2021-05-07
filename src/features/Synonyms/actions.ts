export const actions = {
  addSynonym: (title: string) => ({ type: 'ADD_SYNONYM', title } as const),
  updateSynonym: (id: number, title: string) => ({ type: 'UPDATE_SYNONYM', payload: { id, title } } as const),
  removeSynonym: (id: number) => ({ type: 'REMOVE_SYNONYM', id } as const),
  setEditModeSynonym: (id: number) => ({ type: 'SET_EDIT_MODE_SYNONYM', id } as const),
  clearSynonyms: () => ({ type: 'CLEAR_SYNONYMS' } as const)
}
