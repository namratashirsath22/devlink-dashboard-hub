import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Flame, Clock, Star, Users } from 'lucide-react';

interface FeedTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function FeedTabs({ activeTab, onTabChange }: FeedTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-card p-1">
        <TabsTrigger value="trending" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          <Flame className="h-4 w-4" />
          <span className="hidden sm:inline">Trending</span>
        </TabsTrigger>
        <TabsTrigger value="latest" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          <Clock className="h-4 w-4" />
          <span className="hidden sm:inline">Latest</span>
        </TabsTrigger>
        <TabsTrigger value="top" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          <Star className="h-4 w-4" />
          <span className="hidden sm:inline">Top</span>
        </TabsTrigger>
        <TabsTrigger value="following" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          <Users className="h-4 w-4" />
          <span className="hidden sm:inline">Following</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
