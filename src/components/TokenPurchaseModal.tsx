
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface TokenPurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  tokenSymbol: string;
  tokenName: string;
}

const TokenPurchaseModal = ({ isOpen, onClose, tokenSymbol, tokenName }: TokenPurchaseModalProps) => {
  const [step, setStep] = useState<'purchase' | 'success'>('purchase');
  const [spendAmount, setSpendAmount] = useState('0');
  const [receiveAmount, setReceiveAmount] = useState('0');
  const [contractAddress] = useState('0x' + Math.random().toString(16).substr(2, 40)); // Mock CA

  const handlePurchase = () => {
    // Simulate purchase process
    setStep('success');
  };

  const handleClose = () => {
    setStep('purchase');
    setSpendAmount('0');
    setReceiveAmount('0');
    onClose();
  };

  if (step === 'purchase') {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="bg-gray-850 border-gray-700 text-white max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-white text-xl">Create & Buy?</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <p className="text-gray-300">Choose how many {tokenSymbol} you want to buy (optional)</p>
            <p className="text-sm text-gray-400">
              Buying a small amount of coins helps encourage sales and improves visibility of your token.
            </p>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white">Spend</span>
                <span className="text-gray-300">Balance: 0.001 <span className="text-yellow-400">MAX</span></span>
              </div>
              
              <div className="flex gap-2">
                <Input
                  value={spendAmount}
                  onChange={(e) => setSpendAmount(e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white flex-1"
                  placeholder="0"
                />
                <div className="flex items-center gap-2 bg-gray-700 px-3 rounded-md">
                  <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                  <span className="text-white">ETH</span>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="text-gray-400">↓</div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-white">To</span>
                <span className="text-gray-300">0.00% of supply</span>
              </div>
              
              <div className="flex gap-2">
                <Input
                  value={receiveAmount}
                  onChange={(e) => setReceiveAmount(e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white flex-1"
                  placeholder="0"
                />
                <div className="flex items-center gap-2 bg-gray-700 px-3 rounded-md">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span className="text-white">{tokenSymbol}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                onClick={handleClose}
                className="flex-1 bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
              >
                Cancel
              </Button>
              <Button
                onClick={handlePurchase}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
              >
                OK
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-gray-850 border-gray-700 text-white max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-white text-xl">🎉 Congratulations!</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-gray-300">
            Your <span className="text-blue-400 font-semibold">{tokenSymbol}</span> token has been successfully created!
          </p>
          
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <p className="text-sm text-gray-400 mb-2">Contract Address (CA):</p>
            <p className="text-white font-mono text-sm break-all bg-gray-900 p-2 rounded">
              {contractAddress}
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-gray-300 text-sm">What's next?</p>
            
            <div className="space-y-2">
              <Button
                variant="outline"
                className="w-full bg-gray-700 border-gray-600 text-white hover:bg-gray-600 justify-start"
              >
                🔒 Lock Tokens - Increase trust and security
              </Button>
              
              <Button
                variant="outline"
                className="w-full bg-gray-700 border-gray-600 text-white hover:bg-gray-600 justify-start"
              >
                🔥 Buy Trending Spot - Boost visibility
              </Button>
            </div>
          </div>

          <Button
            onClick={handleClose}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TokenPurchaseModal;
