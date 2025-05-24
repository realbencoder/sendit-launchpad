import { Palette, Users, Video, Clock } from 'lucide-react';

const SenditStudio = () => {
  return (
    <div className="p-6 pt-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Sendit Studio</h1>
        <p className="text-gray-400">Hire creators to boost your token's visibility</p>
      </div>
      
      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <button className="bg-gray-850 border border-gray-700 rounded-lg p-4 flex flex-col items-center hover:border-abstract transition-colors">
          <Palette className="w-8 h-8 text-abstract mb-2" />
          <span className="text-white font-medium">Meme Artists</span>
        </button>
        
        <button className="bg-gray-850 border border-gray-700 rounded-lg p-4 flex flex-col items-center hover:border-abstract transition-colors">
          <Users className="w-8 h-8 text-abstract mb-2" />
          <span className="text-white font-medium">Raid Teams</span>
        </button>
        
        <button className="bg-gray-850 border border-gray-700 rounded-lg p-4 flex flex-col items-center hover:border-abstract transition-colors">
          <Video className="w-8 h-8 text-abstract mb-2" />
          <span className="text-white font-medium">Video Editors</span>
        </button>
        
        <button className="bg-gray-850 border border-gray-700 rounded-lg p-4 flex flex-col items-center hover:border-abstract transition-colors">
          <Clock className="w-8 h-8 text-abstract mb-2" />
          <span className="text-white font-medium">Coming Soon</span>
        </button>
      </div>
      
      {/* How it Works */}
      <div className="bg-gray-850 border border-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">How It Works</h3>
        <ol className="space-y-4">
          <li className="flex items-start">
            <div className="bg-abstract text-black rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">1</div>
            <p className="text-gray-300">Browse available creators or post your job</p>
          </li>
          <li className="flex items-start">
            <div className="bg-abstract text-black rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">2</div>
            <p className="text-gray-300">Pay with ETH (funds held in escrow until job complete)</p>
          </li>
          <li className="flex items-start">
            <div className="bg-abstract text-black rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">3</div>
            <p className="text-gray-300">Receive deliverables and release payment</p>
          </li>
          <li className="flex items-start">
            <div className="bg-abstract text-black rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">4</div>
            <p className="text-gray-300">Leave a review to help the community</p>
          </li>
        </ol>
        <div className="mt-6 text-sm text-gray-400">
          Sendit.fun takes a 10-15% service fee to maintain the platform
        </div>
      </div>
    </div>
  );
};

export default SenditStudio;
