
import React from 'react';
import { Rocket, Zap, TrendingUp, Users, Play } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Rocket,
      title: "Launch Your Token",
      description: "Create and deploy your token in minutes with our easy-to-use interface. No coding required."
    },
    {
      icon: Zap,
      title: "Instant Trading",
      description: "Your token is immediately available for trading. Built-in liquidity ensures smooth transactions."
    },
    {
      icon: TrendingUp,
      title: "Watch It Grow",
      description: "Track your token's performance with real-time charts and analytics. See your community grow."
    },
    {
      icon: Users,
      title: "Build Community",
      description: "Engage with holders and build a strong community around your token through our social features."
    }
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="text-center mb-12 pt-8">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sendor via-sendor-light to-sendor-600 bg-clip-text text-transparent mb-4">
          How Sendor Works
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Launch fast. Send hard. No brakes. Create and trade tokens in just a few simple steps.
        </p>
      </div>

      {/* Video Placeholder Section */}
      <div className="mb-16">
        <div className="cyber-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Watch How It Works</h2>
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 flex items-center justify-center group hover:from-gray-700 hover:to-gray-800 transition-all duration-300 cursor-pointer">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-sendor/20 to-sendor-600/20 flex items-center justify-center mx-auto mb-4 group-hover:from-sendor/30 group-hover:to-sendor-600/30 transition-all duration-300">
                  <Play className="w-10 h-10 text-sendor fill-current" />
                </div>
                <p className="text-lg text-gray-300 group-hover:text-white transition-colors">
                  Click to watch our platform demo
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Learn how to create and trade tokens in under 3 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="cyber-card p-6 text-center group hover:neon-glow transition-all duration-300">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-sendor/20 to-sendor-600/20 flex items-center justify-center group-hover:from-sendor/30 group-hover:to-sendor-600/30 transition-all duration-300">
                  <Icon className="w-8 h-8 text-sendor" />
                </div>
              </div>
              <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-gradient-to-r from-sendor to-sendor-600 flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-16 cyber-card p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
        <p className="text-gray-300 mb-6">
          Join thousands of creators who have already launched their tokens on Sendor.
        </p>
        <button className="bg-gradient-to-r from-sendor to-sendor-600 hover:from-sendor-light hover:to-sendor-dark text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 neon-glow">
          Launch Your Token Now
        </button>
      </div>
    </div>
  );
};

export default HowItWorks;
