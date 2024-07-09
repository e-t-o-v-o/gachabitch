import React from 'react';

const PullAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center animate-pulse">
        <div className="w-24 h-24 bg-blue-500 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default PullAnimation;