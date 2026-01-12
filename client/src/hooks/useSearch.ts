import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

type SearchContextType = {
  searchInput: string;
  setSearchInput: (value: string) => void;
  searchQuery: string;
  handleSearch: () => void;
  handleClear: () => void;
};

export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
