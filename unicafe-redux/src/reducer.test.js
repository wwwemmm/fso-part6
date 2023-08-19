//import deepFreeze from 'deep-freeze'
const deepFreeze = require('deep-freeze')
//import counterReducer from './reducer'
const counterReducer = require('./reducer')

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }
    
    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })

  test('add good,ok and bad for several times', () => {
    const actionGood = {
      type: 'GOOD'
    }
    const actionOk = {
      type: 'OK'
    }
    const actionBad = {
      type: 'BAD'
    }
    const state = initialState

    deepFreeze(state)
    let newState = state
    for(let i = 0; i < 5; i++){
      newState = counterReducer(newState, actionGood)
    }
    for(let i = 0; i < 4; i++){
      newState = counterReducer(newState, actionOk)
    }
    for(let i = 0; i < 2; i++){
      newState = counterReducer(newState, actionBad)
    }
    expect(newState).toEqual({
      good: 5,
      ok: 4,
      bad: 2
    })
  })
})