
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import LiveTicker from '../components/LiveTicker';
import TokenList from '../components/TokenList';
import CreateToken from '../components/CreateToken';
import TradingView from '../components/TradingView';

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
        <div className="flex-1 ml-64">
          {activeView === 'pairs' && (
            <TokenList onSelectToken={setSelectedToken} />
          )}
          {activeView === 'create' && <CreateToken />}
          {activeView === 'trading' && selectedToken && (
            <TradingView token={selectedToken} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
