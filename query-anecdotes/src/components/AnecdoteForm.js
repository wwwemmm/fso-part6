import { useMutation, useQueryClient } from 'react-query'
import { createAnecdote } from '../requests'
import { useContext } from 'react'
import CounterContext from '../CounterContext'

const AnecdoteForm = () => {
  const [counter, dispatch] = useContext(CounterContext)

  const handleAddAnecdoteError = ()=>{
    dispatch({type:'ERROR', message:`too short anecdote, must have length 5 or more`})
    setTimeout(function() {
      dispatch({type:'RESET', message:``})
    }, 5000)
  }
  
  const queryClient = useQueryClient()
  
  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotes')
    },
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log('new anecdote')
    newAnecdoteMutation.mutate({content, votes:0},{
      onError:handleAddAnecdoteError
    })
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
