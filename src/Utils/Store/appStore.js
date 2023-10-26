import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../Slice/userSlice'
import moviesReducer from '../Slice/movieSlice'

const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer
    }
})

export default appStore