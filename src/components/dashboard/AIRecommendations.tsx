import { AIRecommendation } from '@/types/resource';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, ExternalLink, Github, FileText, Wrench, PlayCircle, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AIRecommendationsProps {
  recommendations: AIRecommendation[];
}

const typeIcons = {
  tutorial: BookOpen,
  github: Github,
  blog: FileText,
  tool: Wrench,
  video: PlayCircle,
};

export function AIRecommendations({ recommendations }: AIRecommendationsProps) {
  return (
    <Card className="bg-gradient-to-br from-card to-accent/30 border-primary/20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <div className="p-2 rounded-full bg-primary/10">
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
          AI Recommendations
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Personalized picks based on your interests
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        {recommendations.map((rec) => {
          const TypeIcon = typeIcons[rec.type];
          return (
            <a
              key={rec.id}
              href={rec.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 rounded-lg bg-background/80 hover:bg-background transition-all hover:shadow-md group"
            >
              <div className="flex items-start gap-3">
                <div className={cn(
                  'p-2 rounded-lg bg-primary/10 text-primary',
                  'group-hover:bg-primary group-hover:text-primary-foreground transition-colors'
                )}>
                  <TypeIcon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-1">
                    {rec.title}
                  </h4>
                  <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                    {rec.description}
                  </p>
                  <Badge variant="outline" className="mt-2 text-xs">
                    {rec.reason}
                  </Badge>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </div>
            </a>
          );
        })}
      </CardContent>
    </Card>
  );
}
