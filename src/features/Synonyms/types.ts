import { ThunkAction } from 'redux-thunk'
import { AppStateType, InferActionsTypes } from '../../common/types'
import { actions } from './actions'

export type ActionTypes = InferActionsTypes<typeof actions>
export type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export type InitialStateType = SynonymType[]

export type SynonymType = {
    id: number,
    title: string,
    edit: boolean
}
