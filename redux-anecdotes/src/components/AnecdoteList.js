import { useSelector, useDispatch } from 'react-redux'
import { increadVote } from '../reducers/anecdoteReducer'
import { setNotification,removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    const anecdotes = useSelector(state => 
        state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
    )
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        console.log('vote', anecdote.id)
        dispatch(increadVote(anecdote.id))
        dispatch(setNotification(`you voted '${anecdote.content}'`))
        setTimeout(function() {
          dispatch(removeNotification(``))
        }, 5000)
    }

    return(
        <div>
        {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
      </div>
    )}
export default AnecdoteList