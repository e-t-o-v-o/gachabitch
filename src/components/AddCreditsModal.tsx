import React, { useState } from 'react';

interface AddCreditsModalProps {
  onClose: () => void;
  onAddCredits: (amount: number) => void;
}

interface CreditPackage {
  credits: number;
  price: string;
}

const AddCreditsModal: React.FC<AddCreditsModalProps> = ({ onClose, onAddCredits }) => {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

  const creditPackages: CreditPackage[] = [
    { credits: 1000, price: '$9.99' },
    { credits: 5000, price: '$49.99' },
    { credits: 10000, price: '$99.99' },
  ];

  const handlePurchase = () => {
    if (selectedPackage !== null) {
      onAddCredits(creditPackages[selectedPackage].credits);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add Credits</h2>
        <div className="space-y-4">
          {creditPackages.map((pkg, index) => (
            <button
              key={index}
              className={`w-full p-4 rounded-lg ${
                selectedPackage === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => setSelectedPackage(index)}
            >
              {pkg.credits} Credits - {pkg.price}
            </button>
          ))}
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <button 
            className="px-4 py-2 bg-gray-300 rounded-lg text-gray-800"
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
            onClick={handlePurchase}
            disabled={selectedPackage === null}
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCreditsModal;