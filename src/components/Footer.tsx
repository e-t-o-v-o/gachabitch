import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p>&copy; 2023 GachaBitch. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Made By etovo and Claude</a>
          <a href="#" className="hover:underline">Add me on Twitter and Youtube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;