import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { stocksApi } from './services/stocksApi'
import { companiesApi } from './services/companiesApi'

export const store = configureStore({
    reducer: {
        [stocksApi.reducerPath]: stocksApi.reducer,
        [companiesApi.reducerPath]: companiesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(stocksApi.middleware, companiesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector