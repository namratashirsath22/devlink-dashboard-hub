import { useState } from 'react';
import { Resource } from '@/types/resource';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  ArrowBigUp,
  Bookmark,
  MessageCircle,
  Share2,
  ExternalLink,
  Github,
  FileText,
  Wrench,
  PlayCircle,
  BookOpen,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResourceCardProps {
  resource: Resource;
}

const typeIcons = {
  tutorial: BookOpen,
  github: Github,
  blog: FileText,
  tool: Wrench,
  video: PlayCircle,
};

const typeColors = {
  tutorial: 'bg-accent text-accent-foreground',
  github: 'bg-secondary text-secondary-foreground',
  blog: 'bg-primary/10 text-primary',
  tool: 'bg-muted text-muted-foreground',
  video: 'bg-destructive/10 text-destructive',
};

export function ResourceCard({ resource }: ResourceCardProps) {
  const [isUpvoted, setIsUpvoted] = useState(resource.isUpvoted);
  const [isSaved, setIsSaved] = useState(resource.isSaved);
  const [upvotes, setUpvotes] = useState(resource.upvotes);

  const TypeIcon = typeIcons[resource.type];

  const handleUpvote = () => {
    if (isUpvoted) {
      setUpvotes((prev) => prev - 1);
    } else {
      setUpvotes((prev) => prev + 1);
    }
    setIsUpvoted(!isUpvoted);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <Card className="group transition-all duration-300 hover:shadow-lg hover:border-primary/20 bg-card">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 ring-2 ring-background">
              <AvatarImage src={resource.author.avatar} alt={resource.author.name} />
              <AvatarFallback>{resource.author.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-sm">{resource.author.name}</p>
              <p className="text-xs text-muted-foreground">@{resource.author.username} · {resource.createdAt}</p>
            </div>
          </div>
          <Badge variant="secondary" className={cn('flex items-center gap-1', typeColors[resource.type])}>
            <TypeIcon className="h-3 w-3" />
            <span className="capitalize text-xs">{resource.type}</span>
          </Badge>
        </div>

        {/* Content */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {resource.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
            {resource.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {resource.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              #{tag}
            </Badge>
          ))}
        </div>

        {/* URL Preview */}
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors mb-4 truncate"
        >
          <ExternalLink className="h-3 w-3 flex-shrink-0" />
          <span className="truncate">{resource.url}</span>
        </a>

        {/* Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                'gap-1 h-9 px-3 transition-all',
                isUpvoted && 'text-primary bg-primary/10'
              )}
              onClick={handleUpvote}
            >
              <ArrowBigUp className={cn('h-5 w-5', isUpvoted && 'fill-primary')} />
              <span className="text-sm font-medium">{upvotes}</span>
            </Button>

            <Button variant="ghost" size="sm" className="gap-1 h-9 px-3">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">{resource.comments}</span>
            </Button>
          </div>

          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                'h-9 px-3 transition-all',
                isSaved && 'text-primary bg-primary/10'
              )}
              onClick={handleSave}
            >
              <Bookmark className={cn('h-4 w-4', isSaved && 'fill-primary')} />
            </Button>

            <Button variant="ghost" size="sm" className="h-9 px-3">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
