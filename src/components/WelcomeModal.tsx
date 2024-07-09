import React from 'react';

interface WelcomeModalProps {
  onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Welcome to GatchaBitch!</h2>
        <p className="mb-4">
          Get ready to embark on an exciting journey of character collection and gacha pulls!
          Here's a quick guide to get you started:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Use your credits to pull for new characters</li>
          <li>Collect rare and powerful characters</li>
          <li>Complete achievements to earn rewards</li>
          <li>Keep an eye on your pity counter for guaranteed 5-star pulls</li>
        </ul>
        <p className="mb-4">
          Good luck, and may the gacha gods be in your favor!
        </p>
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={onClose}
        >
          Let's Go!
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;