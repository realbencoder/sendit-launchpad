
import { useState } from 'react';
import { TrendingUp, Users, DollarSign, ExternalLink, MessageCircle, ArrowUpRight, ArrowDownRight, ArrowLeft, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

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

interface TradingViewProps {
  token: Token;
  onBack: () => void;
}

const TradingView = ({ token, onBack }: TradingViewProps) => {
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');
  const [ethAmount, setEthAmount] = useState('');
  const [slippage, setSlippage] = useState(2);

  // Mock price data
  const priceData = Array.from({ length: 24 }, (_, i) => ({
    time: i,
    price: Math.random() * 0.0001 + 0.0001,
  }));

  const recentTrades = [
    { type: 'buy', amount: '0.05', price: '0.000103', time: '2m ago', user: '0x123...4567' },
    { type: 'sell', amount: '0.02', price: '0.000101', time: '5m ago', user: '0xabc...def1' },
    { type: 'buy', amount: '0.15', price: '0.000105', time: '7m ago', user: '0x789...abc2' },
  ];

  return (
    <div className="p-6 pt-20">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-400 hover:text-white mb-4 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>[go back]</span>
      </button>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Column - Chart and Token Info */}
        <div className="xl:col-span-2 space-y-6">
          {/* Token Header */}
          <div className="bg-gray-850 border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img 
                  src={token.image} 
                  alt={token.name}
                  className="w-16 h-16 rounded-full border-2 border-gray-600"
                />
                <div>
                  <h1 className="text-2xl font-bold text-white">{token.name} ({token.symbol})</h1>
                  <p className="text-gray-400 text-sm">about 1 hour ago • market cap: {token.marketCap} • replies: {token.replies}</p>
                </div>
                <div className="flex space-x-1">
                  {token.tags.map((tag, index) => (
                    <span key={index} className="text-lg">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-2xl font-bold text-white">{token.price}</p>
                <p className={`text-sm font-semibold ${token.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {token.change24h >= 0 ? '+' : ''}{token.change24h}% (24h)
                </p>
              </div>
            </div>
          </div>

          {/* Price Chart */}
          <div className="bg-gray-850 border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Bonding Curve</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm bg-abstract text-black rounded-lg font-medium">
                  1m
                </button>
                <button className="px-3 py-1 text-sm text-gray-400 hover:text-white">
                  5m
                </button>
                <button className="px-3 py-1 text-sm text-gray-400 hover:text-white">
                  1h
                </button>
                <button className="px-3 py-1 text-sm text-gray-400 hover:text-white">
                  1d
                </button>
              </div>
            </div>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={priceData}>
                  <XAxis dataKey="time" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1a1a1a', 
                      border: '1px solid #374151',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke="#00FF9C" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Thread Section */}
          <div className="bg-gray-850 border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-yellow-600 text-black rounded font-medium">
                  thread
                </button>
                <button className="px-4 py-2 text-gray-400 hover:text-white">
                  trades
                </button>
              </div>
              <button className="px-4 py-2 text-gray-400 hover:text-white">
                post a reply
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <img 
                  src={token.image} 
                  alt={token.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-white font-medium">{token.name} ({token.symbol})</span>
                    <span className="text-gray-500 text-sm">dev</span>
                    <span className="text-gray-500 text-sm">24/2024, 9:06:12 AM</span>
                  </div>
                  <p className="text-gray-300">
                    {token.name} is a cutting-edge meme coin inspired by the legendary crypto culture. 
                    Join the movement, flip meme coins, and catch the crypto beat!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Trading Panel */}
        <div className="space-y-6">
          {/* Trade Panel */}
          <div className="bg-gray-850 border border-gray-700 rounded-xl p-6">
            <div className="flex space-x-2 mb-4">
              <button
                onClick={() => setTradeType('buy')}
                className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                  tradeType === 'buy' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-800 text-gray-400'
                }`}
              >
                buy
              </button>
              <button
                onClick={() => setTradeType('sell')}
                className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                  tradeType === 'sell' 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-800 text-gray-400'
                }`}
              >
                sell
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  switch to {token.symbol}
                </label>
                <Input
                  value={ethAmount}
                  onChange={(e) => setEthAmount(e.target.value)}
                  placeholder="0.00"
                  className="bg-gray-800 border-gray-600 text-white"
                />
                <div className="flex justify-between items-center mt-2">
                  <div className="flex space-x-2">
                    <button className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded">
                      reset
                    </button>
                    <button className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded">
                      0.1 SOL
                    </button>
                    <button className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded">
                      0.5 SOL
                    </button>
                    <button className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded">
                      1 SOL
                    </button>
                    <button className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded">
                      max
                    </button>
                  </div>
                  <span className="text-sm text-gray-400">set max slippage</span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg"
              >
                log in to trade
              </Button>

              <div className="text-center text-sm text-gray-500">
                Please connect your Web3 wallet to swap.
              </div>
            </div>
          </div>

          {/* Token Info Panel */}
          <div className="bg-gray-850 border border-gray-700 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={token.image} 
                alt={token.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-white font-bold">{token.name} ({token.symbol})</h3>
                <p className="text-gray-400 text-sm">
                  {token.name} is a cutting-edge meme coin inspired by the legendary culture.
                </p>
              </div>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-400">bonding curve progress:</span>
                <span className="text-white">1%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-abstract h-2 rounded-full" style={{ width: '1%' }}></div>
              </div>
              <p className="text-xs text-gray-500">
                graduate this coin to PumpSwap at ${token.marketCap} market cap. 
                there is 0.007 SOL in the bonding curve.
              </p>
            </div>

            <div className="flex space-x-2 mb-4">
              <button className="flex-1 py-2 px-3 bg-gray-700 text-gray-300 rounded text-sm hover:bg-gray-600">
                X twitter
              </button>
              <button className="flex-1 py-2 px-3 bg-gray-700 text-gray-300 rounded text-sm hover:bg-gray-600">
                🌐 website
              </button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">contract address:</span>
                <button className="text-abstract text-sm hover:underline">
                  E7MlL...pump 📋
                </button>
              </div>
              <button className="w-full py-2 px-3 bg-gray-700 text-gray-300 rounded text-sm hover:bg-gray-600">
                ☁️ trade on MEXC ↗
              </button>
            </div>
          </div>

          {/* Top Holders */}
          <div className="bg-gray-850 border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">top holders</h3>
              <button className="text-abstract text-sm hover:underline">
                generate bubble map
              </button>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white">1. bonding curve</span>
                <span className="text-white">99.97%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white">2. 93eC5a</span>
                <span className="text-white">0.02%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white">3. 5tK8et 🏆 (dev)</span>
                <span className="text-white">0.00%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white">4. 4d5Na5</span>
                <span className="text-white">0.00%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingView;
