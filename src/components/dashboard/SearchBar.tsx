import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Sparkles } from 'lucide-react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className={`
        relative flex items-center gap-2 p-1 rounded-full 
        bg-card border-2 transition-all duration-300
        ${isFocused ? 'border-primary shadow-lg shadow-primary/20' : 'border-border'}
      `}>
        <div className="flex items-center flex-1 pl-4">
          <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
          <Input
            type="text"
            placeholder='Search resources or try "Firebase tutorials for beginners"'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
          />
        </div>
        <Button 
          type="submit" 
          size="sm" 
          className="rounded-full px-6 gap-2"
        >
          <Sparkles className="h-4 w-4" />
          AI Search
        </Button>
      </div>
    </form>
  );
}
