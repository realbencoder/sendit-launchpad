
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import LiveTicker from '../components/LiveTicker';
import TokenList from '../components/TokenList';
import CreateToken from '../components/CreateToken';
import TradingView from '../components/TradingView';
import SendorHub from '../components/SendorHub';
import SenditStudio from '../components/SenditStudio';
import SenditPass from '../components/SenditPass';
import Support from '../components/Support';

const Index = () => {
  const [activeView, setActiveView] = useState('pairs');
  const [selectedToken, setSelectedToken] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Live Ticker */}
      <LiveTicker />
      
      <div className="flex">
        {/* Sidebar */}
        <Sidebar activeView={activeView} setActiveView={setActiveView} />
        
        {/* Main Content */}
        <div className="flex-1 transition-all duration-300" style={{ marginLeft: 'var(--sidebar-width, 256px)' }}>
          {activeView === 'pairs' && (
            <TokenList onSelectToken={setSelectedToken} />
          )}
          {activeView === 'create' && <CreateToken />}
          {activeView === 'profile' && <SendorHub />}
          {activeView === 'studio' && <SenditStudio />}
          {activeView === 'pass' && <SenditPass />}
          {activeView === 'support' && <Support />}
          {activeView === 'trading' && selectedToken && (
            <TradingView token={selectedToken} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
