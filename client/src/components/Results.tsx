import type { Game } from '../types/game';
import Card from './Card';
import { Loader2 } from 'lucide-react';

const Results = ({results, isLoading}: {results: Game[], isLoading: boolean}) => {
  if (isLoading) {
    return (
      <section className='py-10 px-2 flex-col sm:px-4 flex items-center justify-center gap-4'>
        <div className='flex items-center justify-center gap-3'>
          <Loader2 className='text-white animate-spin' size={32} />
          <p className='text-white text-lg'>Loading games...</p>
        </div>
      </section>
    )
  }

  return (
    <section className='py-10 px-2 flex-col sm:px-4 flex items-center justify-center gap-4'>
      <div className='flex items-start justify-start w-full'>
        <p className='text-white'>Results found: {results?.length}</p>
      </div>
      <div className='place-items-center sm:place-items-stretch grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full'>
        {results?.map((game) => (
          <Card key={game.id} game={game} />
        ))}
      </div>
    </section>  
  )
}

export default Results;
