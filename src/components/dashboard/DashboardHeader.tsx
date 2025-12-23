import { SidebarTrigger } from '@/components/ui/sidebar';
import { SearchBar } from './SearchBar';
import { ShareResourceDialog } from './ShareResourceDialog';
import { Button } from '@/components/ui/button';
import { Bell, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export function DashboardHeader() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center gap-4 px-4 lg:px-6">
        <SidebarTrigger className="lg:hidden" />
        
        <div className="flex-1 max-w-2xl">
          <SearchBar />
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-destructive text-destructive-foreground text-xs flex items-center justify-center">
              3
            </span>
          </Button>

          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <ShareResourceDialog />
        </div>
      </div>
    </header>
  );
}
