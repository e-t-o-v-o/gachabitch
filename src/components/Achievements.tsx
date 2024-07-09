import React, { useState } from 'react';
import { Character } from '../types';

interface AchievementsProps {
  achievements: string[];
  claimedAchievements: string[];
  onClaimReward: (achievement: string) => void;
  darkMode: boolean;
  onRedeemCouchSurferEtovo: () => void;
  collection: Character[];
}

const Achievements: React.FC<AchievementsProps> = ({
  achievements,
  claimedAchievements,
  onClaimReward,
  darkMode,
  onRedeemCouchSurferEtovo,
  collection
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const allAchievements = [
    { name: 'First Pull', description: 'Perform your first character pull', reward: 100 },
    { name: 'Novice Collector', description: 'Collect 10 unique characters', reward: 500 },
    { name: 'Lucky Star', description: 'Pull a 5-star character', reward: 1000 },
    { name: 'Ultra Lucky', description: 'Pull an Ultra rarity character', reward: 2000 },
    { name: 'Dedicated Puller', description: 'Perform 100 pulls', reward: 1500 },
    { name: 'Five Star Collector', description: 'Collect 5 unique 5-star characters', reward: 3000, special: 'Couch Surfer etovo' },
  ];

  const textColor = darkMode ? 'text-white' : 'text-gray-800';
  const bgColor = darkMode ? 'bg-gray-800' : 'bg-white';

  const handleClaim = (achievement: string) => {
    onClaimReward(achievement);
    if (achievement === 'Five Star Collector' && !collection.some(char => char.name === 'Couch Surfer etovo')) {
      onRedeemCouchSurferEtovo();
    }
  };

  const claimableAchievements = allAchievements.filter(
    achievement => achievements.includes(achievement.name) && !claimedAchievements.includes(achievement.name)
  );

  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-lg`}>
      <button 
        className={`text-2xl font-bold mb-4 flex items-center justify-between w-full ${textColor}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        Achievements
        <span>{isExpanded ? '▼' : '►'}</span>
      </button>
      
      {!isExpanded && claimableAchievements.length > 0 && (
        <div className="mt-2">
          <h3 className={`text-lg font-semibold mb-2 ${textColor}`}>Claimable Achievements</h3>
          <div className="space-y-2">
            {claimableAchievements.map((achievement) => (
              <div key={achievement.name} className="flex justify-between items-center">
                <span className={textColor}>{achievement.name}</span>
                <button
                  className="px-2 py-1 bg-yellow-500 text-white rounded text-sm"
                  onClick={() => handleClaim(achievement.name)}
                >
                  Claim
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {isExpanded && (
        <div className="space-y-4">
          {allAchievements.map((achievement) => (
            <div
              key={achievement.name}
              className={`p-4 rounded-lg ${
                achievements.includes(achievement.name)
                  ? 'bg-green-800 text-white'
                  : darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              <h3 className="font-semibold">{achievement.name}</h3>
              <p className="text-sm">{achievement.description}</p>
              <p className="text-sm mt-1">Reward: {achievement.reward} credits</p>
              {achievement.special && <p className="text-sm mt-1">Special: {achievement.special}</p>}
              {achievements.includes(achievement.name) && !claimedAchievements.includes(achievement.name) && (
                <button
                  className="mt-2 px-3 py-1 bg-yellow-500 text-white rounded"
                  onClick={() => handleClaim(achievement.name)}
                >
                  Claim Reward
                </button>
              )}
              {claimedAchievements.includes(achievement.name) && (
                <p className="text-sm mt-2 text-green-400">Reward Claimed</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Achievements;