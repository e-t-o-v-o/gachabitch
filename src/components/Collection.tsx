import React, { useState } from 'react';
import { Character, Rarity } from '../types';
import { rarityColors, rarityDisplay } from '../data/characters';
import CharacterModal from './CharacterModal';

interface CollectionProps {
  collection: Character[];
  pullHistory: Character[];
  darkMode: boolean;
}

const Collection: React.FC<CollectionProps> = ({ collection, pullHistory, darkMode }) => {
  const [sortBy, setSortBy] = useState<'rarest' | 'leastRare' | 'newest' | 'oldest'>('rarest');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [viewMode, setViewMode] = useState<'collection' | 'history'>('collection');

  const uniqueCollection = Array.from(new Set(collection.map(char => char.id)))
    .map(id => {
      const char = collection.find(c => c.id === id)!;
      const count = collection.filter(c => c.id === id).length;
      return { ...char, count };
    });

  const sortedCollection = [...uniqueCollection].sort((a, b) => {
    if (sortBy === 'rarest' || sortBy === 'leastRare') {
      const rarityOrder = Object.values(Rarity).reverse();
      const rarityDiff = rarityOrder.indexOf(b.rarity) - rarityOrder.indexOf(a.rarity);
      return sortBy === 'rarest' ? rarityDiff : -rarityDiff;
    } else {
      const aIndex = collection.findIndex(char => char.id === a.id);
      const bIndex = collection.findIndex(char => char.id === b.id);
      return sortBy === 'newest' ? aIndex - bIndex : bIndex - aIndex;
    }
  });

  const groupedPullHistory = pullHistory.reduce((acc, char) => {
    const date = new Date().toISOString().split('T')[0]; // Use actual pull date in real implementation
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(char);
    return acc;
  }, {} as Record<string, Character[]>);

  const textColor = darkMode ? 'text-white' : 'text-gray-800';
  const bgColor = darkMode ? 'bg-gray-800' : 'bg-white';

  return (
    <div className={`mt-8 ${bgColor} p-6 rounded-lg shadow-lg`}>
        
      <div className="flex justify-between items-center mb-4">
        <h2 className={`text-2xl font-bold ${textColor}`}>
          {viewMode === 'collection' ? `Collection (${uniqueCollection.length})` : 'Pull History'}
        </h2>
        <div className="space-x-4">
          <button
            className={`px-4 py-2 rounded transition-colors ${viewMode === 'collection' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}
            onClick={() => setViewMode('collection')}
          >
            Collection
          </button>
          <button
            className={`px-4 py-2 rounded transition-colors ${viewMode === 'history' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}
            onClick={() => setViewMode('history')}
          >
            History
          </button>
        </div>
      </div>
      
      {viewMode === 'collection' && (
        <>
          <div className="mb-4">
            <select
              className={`${bgColor} ${textColor} px-2 py-1 rounded border`}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            >
              <option value="rarest">Sort by Rarest</option>
              <option value="leastRare">Sort by Least Rare</option>
              <option value="newest">Sort by Newest</option>
              <option value="oldest">Sort by Oldest</option>
            </select>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 h-96 overflow-y-auto">
            {sortedCollection.map((character) => (
              <div
                key={character.id}
                className={`${rarityColors[character.rarity]} p-2 rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105`}
                onClick={() => setSelectedCharacter(character)}
              >
                <div className="w-full aspect-square overflow-hidden rounded-lg mb-2">
                  <img src={character.image} alt={character.name} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-bold text-sm mb-1 truncate text-white">{character.name}</h3>
                <p className="text-xs mb-1 text-white">{rarityDisplay[character.rarity]}</p>
                {character.count > 1 && (
                  <p className="text-xs text-white">x{character.count}</p>
                )}
              </div>
            ))}
          </div>
        </>
      )}
      
      {viewMode === 'history' && (
        <div className="h-96 overflow-y-auto">{Object.entries(groupedPullHistory).map(([date, chars]) => (
            <div key={date} className={`${bgColor} p-4 rounded-lg mb-4`}>
              <h3 className={`text-lg font-semibold mb-2 ${textColor}`}>{date}</h3>
              <div className="space-y-2">
                {chars.map((char, index) => (
                  <div
                    key={index}
                    className={`${rarityColors[char.rarity]} p-2 rounded-lg flex items-center space-x-4`}
                  >
                    <div className="w-12 h-12 overflow-hidden rounded">
                      <img src={char.image} alt={char.name} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{char.name}</p>
                      <p className="text-xs text-white">{rarityDisplay[char.rarity]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
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

export default Collection;