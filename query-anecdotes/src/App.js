import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery } from 'react-query'
import { getAnecdotes } from './requests'
import { CounterContextProvider } from './CounterContext'
import AnecdoteList from './components/AnecdoteList'

const App = () => {
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
