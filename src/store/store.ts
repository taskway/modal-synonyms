import {
  applyMiddleware, combineReducers, compose, createStore
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { appReducer } from '../common/reducer'
import { ModalReducer } from '../features/Modal/reducer'
import { SynonymsReducer } from '../features/Synonyms/reducer'

export const rootReducer = combineReducers({
  app: appReducer,
  modal: ModalReducer,
  synonyms: SynonymsReducer
})

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
