import { useSelector, useDispatch } from 'react-redux'
import { increadVote } from '../reducers/anecdoteReducer'

const AnecdoteList = (props) => {
    const anecdotes = useSelector(state => 
        state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
    )
    const dispatch = useDispatch()

    const vote = (id) => {
        console.log('vote', id)
        dispatch(increadVote(id))
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
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      </div>
    )}
export default AnecdoteList