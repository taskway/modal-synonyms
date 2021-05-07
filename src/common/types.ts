import { rootReducer } from '../store/store'

type RootReducerType = typeof rootReducer
type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>
export type AppStateType = ReturnType<RootReducerType>
export type RootState = ReturnType<typeof rootReducer>
