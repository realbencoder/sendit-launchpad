
import { Award, Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SenditPass = () => {
  return (
    <div className="p-6 pt-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-abstract via-neon-purple to-neon-pink bg-clip-text text-transparent">
          SendIt Pass
        </h1>
        <p className="text-gray-400">Exclusive benefits for pass holders</p>
      </div>
      
      {/* Pass Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="cyber-card p-6 mb-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-abstract to-neon-purple bg-clip-text text-transparent mb-4">
              Pass Benefits
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-abstract/20 to-neon-blue/20 p-1 rounded-md mr-3 neon-border">
                  <Check className="w-5 h-5 text-abstract" />
                </div>
                <div>
                  <h4 className="text-white font-medium">50% Off Trading Fees</h4>
                  <p className="text-gray-400 text-sm">Save on every trade across all tokens</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 p-1 rounded-md mr-3 neon-border">
                  <Check className="w-5 h-5 text-neon-purple" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Enhanced UI</h4>
                  <p className="text-gray-400 text-sm">Access to additional charts, data and tools</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-neon-pink/20 to-neon-yellow/20 p-1 rounded-md mr-3 neon-border">
                  <Check className="w-5 h-5 text-neon-pink" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Status Flex</h4>
                  <p className="text-gray-400 text-sm">Special badge in profile and launch feed</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-neon-green/20 to-abstract/20 p-1 rounded-md mr-3 neon-border">
                  <Check className="w-5 h-5 text-neon-green" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Future Airdrops</h4>
                  <p className="text-gray-400 text-sm">First access to upcoming platform features</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-gradient-to-br from-abstract/30 via-neon-purple/20 to-gray-850 border border-abstract/40 rounded-lg p-6 neon-glow">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-abstract/30 to-neon-purple/30 rounded-full p-4 animate-pulse-neon">
                <Award className="w-12 h-12 text-abstract animate-float" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold bg-gradient-to-r from-abstract to-neon-purple bg-clip-text text-transparent text-center mb-2">
              SendIt Pass
            </h3>
            <p className="text-gray-300 text-center mb-6">Lifetime access to premium features</p>
            
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-750/50 rounded-lg p-4 mb-6 neon-border">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Price</span>
                <span className="text-white font-bold">0.05 ETH</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Supply</span>
                <div className="flex items-center">
                  <Sparkles className="w-4 h-4 text-abstract mr-1 animate-pulse" />
                  <span className="text-white font-bold">1,000</span>
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-gradient-to-r from-abstract to-neon-purple hover:from-abstract-light hover:to-neon-pink text-black font-bold transition-all duration-300 transform hover:scale-105 neon-glow">
              Mint Pass
            </Button>
            
            <p className="text-xs text-gray-400 text-center mt-4">
              Connect wallet to check eligibility
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SenditPass;
