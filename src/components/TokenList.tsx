import { useState } from 'react';
import { TrendingUp, Users, DollarSign, ExternalLink, MessageCircle, Twitter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Token {
  id: string;
  name: string;
  symbol: string;
  price: string;
  marketCap: string;
  volume: string;
  change24h: number;
  holders: number;
  image: string;
  replies: number;
  tags: string[];
}

interface TokenListProps {
  onSelectToken: (token: Token) => void;
}

const TokenList = ({ onSelectToken }: TokenListProps) => {
  const [sortBy, setSortBy] = useState('marketCap');
  
  const mockTokens: Token[] = [
    {
      id: '1',
      name: 'THE BLOCKCHAIN COWBOY',
      symbol: 'TBC',
      price: '$0.000103',
      marketCap: '$99.1K',
      volume: '$4983',
      change24h: -2.75,
      holders: 10,
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=64&h=64&fit=crop&crop=face',
      replies: 10,
      tags: ['🔥']
    },
    {
      id: '2',
      name: 'BabyApe',
      symbol: 'BAPE',
      price: '$0.000109',
      marketCap: '$35.7K',
      volume: '$2341',
      change24h: 5.76,
      holders: 11,
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=64&h=64&fit=crop&crop=face',
      replies: 7,
      tags: ['🧊']
    },
    {
      id: '3',
      name: 'Book by Matt Furie',
      symbol: 'BOOM',
      price: '$0.000347',
      marketCap: '$19.8K',
      volume: '$1567',
      change24h: 12.34,
      holders: 26,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=64&h=64&fit=crop&crop=face',
      replies: 15,
      tags: ['🔥', '🚀']
    },
    {
      id: '4',
      name: 'Bro',
      symbol: 'BRO',
      price: '$0.000109',
      marketCap: '$11K',
      volume: '$892',
      change24h: -5.67,
      holders: 31,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=64&h=64&fit=crop&crop=face',
      replies: 8,
      tags: ['☠️']
    }
  ];

  // Additional trending tokens for the top bar
  const trendingTokens = [
    { name: 'gork', symbol: 'gork', marketCap: '$574.9K', change24h: 2.75, image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=32&h=32&fit=crop&crop=face' },
    { name: 'The Swarm', symbol: 'SWARM', marketCap: '$926.2K', change24h: -1.2, image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=32&h=32&fit=crop&crop=face' },
    { name: 'PHDKitty', symbol: 'PHDKITTY', marketCap: '$447.4K', change24h: 8.95, image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=32&h=32&fit=crop&crop=face' },
    { name: 'CHARLES', symbol: 'KING', marketCap: '$13.9M', change24h: 5.67, image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=32&h=32&fit=crop&crop=face' },
    { name: 'Apex AI', symbol: 'APEX', marketCap: '$4.9M', change24h: -3.21, image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=32&h=32&fit=crop&crop=face' },
    { name: 'unstable coin', symbol: 'USDUC', marketCap: '$4.9M', change24h: 1.45, image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=32&h=32&fit=crop&crop=face' }
  ];

  const handleTokenClick = (token: Token) => {
    onSelectToken(token);
  };

  return (
    <div className="pt-20">
      {/* Trending Bar */}
      <div className="bg-gray-800 border-b border-gray-700 py-3 px-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-white font-semibold text-sm whitespace-nowrap">now trending</h2>
          <div className="flex items-center space-x-2">
            <button className="p-1 text-gray-400 hover:text-white">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
              {trendingTokens.map((token, index) => (
                <div key={index} className="flex items-center space-x-3 bg-gray-850 rounded-lg px-4 py-2 min-w-fit border border-gray-700">
                  <img 
                    src={token.image} 
                    alt={token.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="text-left">
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium text-sm">{token.name}</span>
                      <span className="text-gray-400 text-xs">({token.symbol})</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-300 text-xs">market cap: {token.marketCap}</span>
                      <span className={`text-xs ${token.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {token.change24h >= 0 ? '+' : ''}{token.change24h}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="p-1 text-gray-400 hover:text-white">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">New Pairs</h1>
            <p className="text-gray-400">Fresh memes. No mercy.</p>
          </div>
          
          <div className="flex space-x-2">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-800 border border-gray-600 text-white px-3 py-2 rounded-lg"
            >
              <option value="marketCap">Market Cap</option>
              <option value="volume">Volume</option>
              <option value="newest">Newest</option>
              <option value="trending">Trending</option>
            </select>
          </div>
        </div>

        {/* Token Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {mockTokens.map((token) => (
            <div 
              key={token.id}
              className="bg-gray-850 border border-gray-700 rounded-xl p-4 hover:border-abstract/50 transition-all duration-200 cursor-pointer group"
              onClick={() => handleTokenClick(token)}
            >
              {/* Token Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <img 
                    src={token.image} 
                    alt={token.name}
                    className="w-12 h-12 rounded-full border-2 border-gray-600"
                  />
                  <div>
                    <h3 className="font-bold text-white group-hover:text-abstract transition-colors truncate max-w-32">
                      {token.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{token.symbol}</p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {token.tags.map((tag, index) => (
                    <span key={index} className="text-sm">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Token Stats */}
              <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                <div>
                  <p className="text-gray-400">Price</p>
                  <p className="text-white font-semibold">{token.price}</p>
                </div>
                <div>
                  <p className="text-gray-400">Market Cap</p>
                  <p className="text-white font-semibold">{token.marketCap}</p>
                </div>
                <div>
                  <p className="text-gray-400">24h Change</p>
                  <p className={`font-semibold ${token.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {token.change24h >= 0 ? '+' : ''}{token.change24h}%
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Holders</p>
                  <p className="text-white font-semibold">{token.holders}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-gray-400 text-sm">
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{token.replies}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{token.holders}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button 
                    className="p-2 rounded-lg text-gray-400 hover:text-abstract hover:bg-gray-800/50 transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button 
                    className="p-2 rounded-lg text-gray-400 hover:text-abstract hover:bg-gray-800/50 transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                  <button 
                    className="p-2 rounded-lg text-gray-400 hover:text-abstract hover:bg-gray-800/50 transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TokenList;
