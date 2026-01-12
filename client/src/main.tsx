import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AppContext } from './lib/AppContext.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SearchProvider } from './lib/useSearch.tsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <AppContext.Provider value={{games: []}}>
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <App />
      </SearchProvider>
    </QueryClientProvider>
  </AppContext.Provider>
)
