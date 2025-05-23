
import { Rocket, Plus, TrendingUp, User, ArrowRightLeft, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const Sidebar = ({ activeView, setActiveView }: SidebarProps) => {
  const menuItems = [
    { id: 'pairs', label: 'New Pairs', icon: Zap },
    { id: 'create', label: 'Create Token', icon: Plus },
    { id: 'trending', label: 'Trending', icon: TrendingUp },
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'bridge', label: 'Bridge', icon: ArrowRightLeft },
  ];

  return (
    <div className="fixed left-0 top-16 h-full w-64 bg-gray-850 border-r border-gray-700 p-4">
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-8 px-2">
        <Rocket className="w-8 h-8 text-abstract" />
        <div>
          <h1 className="text-xl font-bold text-white">SendIt.Up</h1>
          <p className="text-xs text-gray-400">One Click. Full Send.</p>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeView === item.id
                  ? 'bg-abstract/20 text-abstract border border-abstract/30'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Connect Wallet */}
      <div className="absolute bottom-4 left-4 right-4">
        <Button className="w-full bg-abstract hover:bg-abstract-dark text-black font-bold">
          Connect Wallet
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
