
import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../reducers/datafetch'
import limitReducer from '../reducers/limit'

const store = configureStore({
    reducer:{
        dataReducer:dataReducer,
        limitReducer:limitReducer

    }
})
export default store