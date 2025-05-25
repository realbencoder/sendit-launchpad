import { useState } from 'react';
import { Upload, Rocket, Lock, Flame, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const CreateToken = () => {
  const [tokenData, setTokenData] = useState({
    name: '',
    symbol: '',
    description: '',
    image: null,
    telegramLink: '',
    twitterLink: '',
    website: '',
    lockSupply: false,
    buyTrending: false
  });

  const [preview, setPreview] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setTokenData({ ...tokenData, image: file });
    }
  };

  return (
    <div className="p-6 pt-20 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
        <div className="space-y-6">
          <div className="bg-gray-850 border border-gray-700 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Token Details</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Token Name
                </label>
                <Input
                  value={tokenData.name}
                  onChange={(e) => setTokenData({ ...tokenData, name: e.target.value })}
                  placeholder="e.g., Pepe the Abstract Frog"
                  className="bg-gray-800 border-gray-600 text-white"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Symbol
                </label>
                <Input
                  value={tokenData.symbol}
                  onChange={(e) => setTokenData({ ...tokenData, symbol: e.target.value.toUpperCase() })}
                  placeholder="e.g., APEPE"
                  className="bg-gray-800 border-gray-600 text-white"
                  maxLength={10}
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Description
                </label>
                <Textarea
                  value={tokenData.description}
                  onChange={(e) => setTokenData({ ...tokenData, description: e.target.value })}
                  placeholder="Tell the degens what this is about..."
                  className="bg-gray-800 border-gray-600 text-white h-24"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Token Image
                </label>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center hover:border-abstract/50 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-400">Click to upload image</p>
                    <p className="text-xs text-gray-500">512kb max</p>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gray-850 border border-gray-700 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Social Links (Optional)</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Telegram
                </label>
                <Input
                  value={tokenData.telegramLink}
                  onChange={(e) => setTokenData({ ...tokenData, telegramLink: e.target.value })}
                  placeholder="https://t.me/yourcommunity"
                  className="bg-gray-800 border-gray-600 text-white"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Twitter
                </label>
                <Input
                  value={tokenData.twitterLink}
                  onChange={(e) => setTokenData({ ...tokenData, twitterLink: e.target.value })}
                  placeholder="https://twitter.com/yourproject"
                  className="bg-gray-800 border-gray-600 text-white"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Website
                </label>
                <Input
                  value={tokenData.website}
                  onChange={(e) => setTokenData({ ...tokenData, website: e.target.value })}
                  placeholder="https://yourproject.com"
                  className="bg-gray-800 border-gray-600 text-white"
                />
              </div>
            </div>
          </div>

          {/* Launch Boost Options */}
          <div className="bg-gradient-to-br from-abstract/10 to-purple-600/10 border border-abstract/30 rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-6 h-6 text-abstract" />
              <h2 className="text-xl font-bold text-white">Launch Boost</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-abstract/20 hover:border-abstract/40 transition-colors">
                <div className="flex items-center space-x-3">
                  <Lock className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">Lock Dev Supply</p>
                    <p className="text-gray-400 text-sm">Build trust by locking your tokens</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={tokenData.lockSupply}
                  onChange={(e) => setTokenData({ ...tokenData, lockSupply: e.target.checked })}
                  className="w-5 h-5 text-abstract accent-abstract"
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-abstract/20 hover:border-abstract/40 transition-colors">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-white font-medium">Buy Trending Spot</p>
                    <p className="text-gray-400 text-sm">Get featured and boost visibility</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={tokenData.buyTrending}
                  onChange={(e) => setTokenData({ ...tokenData, buyTrending: e.target.checked })}
                  className="w-5 h-5 text-abstract accent-abstract"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="space-y-6">
          <div className="bg-gray-850 border border-gray-700 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Preview</h2>
            
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                  {tokenData.image ? (
                    <img src={URL.createObjectURL(tokenData.image)} alt="Token" className="w-16 h-16 rounded-full object-cover" />
                  ) : (
                    <Rocket className="w-8 h-8 text-gray-500" />
                  )}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">
                    {tokenData.name || 'Your Token Name'}
                  </h3>
                  <p className="text-gray-400">
                    ${tokenData.symbol || 'SYMBOL'}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-4">
                {tokenData.description || 'Your token description will appear here...'}
              </p>
              
              <div className="flex space-x-2">
                {tokenData.telegramLink && (
                  <div className="w-6 h-6 bg-blue-500 rounded"></div>
                )}
                {tokenData.twitterLink && (
                  <div className="w-6 h-6 bg-blue-400 rounded"></div>
                )}
                {tokenData.website && (
                  <div className="w-6 h-6 bg-gray-500 rounded"></div>
                )}
              </div>
            </div>
          </div>

          {/* Deploy Button */}
          <div className="bg-gradient-to-r from-abstract to-abstract-dark p-1 rounded-xl">
            <div className="bg-gray-850 rounded-lg p-6">
              <div className="text-center">
                <Button
                  size="lg"
                  className="w-full bg-abstract hover:bg-abstract-dark text-black font-bold text-lg py-3"
                  disabled={!tokenData.name || !tokenData.symbol}
                >
                  Deploy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateToken;
