
import { Home, Plus, TrendingUp, User, Users, Palette, GraduationCap, LifeBuoy, ChevronDown, ChevronRight, MoreHorizontal, PanelLeftClose, PanelLeftOpen, HelpCircle, Twitter, MessageCircle, EllipsisVertical, TrendingUpIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const Sidebar = ({ activeView, setActiveView }: SidebarProps) => {
  const [moreExpanded, setMoreExpanded] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Update CSS custom property when sidebar state changes
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--sidebar-width', 
      sidebarCollapsed ? '80px' : '256px'
    );
  }, [sidebarCollapsed]);

  const mainMenuItems = [
    { id: 'pairs', label: 'Fresh Prints', icon: Home },
    { id: 'create', label: 'Launch One', icon: Plus },
    { id: 'profile', label: 'Sendor Hub', icon: User },
  ];

  const moreMenuItems = [
    { id: 'studio', label: 'Sendor Studio', icon: Palette },
    { id: 'pass', label: 'Sendor Pass', icon: GraduationCap },
    { id: 'how-it-works', label: 'How it works', icon: HelpCircle },
    { id: 'support', label: 'Support', icon: LifeBuoy },
  ];

  const socialIcons = [
    { id: 'telegram', label: 'Telegram', icon: MessageCircle, url: '#' },
    { id: 'twitter', label: 'Twitter', icon: Twitter, url: '#' },
    { id: 'tiktok', label: 'TikTok', icon: Users, url: '#' },
  ];

  const isMoreItemActive = moreMenuItems.some(item => item.id === activeView);

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
    if (!sidebarCollapsed) {
      setMoreExpanded(false); // Close more section when collapsing
    }
  };

  return (
    <div className={`fixed left-0 top-16 h-full bg-gradient-to-b from-gray-875 to-gray-925 dark:from-gray-875 dark:to-gray-925 light:from-gray-50 light:to-gray-100 border-r border-sendor/20 dark:border-sendor/20 light:border-gray-300 p-4 cyber-grid transition-all duration-300 z-20 ${
      sidebarCollapsed ? 'w-20' : 'w-64'
    }`}>
      {/* Toggle Button and Theme Toggle */}
      <div className="flex justify-between items-center mb-4">
        {!sidebarCollapsed && <ThemeToggle />}
        <button
          onClick={handleToggleSidebar}
          className="p-2 rounded-lg text-gray-300 dark:text-gray-300 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:bg-gray-800/50 dark:hover:bg-gray-800/50 light:hover:bg-gray-200 transition-all duration-300"
        >
          {sidebarCollapsed ? (
            <PanelLeftOpen className="w-5 h-5" />
          ) : (
            <PanelLeftClose className="w-5 h-5" />
          )}
        </button>
        {sidebarCollapsed && <ThemeToggle />}
      </div>

      {/* Logo */}
      <div className={`flex items-center space-x-2 mb-8 px-2 ${sidebarCollapsed ? 'justify-center' : ''}`}>
        <div className="relative">
          <div className="w-8 h-8 bg-sendor rounded-lg flex items-center justify-center animate-float">
            <TrendingUpIcon className="w-5 h-5 text-white" />
          </div>
          <div className="absolute inset-0 w-8 h-8 animate-pulse-neon opacity-50"></div>
        </div>
        {!sidebarCollapsed && (
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-sendor via-sendor-light to-sendor-600 bg-clip-text text-transparent animate-glow">
              Sendor
            </h1>
            <p className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600">Launch fast. Send hard. No brakes.</p>
          </div>
        )}
      </div>

      {/* Menu Items */}
      <nav className="space-y-2">
        {mainMenuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center px-2 py-3' : 'space-x-3 px-4 py-3'} rounded-lg transition-all duration-300 group ${
                activeView === item.id
                  ? 'bg-gradient-to-r from-sendor/20 to-sendor-600/20 text-sendor border border-sendor/40 neon-glow'
                  : 'text-gray-300 dark:text-gray-300 light:text-gray-700 hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-750/50 dark:hover:from-gray-800/50 dark:hover:to-gray-750/50 light:hover:from-gray-200 light:hover:to-gray-300 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:border-sendor/20 border border-transparent'
              }`}
              title={sidebarCollapsed ? item.label : undefined}
            >
              <Icon className={`w-5 h-5 transition-all duration-300 ${
                activeView === item.id ? 'text-sendor' : 'group-hover:text-sendor'
              }`} />
              {!sidebarCollapsed && <span className="font-medium">{item.label}</span>}
            </button>
          );
        })}

        {/* More Section - Expanded */}
        {!sidebarCollapsed && (
          <div>
            <button
              onClick={() => setMoreExpanded(!moreExpanded)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
                isMoreItemActive
                  ? 'bg-gradient-to-r from-sendor/20 to-sendor-600/20 text-sendor border border-sendor/40 neon-glow'
                  : 'text-gray-300 dark:text-gray-300 light:text-gray-700 hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-750/50 dark:hover:from-gray-800/50 dark:hover:to-gray-750/50 light:hover:from-gray-200 light:hover:to-gray-300 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:border-sendor/20 border border-transparent'
              }`}
            >
              <MoreHorizontal className={`w-5 h-5 transition-all duration-300 ${
                isMoreItemActive ? 'text-sendor' : 'group-hover:text-sendor'
              }`} />
              <span className="font-medium flex-1 text-left">More</span>
              {moreExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>

            {/* More Sub-items */}
            {moreExpanded && (
              <div className="ml-4 mt-2 space-y-1">
                {moreMenuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveView(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 group ${
                        activeView === item.id
                          ? 'bg-gradient-to-r from-sendor/30 to-sendor-600/30 text-sendor border border-sendor/40'
                          : 'text-gray-400 dark:text-gray-400 light:text-gray-600 hover:bg-gradient-to-r hover:from-gray-800/30 hover:to-gray-750/30 dark:hover:from-gray-800/30 dark:hover:to-gray-750/30 light:hover:from-gray-200/50 light:hover:to-gray-300/50 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:border-sendor/20 border border-transparent'
                      }`}
                    >
                      <Icon className={`w-4 h-4 transition-all duration-300 ${
                        activeView === item.id ? 'text-sendor' : 'group-hover:text-sendor'
                      }`} />
                      <span className="font-medium text-sm">{item.label}</span>
                    </button>
                  );
                })}
                
                {/* Social Icons */}
                <div className="mt-4 pt-2 border-t border-gray-700/50 dark:border-gray-700/50 light:border-gray-300">
                  <div className="flex justify-center space-x-2">
                    {socialIcons.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.id}
                          href={social.url}
                          className="p-2 rounded-lg text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-sendor hover:bg-gray-800/30 dark:hover:bg-gray-800/30 light:hover:bg-gray-200/50 transition-all duration-300"
                          title={social.label}
                        >
                          <Icon className="w-4 h-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* More Dropdown - Collapsed */}
        {sidebarCollapsed && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`w-full flex items-center justify-center px-2 py-3 rounded-lg transition-all duration-300 group ${
                  isMoreItemActive
                    ? 'bg-gradient-to-r from-sendor/20 to-sendor-600/20 text-sendor border border-sendor/40 neon-glow'
                    : 'text-gray-300 dark:text-gray-300 light:text-gray-700 hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-750/50 dark:hover:from-gray-800/50 dark:hover:to-gray-750/50 light:hover:from-gray-200 light:hover:to-gray-300 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:border-sendor/20 border border-transparent'
                }`}
                title="More"
              >
                <EllipsisVertical className={`w-5 h-5 transition-all duration-300 ${
                  isMoreItemActive ? 'text-sendor' : 'group-hover:text-sendor'
                }`} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" className="bg-gray-800 dark:bg-gray-800 light:bg-white border-gray-700 dark:border-gray-700 light:border-gray-300 text-white dark:text-white light:text-gray-900">
              {moreMenuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <DropdownMenuItem
                    key={item.id}
                    onClick={() => setActiveView(item.id)}
                    className={`flex items-center space-x-2 cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-700 light:hover:bg-gray-100 ${
                      activeView === item.id ? 'bg-gray-700 dark:bg-gray-700 light:bg-gray-100 text-sendor' : ''
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </DropdownMenuItem>
                );
              })}
              <DropdownMenuSeparator className="bg-gray-700 dark:bg-gray-700 light:bg-gray-300" />
              <div className="flex justify-center space-x-2 p-2">
                {socialIcons.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.id}
                      href={social.url}
                      className="p-1 rounded text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-sendor transition-colors"
                      title={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </nav>

      {/* Connect Wallet */}
      <div className={`absolute bottom-4 left-4 right-4 ${sidebarCollapsed ? 'left-2 right-2' : ''}`}>
        <Button className={`w-full bg-gradient-to-r from-sendor to-sendor-600 hover:from-sendor-light hover:to-sendor-dark text-white font-bold transition-all duration-300 transform hover:scale-105 neon-glow ${
          sidebarCollapsed ? 'p-2' : ''
        }`}>
          {sidebarCollapsed ? <User className="w-5 h-5" /> : 'Connect Wallet'}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
