import { ActionTypes, InitialStateType } from './types'

const initialState: InitialStateType = {
  isOpen: false
}

export const ModalReducer = (state = initialState, action: ActionTypes): typeof initialState => {
  switch (action.type) {
    case 'IS_OPEN':
      return {
        ...state,
        isOpen: action.payload
      }
    default: return state
  }
}
