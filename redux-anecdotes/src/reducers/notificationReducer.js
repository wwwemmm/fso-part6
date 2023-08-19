import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {'message':'', 'showElement':false},
  reducers: {
    setNotification(state, action) {
      console.log('notification state now: ', state)
      console.log('action', action)
      return {'message':action.payload, 'showElement':true}
    },
    removeNotification(state, action) {
        console.log('notification state now: ', state)
        console.log('action', action)
        return {'message':action.payload, 'showElement':false}
      },
  },
})

export const { setNotification,removeNotification } = notificationSlice.actions
export default notificationSlice.reducer