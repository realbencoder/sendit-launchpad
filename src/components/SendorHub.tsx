
import { User, Award, Coins } from 'lucide-react';

const SendorHub = () => {
  return (
    <div className="p-6 pt-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white dark:text-white light:text-gray-900">Sendor Hub</h1>
        <p className="text-gray-400 dark:text-gray-400 light:text-gray-600">Your wallet-linked activity and profile</p>
      </div>
      
      {/* Profile Section */}
      <div className="bg-gray-850 dark:bg-gray-850 light:bg-white border border-gray-700 dark:border-gray-700 light:border-gray-200 rounded-lg p-6 mb-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="bg-sendor/20 rounded-full p-3">
            <User className="w-10 h-10 text-sendor" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white dark:text-white light:text-gray-900">0xe5e...3133</h2>
            <div className="flex items-center space-x-2 mt-1">
              <span className="bg-sendor/20 text-sendor text-xs py-1 px-2 rounded-full flex items-center">
                <Award className="w-3 h-3 mr-1" /> Sendor Pass Holder
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Activity Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-850 dark:bg-gray-850 light:bg-white border border-gray-700 dark:border-gray-700 light:border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Coins className="w-5 h-5 text-sendor" />
            <h3 className="text-lg font-bold text-white dark:text-white light:text-gray-900">Coins Launched</h3>
          </div>
          <div className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-center py-8">
            No coins launched yet
          </div>
        </div>
        
        <div className="bg-gray-850 dark:bg-gray-850 light:bg-white border border-gray-700 dark:border-gray-700 light:border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Award className="w-5 h-5 text-sendor" />
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
