import { useQuery, useMutation,useQueryClient } from 'react-query'
import { getAnecdotes, updateAnecdote } from '../requests'
import { useContext } from 'react'
import CounterContext from '../CounterContext'
const AnecdoteList = ({anecdotes}) => {

  const queryClient = useQueryClient()
  const updateAnecdoteMutation = useMutation(updateAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotes')
    },
  })
  const [counter, dispatch] = useContext(CounterContext)
  
  const handleVote = (anecdote) => {
    console.log('vote')
    updateAnecdoteMutation.mutate({...anecdote, votes:anecdote.votes+1})
    dispatch({type:'VOTE', message:'TEST'})
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
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )}
export default AnecdoteList