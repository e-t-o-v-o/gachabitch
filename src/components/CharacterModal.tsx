import React from 'react';
import { Character, Rarity } from '../types';
import { rarityColors, rarityDisplay } from '../data/characters';

interface CharacterModalProps {
  character: Character;
  onClose: () => void;
  darkMode: boolean;
}

const CharacterModal: React.FC<CharacterModalProps> = ({ character, onClose, darkMode }) => {
  const getBackgroundColor = (rarity: Rarity) => {
    switch (rarity) {
      case Rarity.FiveStar:
        return 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600';
      case Rarity.Promotion:
        return 'bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500';
      case Rarity.Ultra:
        return 'bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700';
      case Rarity.FourStar:
        return 'bg-gradient-to-r from-purple-700 via-purple-800 to-purple-700';
      case Rarity.ThreeStar:
        return 'bg-gradient-to-r from-blue-700 via-blue-800 to-blue-700';
      case Rarity.TwoStar:
        return 'bg-gradient-to-r from-green-700 via-green-800 to-green-700';
      case Rarity.OneStar:
        return 'bg-gradient-to-r from-gray-400 via-gray-450 to-gray-400';
      default:
        return rarityColors[rarity];
    }
  };

  const textColor = darkMode ? 'text-white' : 'text-white';
  const bgColor = darkMode ? 'text-white' : 'bg-white';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`${bgColor} rounded-lg p-6 max-w-md w-full ${getBackgroundColor(character.rarity)}`}>
        <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
          <img src={character.image} alt={character.name} className="w-full h-full object-contain" />
        </div>
        <h2 className={`text-2xl font-bold mb-2 ${textColor}`}>{character.name}</h2>
        <p className={`text-lg mb-2 ${textColor}`}>{rarityDisplay[character.rarity]}</p>
        <p className={`mb-4 ${textColor}`}>{character.description}</p>
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CharacterModal;