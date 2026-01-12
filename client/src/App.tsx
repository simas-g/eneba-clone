import './App.css'
import Nav from './components/Nav';
import Results from './components/Results';
import { useQuery } from '@tanstack/react-query';
import { getGames, searchGames } from './lib/api';
import { useSearch } from './lib/useSearch.tsx';

function App() {
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