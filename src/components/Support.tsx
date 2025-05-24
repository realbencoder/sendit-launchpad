
import { MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Support = () => {
  return (
    <div className="p-6 pt-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Support</h1>
        <p className="text-gray-400">Get help from our community moderators</p>
      </div>
      
      <div className="flex flex-col items-center justify-center max-w-md mx-auto bg-gray-850 border border-gray-700 rounded-lg p-8">
        <div className="bg-abstract/20 rounded-full p-4 mb-6">
          <MessageCircle className="w-12 h-12 text-abstract" />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-2">Join Our Telegram</h2>
        <p className="text-gray-400 text-center mb-6">
          Our mod team is available 24/7 to answer your questions and provide support
        </p>
        
        <Button className="bg-abstract hover:bg-abstract-dark text-black font-bold flex items-center space-x-2">
          <Send className="w-4 h-4" />
          <span>Open Telegram</span>
        </Button>
      </div>
      
      <div className="max-w-md mx-auto mt-8 text-center">
        <h3 className="text-white font-medium mb-2">Common Questions</h3>
        <div className="space-y-2">
          <button className="w-full text-left bg-gray-800 hover:bg-gray-750 p-3 rounded-md text-gray-300">
            How do I create my first token?
          </button>
          <button className="w-full text-left bg-gray-800 hover:bg-gray-750 p-3 rounded-md text-gray-300">
            What are the fees for using Sendit.fun?
          </button>
          <button className="w-full text-left bg-gray-800 hover:bg-gray-750 p-3 rounded-md text-gray-300">
            How do I get my token verified?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;
