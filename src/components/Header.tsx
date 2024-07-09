import React, { useState } from 'react';
import AddCreditsModal from './AddCreditsModal';

interface HeaderProps {
  credits: number;
  collectionSize: number;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  onAddCredits: (amount: number) => void;
}

const Header: React.FC<HeaderProps> = ({ credits, collectionSize, darkMode, setDarkMode, onAddCredits }) => {
  const [showAddCreditsModal, setShowAddCreditsModal] = useState(false);

  return (
    <header className={`py-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">GatchaBitch</h1>
        <div className="flex space-x-4 items-center">
          <span>💰 {credits}</span>
          <button 
            className="bg-green-500 hover:bg-green-600 px-2 py-1 rounded text-white text-sm"
            onClick={() => setShowAddCreditsModal(true)}
          >
            +
          </button>
          <span className="hidden sm:inline">Collection: {collectionSize}/51 <span className="text-xs">({((collectionSize / 51) * 100).toFixed(1)}%)</span></span>
          <button 
            className={`p-2 rounded-full ${darkMode ? 'bg-yellow-400 text-gray-800' : 'bg-gray-800 text-white'}`}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
      {showAddCreditsModal && (
        <AddCreditsModal 
          onClose={() => setShowAddCreditsModal(false)} 
          onAddCredits={onAddCredits}
        />
      )}
    </header>
  );
};

export default Header;