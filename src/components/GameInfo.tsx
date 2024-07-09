import React, { useState } from 'react';
import { Rarity, Character } from '../types';
import { rarityProbabilities, characters, rarityColors, rarityDisplay } from '../data/characters';
import CharacterModal from './CharacterModal';

interface GameInfoProps {
  darkMode: boolean;
}

const GameInfo: React.FC<GameInfoProps> = ({ darkMode }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const getBackgroundColor = (rarity: Rarity) => {
    switch (rarity) {
      case Rarity.FiveStar:
        return 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600';
      case Rarity.Promotion:
        return 'bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500';
      case Rarity.Ultra:
        return 'bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700';
      default:
        return rarityColors[rarity];
    }
  };

  const textColor = darkMode ? 'text-white' : 'text-gray-800';

  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
      <button 
        className={`text-2xl font-bold mb-4 flex items-center justify-between w-full ${textColor}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        Game Info
        <span>{isExpanded ? '▼' : '►'}</span>
      </button>
      
      {isExpanded && (
        <>
          <div className="mb-4">
            <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Pull Rates</h3>
            <ul>
              {Object.entries(rarityProbabilities).map(([rarity, probability]) => (
                <li key={rarity} className={`${getBackgroundColor(rarity as Rarity)} p-2 rounded mb-1 text-white`}>
                  {rarity}: {(probability * 100).toFixed(2)}%
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Character Roster</h3>
            {Object.values(Rarity).map((rarity) => (
              <div key={rarity} className="mb-2">
                <h4 className={`font-semibold ${textColor}`}>{rarity}</h4>
                <div className="flex flex-wrap gap-2">
                  {characters.filter((char) => char.rarity === rarity).map((char) => (
                    <button
                      key={char.id}
                      className={`${getBackgroundColor(char.rarity)} p-2 rounded text-sm text-white`}
                      onClick={() => setSelectedCharacter(char)}
                    >
                      {char.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
          darkMode={darkMode}
        />
      )}
    </div>
  );
};

export default GameInfo;