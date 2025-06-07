
import { Home, Plus, User, Users, Palette, GraduationCap, LifeBuoy, ChevronDown, ChevronRight, MoreHorizontal, PanelLeftClose, PanelLeftOpen, HelpCircle, Twitter, MessageCircle, EllipsisVertical, TrendingUpIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
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
    <div className={`fixed left-0 top-16 h-full glass-effect backdrop-blur-xl border-r border-sendor/20 p-4 transition-all duration-300 z-20 ${
      sidebarCollapsed ? 'w-20' : 'w-64'
    }`}>
      {/* Toggle Button */}
      <div className="flex justify-end items-center mb-6">
        <button
          onClick={handleToggleSidebar}
          className="p-2.5 rounded-xl text-gray-300 hover:text-sendor hover:bg-sendor/10 transition-all duration-300 sendor-border"
        >
          {sidebarCollapsed ? (
            <PanelLeftOpen className="w-5 h-5" />
          ) : (
            <PanelLeftClose className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Logo */}
      <div className={`flex items-center space-x-3 mb-8 px-2 ${sidebarCollapsed ? 'justify-center' : ''}`}>
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-sendor to-sendor-600 rounded-2xl flex items-center justify-center sendor-glow">
            <TrendingUpIcon className="w-6 h-6 text-white" />
          </div>
          <div className="absolute -inset-1 bg-gradient-to-br from-sendor/20 to-sendor-600/20 rounded-2xl blur-sm"></div>
        </div>
        {!sidebarCollapsed && (
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-sendor via-sendor-light to-sendor-600 bg-clip-text text-transparent">
              sendor.fun
            </h1>
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
              className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center px-3 py-4' : 'space-x-3 px-4 py-3.5'} rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                activeView === item.id
                  ? 'bg-gradient-to-r from-sendor/15 to-sendor-600/15 text-sendor sendor-border sendor-glow'
                  : 'text-gray-300 hover:bg-gradient-to-r hover:from-sendor/8 hover:to-sendor-600/8 hover:text-sendor border-2 border-transparent hover:border-sendor/20'
              }`}
              title={sidebarCollapsed ? item.label : undefined}
            >
              <Icon className={`w-5 h-5 transition-all duration-300 ${
                activeView === item.id ? 'text-sendor' : 'group-hover:text-sendor'
              }`} />
              {!sidebarCollapsed && <span className="font-semibold">{item.label}</span>}
              {activeView === item.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-sendor/5 to-transparent rounded-2xl"></div>
              )}
            </button>
          );
        })}

        {/* More Section - Expanded */}
        {!sidebarCollapsed && (
          <div>
            <button
              onClick={() => setMoreExpanded(!moreExpanded)}
              className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                isMoreItemActive
                  ? 'bg-gradient-to-r from-sendor/15 to-sendor-600/15 text-sendor sendor-border sendor-glow'
                  : 'text-gray-300 hover:bg-gradient-to-r hover:from-sendor/8 hover:to-sendor-600/8 hover:text-sendor border-2 border-transparent hover:border-sendor/20'
              }`}
            >
              <MoreHorizontal className={`w-5 h-5 transition-all duration-300 ${
                isMoreItemActive ? 'text-sendor' : 'group-hover:text-sendor'
              }`} />
              <span className="font-semibold flex-1 text-left">More</span>
              {moreExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>

            {/* More Sub-items */}
            {moreExpanded && (
              <div className="ml-4 mt-3 space-y-2">
                {moreMenuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveView(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                        activeView === item.id
                          ? 'bg-gradient-to-r from-sendor/20 to-sendor-600/20 text-sendor sendor-border'
                          : 'text-gray-400 hover:bg-gradient-to-r hover:from-sendor/10 hover:to-sendor-600/10 hover:text-sendor border-2 border-transparent hover:border-sendor/15'
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
                <div className="mt-4 pt-3 border-t border-gray-700/50">
                  <div className="flex justify-center space-x-3">
                    {socialIcons.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.id}
                          href={social.url}
                          className="p-2.5 rounded-xl text-gray-400 hover:text-sendor hover:bg-sendor/10 transition-all duration-300 border-2 border-transparent hover:border-sendor/20"
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
                className={`w-full flex items-center justify-center px-3 py-4 rounded-2xl transition-all duration-300 group ${
                  isMoreItemActive
                    ? 'bg-gradient-to-r from-sendor/15 to-sendor-600/15 text-sendor sendor-border sendor-glow'
                    : 'text-gray-300 hover:bg-gradient-to-r hover:from-sendor/8 hover:to-sendor-600/8 hover:text-sendor border-2 border-transparent hover:border-sendor/20'
                }`}
                title="More"
              >
                <EllipsisVertical className={`w-5 h-5 transition-all duration-300 ${
                  isMoreItemActive ? 'text-sendor' : 'group-hover:text-sendor'
                }`} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" className="neo-card text-white border-0">
              {moreMenuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <DropdownMenuItem
                    key={item.id}
                    onClick={() => setActiveView(item.id)}
                    className={`flex items-center space-x-2 cursor-pointer hover:bg-sendor/10 rounded-xl m-1 ${
                      activeView === item.id ? 'bg-sendor/10 text-sendor' : ''
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </DropdownMenuItem>
                );
              })}
              <DropdownMenuSeparator className="bg-gray-700/30" />
              <div className="flex justify-center space-x-2 p-2">
                {socialIcons.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.id}
                      href={social.url}
                      className="p-2 rounded-xl text-gray-400 hover:text-sendor hover:bg-sendor/10 transition-colors"
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
        <Button className={`w-full bg-gradient-to-r from-sendor via-sendor-500 to-sendor-600 hover:from-sendor-400 hover:to-sendor-700 text-white font-bold transition-all duration-300 transform hover:scale-105 sendor-glow rounded-2xl border-2 border-sendor/30 ${
          sidebarCollapsed ? 'p-3' : 'py-3.5'
        }`}>
          {sidebarCollapsed ? <User className="w-5 h-5" /> : 'Connect Wallet'}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
