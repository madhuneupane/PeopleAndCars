import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Title from './components/layout/Title';
import Home from './pages/Home';
import ShowPage from './pages/ShowPage';


const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/person/:personId',
		element: <ShowPage />,
	},
]);


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

function App() {
  
  return (
    <ApolloProvider client={client}>
   <div className='App'>
    <Title />
    <RouterProvider router={router} />
    
    </div>
    </ApolloProvider>
  );
}

export default App;
