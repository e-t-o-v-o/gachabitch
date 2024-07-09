import React, { useState } from 'react';

interface DailyRewardProps {
  onClaim: () => void;
  lastLoginDate: string | null;
  darkMode: boolean;
}

const DailyReward: React.FC<DailyRewardProps> = ({ onClaim, lastLoginDate, darkMode }) => {
  const [claimed, setClaimed] = useState(false);
  const [show, setShow] = useState(true);

  const today = new Date().toISOString().split('T')[0];
  const canClaim = lastLoginDate !== today;

  const handleClaim = () => {
    onClaim();
    setClaimed(true);
  };

  const textColor = darkMode ? 'text-white' : 'text-gray-800';
  const bgColor = darkMode ? 'bg-gray-700' : 'bg-green-500';

  if (!show) return null;

  return (
    <div className={`${bgColor} text-white p-4 rounded-lg mb-4 relative`}>
      <button 
        className="absolute top-2 right-2 text-white hover:text-gray-300"
        onClick={() => setShow(false)}
      >
        ✕
      </button>
      <h3 className="text-xl font-bold mb-2">Daily Reward</h3>
      {canClaim && !claimed ? (
        <button
          className="bg-white text-green-500 px-4 py-2 rounded"
          onClick={handleClaim}
        >
          Claim 10 Free Pulls
        </button>
      ) : (
        <p className={textColor}>
          {claimed ? "You've claimed your daily reward. Come back tomorrow!" : "You've already claimed your daily reward. Come back tomorrow!"}
        </p>
      )}
    </div>
  );
};

export default DailyReward;