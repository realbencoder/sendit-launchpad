
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="w-9 h-9 p-0 transition-all duration-300 hover:bg-gray-800/50 hover:scale-110 light:hover:bg-blue-100 light:hover:shadow-md"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-yellow-400 transition-all duration-300 hover:text-yellow-300" />
      ) : (
        <Moon className="w-4 h-4 text-slate-600 transition-all duration-300 hover:text-slate-800" />
      )}
    </Button>
  );
};

export default ThemeToggle;
