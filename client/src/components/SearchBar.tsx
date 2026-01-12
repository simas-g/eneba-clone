import { Search, X } from 'lucide-react';
import { useSearch } from '../hooks/useSearch';

const SearchBar = () => {
  const { searchInput, setSearchInput, handleSearch, handleClear } = useSearch();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='flex items-center min-w-0 w-48 sm:w-64 md:w-xl w-full'>
      <div className='flex h-10 sm:h-12 items-center border border-white gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 text-white w-full'>
        <label htmlFor='search-input' className='cursor-pointer flex-shrink-0'>
          <Search className='w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0' />
        </label>
        <input 
          id='search-input'
          value={searchInput} 
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text" 
          placeholder='Search' 
          name='search'
          autoComplete='off'
          className='flex-1 bg-transparent border-none outline-none text-white' 
        />
        {searchInput && (
          <X onClick={handleClear} className='w-5 h-5 cursor-pointer' />
        )}
      </div>
    </div>
  )
}

export default SearchBar
