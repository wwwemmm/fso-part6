import { useSelector } from 'react-redux'

const Notification = () => {

  const notification = useSelector(state => state.notification.message)
  const showElement = useSelector(state => state.notification.showElement)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: showElement ? 'block' : 'none'}

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification