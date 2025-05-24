
import { Rocket, Plus, TrendingUp, User, Users, Palette, GraduationCap, LifeBuoy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const Sidebar = ({ activeView, setActiveView }: SidebarProps) => {
  const menuItems = [
    { id: 'pairs', label: 'Fresh Prints', icon: Rocket },
    { id: 'create', label: 'Launch One', icon: Plus },
    { id: 'profile', label: 'Sendor Hub', icon: User },
    { id: 'studio', label: 'Sendit Studio', icon: Palette },
    { id: 'pass', label: 'SendIt Pass', icon: GraduationCap },
    { id: 'support', label: 'Support', icon: LifeBuoy },
  ];

  return (
    <div className="fixed left-0 top-16 h-full w-64 bg-gradient-to-b from-gray-875 to-gray-925 border-r border-abstract/20 p-4 cyber-grid">
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-8 px-2">
        <div className="relative">
          <Rocket className="w-8 h-8 text-abstract animate-float" />
          <div className="absolute inset-0 w-8 h-8 text-abstract animate-pulse-neon opacity-50"></div>
        </div>
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-abstract via-abstract-light to-neon-purple bg-clip-text text-transparent animate-glow">
            Sendit.fun
          </h1>
          <p className="text-xs text-gray-400">Launch fast. Send hard. No brakes.</p>
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
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
                activeView === item.id
                  ? 'bg-gradient-to-r from-abstract/20 to-neon-purple/20 text-abstract border border-abstract/40 neon-glow'
                  : 'text-gray-300 hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-750/50 hover:text-white hover:border-abstract/20 border border-transparent'
              }`}
            >
              <Icon className={`w-5 h-5 transition-all duration-300 ${
                activeView === item.id ? 'text-abstract' : 'group-hover:text-abstract'
              }`} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Connect Wallet */}
      <div className="absolute bottom-4 left-4 right-4">
        <Button className="w-full bg-gradient-to-r from-abstract to-neon-purple hover:from-abstract-light hover:to-abstract-purple text-black font-bold transition-all duration-300 transform hover:scale-105 neon-glow">
          Connect Wallet
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
