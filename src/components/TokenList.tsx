
import { useState } from 'react';
import { TrendingUp, Users, DollarSign, ExternalLink, MessageCircle, Twitter, ChevronLeft, ChevronRight, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

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
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('');
  const [bondedSort, setBondedSort] = useState('newest-oldest');
  
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
    },
    {
      id: '5',
      name: 'Mary is Queen',
      symbol: 'MIQ',
      price: '$0.000234',
      marketCap: '$31.5K',
      volume: '$1254',
      change24h: 8.45,
      holders: 45,
      image: 'https://images.unsplash.com/photo-1494790108755-2616c2c7b1af?w=64&h=64&fit=crop&crop=face',
      replies: 12,
      tags: ['👑']
    },
    {
      id: '6',
      name: 'Based Gaspars',
      symbol: 'GASS',
      price: '$0.000156',
      marketCap: '$4.6K',
      volume: '$789',
      change24h: -3.21,
      holders: 18,
      image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838?w=64&h=64&fit=crop&crop=face',
      replies: 6,
      tags: ['⚡']
    },
    {
      id: '7',
      name: 'BADBULL',
      symbol: 'BULL',
      price: '$0.000089',
      marketCap: '$2.2K',
      volume: '$456',
      change24h: 15.67,
      holders: 12,
      image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=64&h=64&fit=crop&crop=face',
      replies: 4,
      tags: ['🐂']
    },
    {
      id: '8',
      name: 'CUCUMAD',
      symbol: 'CUCU',
      price: '$0.000167',
      marketCap: '$6.8K',
      volume: '$923',
      change24h: -7.89,
      holders: 22,
      image: 'https://images.unsplash.com/photo-1534655882465-9c0c8bb6fbc1?w=64&h=64&fit=crop&crop=face',
      replies: 9,
      tags: ['🥒']
    },
    {
      id: '9',
      name: 'Baby Zeus',
      symbol: 'BZEUS',
      price: '$0.000078',
      marketCap: '$3.3K',
      volume: '$234',
      change24h: 22.34,
      holders: 15,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face',
      replies: 3,
      tags: ['⚡', '👶']
    },
    {
      id: '10',
      name: 'PSYCOIN',
      symbol: 'PSY',
      price: '$0.000245',
      marketCap: '$3.3K',
      volume: '$567',
      change24h: -12.45,
      holders: 19,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face',
      replies: 7,
      tags: ['🔮']
    },
    {
      id: '11',
      name: 'EdgardPoo',
      symbol: 'EDPOO',
      price: '$0.000134',
      marketCap: '$3.3K',
      volume: '$445',
      change24h: 5.78,
      holders: 28,
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=face',
      replies: 11,
      tags: ['💩']
    },
    {
      id: '12',
      name: 'Spartan',
      symbol: 'SPA',
      price: '$0.000189',
      marketCap: '$2.3K',
      volume: '$334',
      change24h: 18.92,
      holders: 35,
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=64&h=64&fit=crop&crop=face',
      replies: 8,
      tags: ['⚔️']
    },
    {
      id: '13',
      name: 'Based Zeus',
      symbol: 'ZEUS',
      price: '$0.000312',
      marketCap: '$7.8K',
      volume: '$1123',
      change24h: -4.56,
      holders: 41,
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=64&h=64&fit=crop&crop=face',
      replies: 14,
      tags: ['⚡', '🏛️']
    },
    {
      id: '14',
      name: 'EVER Coin',
      symbol: 'ERC',
      price: '$0.000223',
      marketCap: '$2.3K',
      volume: '$456',
      change24h: 9.87,
      holders: 16,
      image: 'https://images.unsplash.com/photo-1592188657297-c6473609e988?w=64&h=64&fit=crop&crop=face',
      replies: 5,
      tags: ['♾️']
    },
    {
      id: '15',
      name: 'Ski Mask SATO',
      symbol: 'SKSATO',
      price: '$0.000167',
      marketCap: '$2.4K',
      volume: '$378',
      change24h: -8.34,
      holders: 13,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face',
      replies: 6,
      tags: ['🎿']
    },
    {
      id: '16',
      name: 'Kek',
      symbol: 'KEKE',
      price: '$0.000098',
      marketCap: '$2.3K',
      volume: '$234',
      change24h: 14.56,
      holders: 9,
      image: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=64&h=64&fit=crop&crop=face',
      replies: 3,
      tags: ['🐸']
    },
    {
      id: '17',
      name: 'Coat Cat',
      symbol: 'CCAT',
      price: '$0.000145',
      marketCap: '$6K',
      volume: '$567',
      change24h: -2.34,
      holders: 24,
      image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=64&h=64&fit=crop&crop=face',
      replies: 8,
      tags: ['🐱']
    },
    {
      id: '18',
      name: 'ButtPunk',
      symbol: 'BUTTP',
      price: '$0.000234',
      marketCap: '$5.9K',
      volume: '$789',
      change24h: 11.23,
      holders: 33,
      image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=64&h=64&fit=crop&crop=face',
      replies: 12,
      tags: ['🔥', '💀']
    },
    {
      id: '19',
      name: 'Baby BOBR',
      symbol: 'BOBR',
      price: '$0.000089',
      marketCap: '$4.1K',
      volume: '$345',
      change24h: 7.89,
      holders: 17,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=64&h=64&fit=crop&crop=face',
      replies: 4,
      tags: ['🦫']
    },
    {
      id: '20',
      name: 'RONNIE',
      symbol: 'RON',
      price: '$0.000178',
      marketCap: '$3.3K',
      volume: '$456',
      change24h: -6.78,
      holders: 21,
      image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=64&h=64&fit=crop&crop=face',
      replies: 7,
      tags: ['🚀']
    },
    {
      id: '21',
      name: 'Bro Token',
      symbol: 'BROOO',
      price: '$0.000123',
      marketCap: '$9.5K',
      volume: '$1234',
      change24h: 25.67,
      holders: 44,
      image: 'https://images.unsplash.com/photo-1590031905406-f18a426d772d?w=64&h=64&fit=crop&crop=face',
      replies: 16,
      tags: ['😎']
    }
  ];

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

  // Filter tokens based on search query and active filter
  const filteredTokens = mockTokens.filter(token => {
    const matchesSearch = token.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         token.symbol.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;
    
    // Apply active filter logic here
    return true;
  });

  return (
    <div className="pt-20">
      {/* Trending Bar */}
      <div className="bg-gray-800 border-b border-gray-700 py-3 px-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-white font-semibold text-sm whitespace-nowrap">now sending</h2>
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
        {/* Search and Filter Section */}
        <div className="mb-6 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search by CA or ticker..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-abstract"
            />
          </div>

          {/* Filter Options */}
          <div className="flex flex-wrap items-center gap-4">
            <ToggleGroup type="single" value={activeFilter} onValueChange={setActiveFilter}>
              <ToggleGroupItem 
                value="newest" 
                className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700 data-[state=on]:bg-abstract data-[state=on]:text-white"
              >
                Newest
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="sending" 
                className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700 data-[state=on]:bg-abstract data-[state=on]:text-white"
              >
                Sending
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="bonded" 
                className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700 data-[state=on]:bg-abstract data-[state=on]:text-white"
              >
                Bonded
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="top-market-cap" 
                className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700 data-[state=on]:bg-abstract data-[state=on]:text-white"
              >
                Top Market Cap
              </ToggleGroupItem>
            </ToggleGroup>

            {/* Bonded Age Sort - Only show when bonded filter is active */}
            {activeFilter === 'bonded' && (
              <Select value={bondedSort} onValueChange={setBondedSort}>
                <SelectTrigger className="w-48 bg-gray-800 border-gray-600 text-white">
                  <SelectValue placeholder="Sort by age" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  <SelectItem value="newest-oldest" className="text-white hover:bg-gray-700">Newest to Oldest</SelectItem>
                  <SelectItem value="oldest-newest" className="text-white hover:bg-gray-700">Oldest to Newest</SelectItem>
                </SelectContent>
              </Select>
            )}
          </div>
        </div>

        {/* Token Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredTokens.map((token) => (
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
