
import { User, Award, Coins, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

const SendorHub = () => {
  // Mock P&L data - in a real app this would come from wallet/trading data
  const pnlData = {
    totalPnL: 1250.75,
    totalPnLPercentage: 15.2,
    realizedPnL: 980.25,
    unrealizedPnL: 270.50,
    bestTrade: { coin: 'PEPE', profit: 450.00 },
    worstTrade: { coin: 'DOGE', loss: -120.30 },
    winRate: 68.5,
    totalTrades: 47
  };

  return (
    <div className="p-6 pt-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white dark:text-white light:text-gray-900">Sendor Hub</h1>
        <p className="text-gray-400 dark:text-gray-400 light:text-gray-600">Your wallet-linked activity and profile</p>
      </div>
      
      {/* Profile Section */}
      <div className="bg-gray-850 dark:bg-gray-850 light:bg-white border border-gray-700 dark:border-gray-700 light:border-gray-200 rounded-lg p-6 mb-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="bg-abstract/20 rounded-full p-3">
            <User className="w-10 h-10 text-abstract" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white dark:text-white light:text-gray-900">0xe5e...3133</h2>
            <div className="flex items-center space-x-2 mt-1">
              <span className="bg-abstract/20 text-abstract text-xs py-1 px-2 rounded-full flex items-center">
                <Award className="w-3 h-3 mr-1" /> SendIt Pass Holder
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Profit & Loss Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-900 mb-4">Profit & Loss</h2>
        
        {/* P&L Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-850 dark:bg-gray-850 light:bg-white border border-gray-700 dark:border-gray-700 light:border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">Total P&L</p>
                <p className={`text-2xl font-bold ${pnlData.totalPnL >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  ${pnlData.totalPnL.toFixed(2)}
                </p>
                <p className={`text-sm ${pnlData.totalPnLPercentage >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {pnlData.totalPnLPercentage >= 0 ? '+' : ''}{pnlData.totalPnLPercentage}%
                </p>
              </div>
              {pnlData.totalPnL >= 0 ? (
                <TrendingUp className="w-8 h-8 text-green-400" />
              ) : (
                <TrendingDown className="w-8 h-8 text-red-400" />
              )}
            </div>
          </div>

          <div className="bg-gray-850 dark:bg-gray-850 light:bg-white border border-gray-700 dark:border-gray-700 light:border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">Realized P&L</p>
                <p className="text-xl font-bold text-green-400">
                  ${pnlData.realizedPnL.toFixed(2)}
                </p>
              </div>
              <DollarSign className="w-6 h-6 text-green-400" />
            </div>
          </div>

          <div className="bg-gray-850 dark:bg-gray-850 light:bg-white border border-gray-700 dark:border-gray-700 light:border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">Unrealized P&L</p>
                <p className="text-xl font-bold text-yellow-400">
                  ${pnlData.unrealizedPnL.toFixed(2)}
                </p>
              </div>
              <TrendingUp className="w-6 h-6 text-yellow-400" />
            </div>
          </div>

          <div className="bg-gray-850 dark:bg-gray-850 light:bg-white border border-gray-700 dark:border-gray-700 light:border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">Win Rate</p>
                <p className="text-xl font-bold text-abstract">
                  {pnlData.winRate}%
                </p>
                <p className="text-sm text-gray-500">
                  {pnlData.totalTrades} trades
                </p>
              </div>
              <Award className="w-6 h-6 text-abstract" />
            </div>
          </div>
        </div>

        {/* Best/Worst Trades */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-850 dark:bg-gray-850 light:bg-white border border-gray-700 dark:border-gray-700 light:border-gray-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-white dark:text-white light:text-gray-900">Best Trade</h3>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 dark:text-gray-400 light:text-gray-600">{pnlData.bestTrade.coin}</span>
              <span className="text-xl font-bold text-green-400">
                +${pnlData.bestTrade.profit.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="bg-gray-850 dark:bg-gray-850 light:bg-white border border-gray-700 dark:border-gray-700 light:border-gray-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingDown className="w-5 h-5 text-red-400" />
              <h3 className="text-lg font-bold text-white dark:text-white light:text-gray-900">Worst Trade</h3>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 dark:text-gray-400 light:text-gray-600">{pnlData.worstTrade.coin}</span>
              <span className="text-xl font-bold text-red-400">
                ${pnlData.worstTrade.loss.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Activity Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-850 dark:bg-gray-850 light:bg-white border border-gray-700 dark:border-gray-700 light:border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Coins className="w-5 h-5 text-abstract" />
            <h3 className="text-lg font-bold text-white dark:text-white light:text-gray-900">Coins Launched</h3>
          </div>
          <div className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-center py-8">
            No coins launched yet
          </div>
        </div>
        
        <div className="bg-gray-850 dark:bg-gray-850 light:bg-white border border-gray-700 dark:border-gray-700 light:border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Award className="w-5 h-5 text-abstract" />
            <h3 className="text-lg font-bold text-white dark:text-white light:text-gray-900">Coins Bought</h3>
          </div>
          <div className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-center py-8">
            Connect your wallet to see your coins
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendorHub;
