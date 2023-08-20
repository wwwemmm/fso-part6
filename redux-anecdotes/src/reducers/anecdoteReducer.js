import { createSlice } from '@reduxjs/toolkit'

//const initialState = anecdotesAtStart.map(asObject)
const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: initialState,
  reducers: {
    createAnecdote(state, action) {
      console.log('anecdotes state now: ', state)
      console.log('action', action)
      //return [...state, action.payload]
      state.push(action.payload)
    },
    increadVote(state, action) {
      console.log('anecdotes state now: ', state)
      console.log('action', action)
      const id = action.payload
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = { 
        ...anecdoteToChange, 
        votes:anecdoteToChange.votes + 1
      }
      let updatedState =  state.map(note =>
        note.id !== id ? note : changedAnecdote
      )
      return updatedState.sort((a, b) => b.votes - a.votes)
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
  },
})

export const { createAnecdote, increadVote, appendAnecdote, setAnecdotes} = anecdoteSlice.actions
export default anecdoteSlice.reducer