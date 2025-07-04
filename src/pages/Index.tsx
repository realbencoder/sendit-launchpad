
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import LiveTicker from '../components/LiveTicker';
import TokenList from '../components/TokenList';
import CreateToken from '../components/CreateToken';
import TradingView from '../components/TradingView';
import SendorHub from '../components/SendorHub';
import Support from '../components/Support';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

const Index = () => {
  const [activeView, setActiveView] = useState('pairs');
  const [selectedToken, setSelectedToken] = useState(null);

  const handleSelectToken = (token) => {
    setSelectedToken(token);
    setActiveView('trading');
  };

  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-900 light:bg-gray-50 text-white dark:text-white light:text-gray-900 flex flex-col">
      {/* Live Ticker */}
      <LiveTicker onTokenClick={handleSelectToken} />
      
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar activeView={activeView} setActiveView={setActiveView} />
        
        {/* Main Content */}
        <div 
          className="flex-1 transition-all duration-300" 
          style={{ marginLeft: 'var(--sidebar-width, 256px)' }}
        >
          {activeView === 'pairs' && (
            <TokenList onSelectToken={handleSelectToken} />
          )}
          {activeView === 'create' && <CreateToken />}
          {activeView === 'profile' && <SendorHub />}
          {activeView === 'how-it-works' && <HowItWorks />}
          {activeView === 'support' && <Support />}
          {activeView === 'trading' && selectedToken && (
            <TradingView token={selectedToken} onBack={() => setActiveView('pairs')} />
          )}
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
