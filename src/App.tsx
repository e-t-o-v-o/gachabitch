import React, { useState, useEffect } from 'react';
import { Character } from './types';
import { characters } from './data/characters';
import Header from './components/Header';
import PullSection from './components/PullSection';
import Collection from './components/Collection';
import GameInfo from './components/GameInfo';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import WelcomeModal from './components/WelcomeModal';
import DailyReward from './components/DailyReward';

const App: React.FC = () => {
  const [credits, setCredits] = useState(6300);
  const [collection, setCollection] = useState<Character[]>([]);
  const [pullHistory, setPullHistory] = useState<Character[]>([]);
  const [achievements, setAchievements] = useState<string[]>([]);
  const [claimedAchievements, setClaimedAchievements] = useState<string[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);
  const [lastLoginDate, setLastLoginDate] = useState<string | null>(null);
  const [freeTickets, setFreeTickets] = useState(0);

  useEffect(() => {
    // Load saved data from localStorage
    const savedCredits = localStorage.getItem('credits');
    const savedCollection = localStorage.getItem('collection');
    const savedPullHistory = localStorage.getItem('pullHistory');
    const savedAchievements = localStorage.getItem('achievements');
    const savedClaimedAchievements = localStorage.getItem('claimedAchievements');
    const savedDarkMode = localStorage.getItem('darkMode');
    const savedLastLoginDate = localStorage.getItem('lastLoginDate');
    const savedFreeTickets = localStorage.getItem('freeTickets');

    if (savedCredits) setCredits(JSON.parse(savedCredits));
    if (savedCollection) setCollection(JSON.parse(savedCollection));
    if (savedPullHistory) setPullHistory(JSON.parse(savedPullHistory));
    if (savedAchievements) setAchievements(JSON.parse(savedAchievements));
    if (savedClaimedAchievements) setClaimedAchievements(JSON.parse(savedClaimedAchievements));
    if (savedDarkMode) setDarkMode(JSON.parse(savedDarkMode));
    if (savedLastLoginDate) setLastLoginDate(savedLastLoginDate);
    if (savedFreeTickets) setFreeTickets(JSON.parse(savedFreeTickets));
    
    // Check if it's the user's first time
    const isFirstTime = localStorage.getItem('isFirstTime');
    if (isFirstTime === null) {
      setShowWelcomeModal(true);
      localStorage.setItem('isFirstTime', 'false');
    } else {
      setShowWelcomeModal(false);
    }
  }, []);

  useEffect(() => {
    // Save data to localStorage whenever it changes
    localStorage.setItem('credits', JSON.stringify(credits));
    localStorage.setItem('collection', JSON.stringify(collection));
    localStorage.setItem('pullHistory', JSON.stringify(pullHistory));
    localStorage.setItem('achievements', JSON.stringify(achievements));
    localStorage.setItem('claimedAchievements', JSON.stringify(claimedAchievements));
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    localStorage.setItem('freeTickets', JSON.stringify(freeTickets));
  }, [credits, collection, pullHistory, achievements, claimedAchievements, darkMode, freeTickets]);

  const handleDailyReward = () => {
    const today = new Date().toISOString().split('T')[0];
    if (lastLoginDate !== today) {
      setFreeTickets(prev => prev + 10);
      setLastLoginDate(today);
      localStorage.setItem('lastLoginDate', today);
    }
  };

  const handleAddCredits = (amount: number) => {
    setCredits(prevCredits => prevCredits + amount);
  };

  const handleClaimAchievement = (achievement: string) => {
    if (!claimedAchievements.includes(achievement)) {
      setClaimedAchievements(prev => [...prev, achievement]);
      // Add credits based on the achievement
      const achievementRewards: { [key: string]: number } = {
        'First Pull': 100,
        'Novice Collector': 500,
        'Lucky Star': 1000,
        'Ultra Lucky': 2000,
        'Dedicated Puller': 1500,
        'Five Star Collector': 3000,
      };
      setCredits(prev => prev + (achievementRewards[achievement] || 0));
    }
  };

  const handleRedeemCouchSurferEtovo = () => {
    const couchSurferEtovo = characters.find(char => char.name === 'Couch Surfer etovo');
    if (couchSurferEtovo && !collection.some(char => char.name === 'Couch Surfer etovo')) {
      setCollection(prev => [...prev, couchSurferEtovo]);
      alert("Congratulations! You've unlocked Couch Surfer etovo!");
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <Header 
        credits={credits} 
        collectionSize={collection.length} 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onAddCredits={handleAddCredits}
      />
      <main className="container mx-auto px-4 py-8">
        <DailyReward 
          onClaim={handleDailyReward} 
          lastLoginDate={lastLoginDate}
          darkMode={darkMode}
        />
        <PullSection
          credits={credits}
          setCredits={setCredits}
          collection={collection}
          setCollection={setCollection}
          pullHistory={pullHistory}
          setPullHistory={setPullHistory}
          achievements={achievements}
          setAchievements={setAchievements}
          darkMode={darkMode}
          freeTickets={freeTickets}
          setFreeTickets={setFreeTickets}
        />
        <Collection 
          collection={collection} 
          pullHistory={pullHistory} 
          darkMode={darkMode} 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <GameInfo darkMode={darkMode} />
          <Achievements 
            achievements={achievements}
            claimedAchievements={claimedAchievements}
            onClaimReward={handleClaimAchievement}
            darkMode={darkMode}
            onRedeemCouchSurferEtovo={handleRedeemCouchSurferEtovo}
            collection={collection}
          />
        </div>
      </main>
      <Footer />
      {showWelcomeModal && <WelcomeModal onClose={() => setShowWelcomeModal(false)} />}
    </div>
  );
};

export default App;