import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'

//state = {anecdotes: initialAnidotes, filter:''}
//dispatch(state,action) => will be implemeted in two reducers, with the state para is different,
// but action para is the same

const store = configureStore({
  reducer :{
    anecdotes: anecdoteReducer,
    filter: filterReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)