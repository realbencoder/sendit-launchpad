
import { useState } from 'react';
import { TrendingUp, Users, DollarSign, ExternalLink, MessageCircle, ArrowUpRight, ArrowDownRight } from 'lucide-react';
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
}

const TradingView = ({ token }: TradingViewProps) => {
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
    <div className="p-6 mt-4">
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
                  <h1 className="text-2xl font-bold text-white">{token.name}</h1>
                  <p className="text-gray-400">${token.symbol}</p>
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

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-850 border border-gray-700 rounded-xl p-4">
              <div className="flex items-center space-x-2 mb-2">
                <DollarSign className="w-4 h-4 text-abstract" />
                <span className="text-gray-400 text-sm">Market Cap</span>
              </div>
              <p className="text-white font-bold text-lg">{token.marketCap}</p>
            </div>
            
            <div className="bg-gray-850 border border-gray-700 rounded-xl p-4">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="w-4 h-4 text-abstract" />
                <span className="text-gray-400 text-sm">Volume</span>
              </div>
              <p className="text-white font-bold text-lg">{token.volume}</p>
            </div>
            
            <div className="bg-gray-850 border border-gray-700 rounded-xl p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="w-4 h-4 text-abstract" />
                <span className="text-gray-400 text-sm">Holders</span>
              </div>
              <p className="text-white font-bold text-lg">{token.holders}</p>
            </div>
            
            <div className="bg-gray-850 border border-gray-700 rounded-xl p-4">
              <div className="flex items-center space-x-2 mb-2">
                <MessageCircle className="w-4 h-4 text-abstract" />
                <span className="text-gray-400 text-sm">Replies</span>
              </div>
              <p className="text-white font-bold text-lg">{token.replies}</p>
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
                Buy
              </button>
              <button
                onClick={() => setTradeType('sell')}
                className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                  tradeType === 'sell' 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-800 text-gray-400'
                }`}
              >
                Sell
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Amount (ETH)
                </label>
                <Input
                  value={ethAmount}
                  onChange={(e) => setEthAmount(e.target.value)}
                  placeholder="0.0"
                  className="bg-gray-800 border-gray-600 text-white"
                />
                <div className="flex space-x-2 mt-2">
                  <button className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded">
                    25%
                  </button>
                  <button className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded">
                    50%
                  </button>
                  <button className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded">
                    MAX
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Slippage Tolerance
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 5].map((value) => (
                    <button
                      key={value}
                      onClick={() => setSlippage(value)}
                      className={`px-3 py-1 text-sm rounded ${
                        slippage === value 
                          ? 'bg-abstract text-black' 
                          : 'bg-gray-700 text-gray-300'
                      }`}
                    >
                      {value}%
                    </button>
                  ))}
                </div>
              </div>

              <Button
                size="lg"
                className={`w-full font-bold text-lg ${
                  tradeType === 'buy'
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-red-600 hover:bg-red-700'
                } text-white`}
              >
                {tradeType === 'buy' ? 'SNIPE' : 'DUMP'} {token.symbol}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Connect wallet to start trading
              </p>
            </div>
          </div>

          {/* Recent Trades */}
          <div className="bg-gray-850 border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Recent Trades</h3>
            <div className="space-y-3">
              {recentTrades.map((trade, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    {trade.type === 'buy' ? (
                      <ArrowUpRight className="w-4 h-4 text-green-400" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-400" />
                    )}
                    <span className={trade.type === 'buy' ? 'text-green-400' : 'text-red-400'}>
                      {trade.amount} ETH
                    </span>
                  </div>
                  <div className="text-gray-400">
                    <span>{trade.price}</span>
                    <span className="ml-2">{trade.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingView;
