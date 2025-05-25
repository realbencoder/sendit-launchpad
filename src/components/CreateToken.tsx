
import { useState } from 'react';
import { Upload } from 'lucide-react';
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
    website: ''
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setTokenData({ ...tokenData, image: file });
    }
  };

  return (
    <div className="p-6 pt-20 max-w-xl mx-auto">
      <div className="bg-gray-850 border border-gray-700 rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-blue-400 text-sm font-medium mb-2">
            name
          </label>
          <Input
            value={tokenData.name}
            onChange={(e) => setTokenData({ ...tokenData, name: e.target.value })}
            className="bg-gray-800 border-gray-600 text-white"
          />
        </div>

        <div>
          <label className="block text-blue-400 text-sm font-medium mb-2">
            ticker
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">$</span>
            <Input
              value={tokenData.symbol}
              onChange={(e) => setTokenData({ ...tokenData, symbol: e.target.value.toUpperCase() })}
              className="bg-gray-800 border-gray-600 text-white pl-8"
              maxLength={10}
            />
          </div>
        </div>

        <div>
          <label className="block text-blue-400 text-sm font-medium mb-2">
            description
          </label>
          <Textarea
            value={tokenData.description}
            onChange={(e) => setTokenData({ ...tokenData, description: e.target.value })}
            className="bg-gray-800 border-gray-600 text-white h-24"
          />
        </div>

        <div>
          <label className="block text-blue-400 text-sm font-medium mb-2">
            image or video
          </label>
          <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-gray-500 transition-colors">
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label htmlFor="image-upload" className="cursor-pointer">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-400 mb-2">drag and drop an image or video</p>
              <Button variant="outline" className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
                select file
              </Button>
            </label>
          </div>
        </div>

        <div className="text-blue-400 text-sm cursor-pointer hover:text-blue-300">
          hide more options ↑
        </div>

        <div>
          <label className="block text-blue-400 text-sm font-medium mb-2">
            Telegram link
          </label>
          <Input
            value={tokenData.telegramLink}
            onChange={(e) => setTokenData({ ...tokenData, telegramLink: e.target.value })}
            placeholder="(optional)"
            className="bg-gray-800 border-gray-600 text-white"
          />
        </div>

        <div>
          <label className="block text-blue-400 text-sm font-medium mb-2">
            Website link
          </label>
          <Input
            value={tokenData.website}
            onChange={(e) => setTokenData({ ...tokenData, website: e.target.value })}
            placeholder="(optional)"
            className="bg-gray-800 border-gray-600 text-white"
          />
        </div>

        <div>
          <label className="block text-blue-400 text-sm font-medium mb-2">
            Twitter or X link
          </label>
          <Input
            value={tokenData.twitterLink}
            onChange={(e) => setTokenData({ ...tokenData, twitterLink: e.target.value })}
            placeholder="(optional)"
            className="bg-gray-800 border-gray-600 text-white"
          />
        </div>

        <div className="pt-2">
          <p className="text-gray-400 text-sm mb-4">tip: coin data cannot be changed after creation</p>
          <Button
            size="lg"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
            disabled={!tokenData.name || !tokenData.symbol}
          >
            login to create coin
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateToken;
