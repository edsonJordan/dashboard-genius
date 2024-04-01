import React from 'react';
import SearchForm from '../molecules/SearchForm';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg">My Dashboard</h1>
      <SearchForm />
    </header>
  );
};

export default Header;