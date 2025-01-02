import { configureStore } from '@reduxjs/toolkit'
import displayReducer from '../state/displaySlice'
export default configureStore({
    reducer: {
        displays: displayReducer,
    },
})