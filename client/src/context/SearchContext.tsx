import { createContext } from 'react';
import type { ReactNode } from 'react';
import { useState } from 'react';

type SearchContextType = {
  searchInput: string;
  setSearchInput: (value: string) => void;
  searchQuery: string;
  handleSearch: () => void;
  handleClear: () => void;
};

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    setSearchQuery(searchInput);
  };

  const handleClear = () => {
    setSearchInput('');
    setSearchQuery('');
  };

  return (
    <SearchContext.Provider value={{ searchInput, setSearchInput, searchQuery, handleSearch, handleClear }}>
      {children}
    </SearchContext.Provider>
  );
};
