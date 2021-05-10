import { actions } from './actions'
import { SynonymsReducer } from './reducer'
import { InitialStateType } from './types'

const initialState: InitialStateType = [
  {
    id: 1,
    title: 'synonym 1',
    edit: false
  }
]

describe('Synonyms reducer', () => {
  test('should be added synonym', () => {
    const action = actions.addSynonym('synonym 2')
    const updatedState = SynonymsReducer(initialState, action)
    expect(updatedState).toContainEqual({
      id: 2,
      title: 'synonym 2',
      edit: false
    })
  })

  test('should be updated synonym', () => {
    const action = actions.updateSynonym(1, 'updated synonym')
    const updatedState = SynonymsReducer(initialState, action)
    expect(updatedState.find((synonym) => synonym.id === 1)).toEqual({
      id: 1,
      title: 'updated synonym',
      edit: false
    })
  })

  test('should be removed synonym', () => {
    const action = actions.removeSynonym(1)
    const updatedState = SynonymsReducer(initialState, action)
    expect(updatedState).toEqual([])
  })

  test('should be set edit mode', () => {
    const action = actions.setEditModeSynonym(1)
    const updatedState = SynonymsReducer(initialState, action)
    expect(updatedState).toContainEqual({
      id: 1,
      title: 'synonym 1',
      edit: true
    })
  })

  test('should be cleared synonyms', () => {
    const action = actions.clearSynonyms()
    const updatedState = SynonymsReducer(initialState, action)
    expect(updatedState).toEqual([])
  })
})
