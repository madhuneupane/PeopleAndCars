import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import './App.css';
import Title from './components/layout/Title';
import Home from './pages/Home';



const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

function App() {
  
  return (
    <ApolloProvider client={client}>
   <div className='App'>
    <Title />
    <Home />
    
    </div>
    </ApolloProvider>
  );
}

export default App;
