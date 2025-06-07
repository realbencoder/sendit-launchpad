
import { useState } from 'react';
import { Upload, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import TokenPurchaseModal from './TokenPurchaseModal';

const CreateToken = () => {
  const [tokenData, setTokenData] = useState({
    name: '',
    symbol: '',
    description: '',
    image: null,
    telegramLink: '',
    twitterLink: '',
    website: ''
  });
  
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setTokenData({ ...tokenData, image: file });
    }
  };

  const handleDeploy = () => {
    if (tokenData.name && tokenData.symbol) {
      setShowPurchaseModal(true);
    }
  };

  return (
    <div className="p-6 pt-20 max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-sendor/20 to-sendor-600/20 sendor-border">
            <Sparkles className="w-8 h-8 text-sendor" />
          </div>
        </div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-sendor via-sendor-light to-sendor-600 bg-clip-text text-transparent mb-2">
          Launch Your Token
        </h1>
        <p className="text-gray-400">
          Create and deploy your own cryptocurrency in minutes
        </p>
      </div>

      <div className="neo-card p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sendor text-sm font-semibold mb-3 flex items-center">
              <span className="w-2 h-2 bg-sendor rounded-full mr-2"></span>
              Token Name
            </label>
            <Input
              value={tokenData.name}
              onChange={(e) => setTokenData({ ...tokenData, name: e.target.value })}
              className="neo-card border-sendor/30 text-white bg-transparent backdrop-blur-sm focus:border-sendor transition-all duration-300"
              placeholder="Enter token name"
            />
          </div>

          <div>
            <label className="block text-sendor text-sm font-semibold mb-3 flex items-center">
              <span className="w-2 h-2 bg-sendor rounded-full mr-2"></span>
              Symbol
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sendor font-bold">$</span>
              <Input
                value={tokenData.symbol}
                onChange={(e) => setTokenData({ ...tokenData, symbol: e.target.value.toUpperCase() })}
                className="neo-card border-sendor/30 text-white bg-transparent backdrop-blur-sm pl-10 focus:border-sendor transition-all duration-300"
                maxLength={10}
                placeholder="SYMBOL"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sendor text-sm font-semibold mb-3 flex items-center">
            <span className="w-2 h-2 bg-sendor rounded-full mr-2"></span>
            Description
          </label>
          <Textarea
            value={tokenData.description}
            onChange={(e) => setTokenData({ ...tokenData, description: e.target.value })}
            className="neo-card border-sendor/30 text-white bg-transparent backdrop-blur-sm h-32 focus:border-sendor transition-all duration-300 resize-none"
            placeholder="Describe your token's purpose and vision..."
          />
        </div>

        <div>
          <label className="block text-sendor text-sm font-semibold mb-3 flex items-center">
            <span className="w-2 h-2 bg-sendor rounded-full mr-2"></span>
            Token Image / Video
          </label>
          <div className="sendor-border rounded-2xl p-8 text-center hover:bg-sendor/5 transition-all duration-300 group cursor-pointer">
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label htmlFor="image-upload" className="cursor-pointer">
              <div className="p-4 rounded-2xl bg-sendor/10 inline-block mb-4 group-hover:bg-sendor/20 transition-all duration-300">
                <Upload className="w-8 h-8 text-sendor mx-auto" />
              </div>
              <p className="text-gray-300 mb-3 font-medium">
                Drag and drop your media or click to browse
              </p>
              <Button variant="outline" className="sendor-border bg-transparent text-sendor hover:bg-sendor/10 transition-all duration-300">
                Choose File
              </Button>
            </label>
          </div>
        </div>

        <div className="border-t border-sendor/20 pt-6">
          <div className="text-sendor text-sm font-semibold mb-4 flex items-center">
            <span className="w-2 h-2 bg-sendor rounded-full mr-2"></span>
            Social Links (Optional)
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-400 text-xs font-medium mb-2">
                Telegram
              </label>
              <Input
                value={tokenData.telegramLink}
                onChange={(e) => setTokenData({ ...tokenData, telegramLink: e.target.value })}
                placeholder="https://t.me/..."
                className="neo-card border-sendor/20 text-white bg-transparent backdrop-blur-sm focus:border-sendor/50 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-xs font-medium mb-2">
                Website
              </label>
              <Input
                value={tokenData.website}
                onChange={(e) => setTokenData({ ...tokenData, website: e.target.value })}
                placeholder="https://..."
                className="neo-card border-sendor/20 text-white bg-transparent backdrop-blur-sm focus:border-sendor/50 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-xs font-medium mb-2">
                X (Twitter)
              </label>
              <Input
                value={tokenData.twitterLink}
                onChange={(e) => setTokenData({ ...tokenData, twitterLink: e.target.value })}
                placeholder="https://x.com/..."
                className="neo-card border-sendor/20 text-white bg-transparent backdrop-blur-sm focus:border-sendor/50 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-sendor/20">
          <div className="bg-gradient-to-r from-sendor/10 to-sendor-600/10 rounded-2xl p-4 mb-6 sendor-border">
            <p className="text-gray-300 text-sm font-medium text-center">
              ⚠️ Token data cannot be modified after deployment
            </p>
          </div>
          <Button
            size="lg"
            className="w-full bg-gradient-to-r from-sendor via-sendor-500 to-sendor-600 hover:from-sendor-400 hover:to-sendor-700 text-white font-bold py-4 rounded-2xl sendor-glow transform hover:scale-[1.02] transition-all duration-300 border-2 border-sendor/30"
            disabled={!tokenData.name || !tokenData.symbol}
            onClick={handleDeploy}
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Deploy Token & Start Trading
          </Button>
        </div>
      </div>

      <TokenPurchaseModal
        isOpen={showPurchaseModal}
        onClose={() => setShowPurchaseModal(false)}
        tokenSymbol={tokenData.symbol}
        tokenName={tokenData.name}
      />
    </div>
  );
};

export default CreateToken;
