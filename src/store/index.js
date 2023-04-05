import { ENV } from '@/config'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth'

const reducers = combineReducers({
    auth: authReducer
})

export const store = configureStore({
    reducer: reducers,
    devTools: ENV === 'development'
})