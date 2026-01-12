import './App.css'
import Nav from './components/Nav';
import Results from './components/Results';
import { useQuery } from '@tanstack/react-query';
import { getGames, searchGames } from './api/games';
import { useSearch } from './hooks/useSearch';

const App = () => {
  const { searchQuery } = useSearch();

  const { data: games } = useQuery({
    queryKey: ['games', searchQuery],
    queryFn: () => searchQuery ? searchGames(searchQuery) : getGames(),
  });
  
  return (
    <>
      <Nav />
      <Results results={games || []} />
    </>
  )
}

export default App
