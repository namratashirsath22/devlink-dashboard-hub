import { TrendingTag } from '@/types/resource';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp } from 'lucide-react';

interface TrendingTagsProps {
  tags: TrendingTag[];
}

export function TrendingTags({ tags }: TrendingTagsProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <div className="p-2 rounded-full bg-accent">
            <TrendingUp className="h-4 w-4 text-accent-foreground" />
          </div>
          Trending Tags
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge
              key={tag.name}
              variant={index < 3 ? 'default' : 'outline'}
              className="cursor-pointer hover:scale-105 transition-transform"
            >
              #{tag.name}
              <span className="ml-1 text-xs opacity-70">{tag.count}</span>
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
