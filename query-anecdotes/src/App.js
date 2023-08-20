import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation,useQueryClient } from 'react-query'
import { getAnecdotes, updateAnecdote } from './requests'
import { CounterContextProvider } from './CounterContext'
import AnecdoteList from './components/AnecdoteList'

const App = () => {
  const queryClient = useQueryClient()
  const updateAnecdoteMutation = useMutation(updateAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotes')
    },
  })
  const result = useQuery(
    'anecdotes', getAnecdotes, {
      retry: false
    })

  if (result.isError) {
    return <div>anecdote service not available due to problems in server</div>
  }

  if ( result.isLoading ) {
    return <div>loading data...</div>
  }

  const handleVote = (anecdote) => {
    console.log('vote')
    updateAnecdoteMutation.mutate({...anecdote, votes:anecdote.votes+1})
    
  }

  const anecdotes = result.data
  return (
    <CounterContextProvider>
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      <AnecdoteList anecdotes={anecdotes}/>
    </div>
    </CounterContextProvider>
  )
}

export default App
