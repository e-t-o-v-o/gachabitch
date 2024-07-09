import React, { useState } from 'react';
import { Character, Rarity } from '../types';
import { characters, rarityProbabilities, rarityColors, rarityDisplay } from '../data/characters';
import PullAnimation from './PullAnimation';
import CharacterModal from './CharacterModal';
import CharacterImage from './CharacterImage';

interface PullSectionProps {
  credits: number;
  setCredits: React.Dispatch<React.SetStateAction<number>>;
  collection: Character[];
  setCollection: React.Dispatch<React.SetStateAction<Character[]>>;
  pullHistory: Character[];
  setPullHistory: React.Dispatch<React.SetStateAction<Character[]>>;
  achievements: string[];
  setAchievements: React.Dispatch<React.SetStateAction<string[]>>;
  darkMode: boolean;
  freeTickets: number;
  setFreeTickets: React.Dispatch<React.SetStateAction<number>>;
}

const PullSection: React.FC<PullSectionProps> = ({
  credits,
  setCredits,
  collection,
  setCollection,
  pullHistory,
  setPullHistory,
  achievements,
  setAchievements,
  darkMode,
  freeTickets,
  setFreeTickets,
}) => {
  const [pullResults, setPullResults] = useState<Character[]>([]);
  const [showAnimation, setShowAnimation] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const pullCharacter = (): Character => {
    const rand = Math.random();
    let cumulativeProbability = 0;
    let selectedRarity: Rarity = Rarity.OneStar;

    for (const [rarity, probability] of Object.entries(rarityProbabilities)) {
      cumulativeProbability += probability;
      if (rand <= cumulativeProbability) {
        selectedRarity = rarity as Rarity;
        break;
      }
    }

    const charactersOfRarity = characters.filter((char) => char.rarity === selectedRarity);
    return charactersOfRarity[Math.floor(Math.random() * charactersOfRarity.length)];
  };

  const performPull = (times: number, useFreeTicket: boolean = false) => {
    if (!useFreeTicket && credits < times * 100) {
      alert("Not enough credits!");
      return;
    }

    if (useFreeTicket && freeTickets < 1) {
      alert("No free tickets available!");
      return;
    }

    setShowAnimation(true);
    setTimeout(() => {
      const pulledCharacters: Character[] = [];

      for (let i = 0; i < times; i++) {
        const character = pullCharacter();
        pulledCharacters.push(character);
      }

      if (!useFreeTicket) {
        setCredits((prev) => prev - times * 100);
      } else {
        setFreeTickets((prev) => prev - 1);
      }

      setPullHistory((prev) => [...pulledCharacters, ...prev]);
      setPullResults(pulledCharacters);
      
      const newCharacters = pulledCharacters.filter(
        (char) => !collection.some((c) => c.id === char.id)
      );
      setCollection((prev) => [...newCharacters, ...prev]);

      // Check for achievements
      if (!achievements.includes('First Pull') && pullHistory.length === 0) {
        setAchievements((prev) => [...prev, 'First Pull']);
      }
      if (collection.length + newCharacters.length >= 10 && !achievements.includes('Novice Collector')) {
        setAchievements((prev) => [...prev, 'Novice Collector']);
      }
      if (pulledCharacters.some((char) => char.rarity === Rarity.FiveStar) && !achievements.includes('Lucky Star')) {
        setAchievements((prev) => [...prev, 'Lucky Star']);
      }
      if (pulledCharacters.some((char) => char.rarity === Rarity.Ultra) && !achievements.includes('Ultra Lucky')) {
        setAchievements((prev) => [...prev, 'Ultra Lucky']);
      }
      if (pullHistory.length + times >= 100 && !achievements.includes('Dedicated Puller')) {
        setAchievements((prev) => [...prev, 'Dedicated Puller']);
      }

      // Check for Five Star Collector achievement
      const totalFiveStars = pullHistory.concat(pulledCharacters).filter(char => char.rarity === Rarity.FiveStar).length;
      if (totalFiveStars >= 5 && !achievements.includes('Five Star Collector')) {
        setAchievements((prev) => [...prev, 'Five Star Collector']);
      }

      setShowAnimation(false);
    }, 2000);
  };

  const textColor = darkMode ? 'text-white' : 'text-gray-800';
  const bgColor = darkMode ? 'bg-gray-800' : 'bg-white';

  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-lg text-center`}>
      <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>Pull Characters</h2>
      
      {pullResults.length > 0 && (
        <div className="mb-4">
          {pullResults.length === 1 ? (
            <div className="flex justify-center items-center">
              <div className={`${rarityColors[pullResults[0].rarity]} p-4 rounded-lg shadow-lg w-64`}>
                <CharacterImage
                  src={pullResults[0].image}
                  alt={pullResults[0].name}
                  className="w-full h-64 rounded-lg mb-2"
                />
                <h3 className="font-bold text-lg mb-1 text-white">{pullResults[0].name}</h3>
                <p className="text-sm mb-1 text-white">{rarityDisplay[pullResults[0].rarity]}</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {pullResults.map((character, index) => (
                <div
                  key={index}
                  className={`${rarityColors[character.rarity]} p-2 rounded-lg shadow-lg cursor-pointer`}
                  onClick={() => setSelectedCharacter(character)}
                >
                  <CharacterImage
                    src={character.image}
                    alt={character.name}
                    className="w-full h-40 rounded-lg mb-2"
                  />
                  <h3 className="font-bold text-sm mb-1 text-white">{character.name}</h3>
                  <p className="text-xs mb-1 text-white">{rarityDisplay[character.rarity]}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white transition-colors"
          onClick={() => performPull(1)}
          disabled={showAnimation}
        >
          Single Pull (100 💰)
        </button>
        <button
          className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded text-white transition-colors"
          onClick={() => performPull(10)}
          disabled={showAnimation}
        >
          10x Pull (1000 💰)
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white transition-colors"
          onClick={() => performPull(1, true)}
          disabled={showAnimation || freeTickets < 1}
        >
          Free Ticket Pull ({freeTickets} left)
        </button>
      </div>
      
      {showAnimation && <PullAnimation />}
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

export default PullSection;