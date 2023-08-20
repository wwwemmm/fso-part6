import CounterContext from '../CounterContext'
import { useContext } from 'react'


const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  const [counter, dispatch] = useContext(CounterContext)
  const hasMessage = counter !== ''
  return(
    <div>
      {hasMessage && 
      <div style={style}>
        {counter}
      </div>
      }
    </div>
  )
}

export default Notification
