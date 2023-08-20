import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {'message':'', 'showElement':false},
  reducers: {
    showNotification(state, action) {
      return {'message':action.payload, 'showElement':true}
    },
    removeNotification(state, action) {
        return {'message':action.payload, 'showElement':false}
      },
  },
})

export const { showNotification,removeNotification } = notificationSlice.actions
export default notificationSlice.reducer

export const setNotification = (message, time) => {
  return async dispatch => {
    dispatch(showNotification(message))
    setTimeout(function() {
      dispatch(removeNotification(``))
    }, time*1000)
  }
}