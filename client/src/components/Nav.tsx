import logo from '../assets/logo.png';
import {  Heart, ShoppingCart, User } from 'lucide-react';
import language from '../assets/lit.webp';
import SearchBar from './SearchBar';

const Nav = () => {
  return (
    <nav className='flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-4 px-2 sm:px-4 py-2 sm:py-3 w-full'>
      <div className='flex items-center gap-4 flex-1 min-w-0'>
        <div className='flex items-center flex-shrink-0'>
          <img className='max-w-24 sm:max-w-32 md:max-w-40 lg:max-w-48 h-auto' src={logo} alt="logo" />
        </div>
        <SearchBar />
        <div className='hidden sm:flex items-center gap-1.5 sm:gap-2 text-white text-xs sm:text-sm cursor-pointer hover:opacity-80 flex-shrink-0'>
          <img className='w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 overflow-hidden border border-black rounded-full' src={language} alt="language" />
          <p className='text-white whitespace-nowrap hidden md:inline'>English EU | EUR</p>
          <p className='text-white whitespace-nowrap md:hidden'>EN | EUR</p>
        </div>
      </div>

      <div className='flex items-center justify-end gap-2 sm:gap-3 md:gap-4 text-white flex-shrink-0'>
        <Heart className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-80' />
        <ShoppingCart className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-80' />
        <User className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-80' />
      </div>
    </nav>
  )
}

export default Nav;

