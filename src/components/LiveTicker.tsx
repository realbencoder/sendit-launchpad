
import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface TickerItem {
  id: string;
  action: 'bought' | 'sold';
  amount: string;
  token: string;
  price: string;
  user: string;
}

interface LiveTickerProps {
  onTokenClick?: (token: any) => void;
}

const LiveTicker = ({ onTokenClick }: LiveTickerProps) => {
  const [tickerItems, setTickerItems] = useState<TickerItem[]>([]);

  // Mock real-time ticker data
  useEffect(() => {
    const mockItems: TickerItem[] = [
      { id: '1', action: 'bought', amount: '0.0196', token: 'FURCOCK', price: '$0.000103', user: '0xe5e...3133' },
      { id: '2', action: 'sold', amount: '0.0274', token: '$BENDER', price: '$0.000109', user: '0xa1b...7891' },
      { id: '3', action: 'bought', amount: '0.0327', token: 'FURCOCK', price: '$0.000103', user: '0x123...4567' },
    ];

    setTickerItems(mockItems);

    // Simulate new ticker items
    const interval = setInterval(() => {
      const newItem: TickerItem = {
        id: Date.now().toString(),
        action: Math.random() > 0.5 ? 'bought' : 'sold',
        amount: (Math.random() * 0.1).toFixed(4),
        token: ['FURCOCK', '$BENDER', 'DOGE2.0', 'MOON'][Math.floor(Math.random() * 4)],
        price: `$0.000${Math.floor(Math.random() * 999)}`,
        user: `0x${Math.random().toString(16).substr(2, 3)}...${Math.random().toString(16).substr(2, 4)}`
      };

      setTickerItems(prev => [newItem, ...prev.slice(0, 9)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleTokenClick = (tokenName: string) => {
    if (onTokenClick) {
      // Create a mock token object for the trading view
      const mockToken = {
        id: tokenName.toLowerCase().replace('$', ''),
        name: tokenName,
        symbol: tokenName,
        price: '$0.000103',
        marketCap: '$1.2M',
        volume: '$24.5K',
        change24h: Math.random() > 0.5 ? 15.2 : -8.7,
        holders: 1247,
        image: '/placeholder.svg',
        replies: 42,
        tags: ['🚀', '💎', '🌙']
      };
      onTokenClick(mockToken);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-950 border-b border-gray-700 h-16">
      <div className="flex items-center h-full overflow-hidden">
        <div className="flex items-center space-x-1 px-4 py-2 bg-abstract/10 border-r border-gray-700">
          <div className="w-2 h-2 bg-abstract rounded-full animate-pulse-abstract"></div>
          <span className="text-abstract font-semibold text-sm">Live</span>
        </div>
        
        <div className="flex-1 overflow-hidden">
          <div className="flex animate-pulse space-x-8 px-4">
            {tickerItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-2 text-sm ticker-item">
                {item.action === 'bought' ? (
                  <TrendingUp className="w-4 h-4 text-green-400" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-400" />
                )}
                <span className={item.action === 'bought' ? 'text-green-400' : 'text-red-400'}>
                  {item.action === 'bought' ? 'Bought' : 'Sold'}
                </span>
                <span className="text-white font-semibold">{item.amount} ETH</span>
                <span className="text-gray-400">of</span>
                <button
                  onClick={() => handleTokenClick(item.token)}
                  className="text-abstract font-semibold hover:text-abstract-light cursor-pointer transition-colors"
                >
                  {item.token}
                </button>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400">{item.user}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="px-4">
          <button className="bg-abstract hover:bg-abstract-dark text-black px-4 py-2 rounded-lg font-bold text-sm transition-colors">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveTicker;
