import { Hash, Search, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { DashboardLayout } from '@/components/layout/DashboardLayout';

const trendingTopics = [
  { tag: 'react', count: 2847 },
  { tag: 'typescript', count: 2103 },
  { tag: 'nextjs', count: 1856 },
  { tag: 'tailwindcss', count: 1654 },
  { tag: 'nodejs', count: 1432 },
  { tag: 'graphql', count: 1201 },
  { tag: 'docker', count: 987 },
  { tag: 'kubernetes', count: 876 },
];

const categories = [
  { name: 'Frontend', description: 'React, Vue, Angular, and more', count: 1245 },
  { name: 'Backend', description: 'Node.js, Python, Go, Rust', count: 987 },
  { name: 'DevOps', description: 'CI/CD, Docker, Kubernetes', count: 654 },
  { name: 'Mobile', description: 'React Native, Flutter, Swift', count: 543 },
  { name: 'AI/ML', description: 'Machine Learning, LLMs, Data Science', count: 432 },
  { name: 'Design', description: 'UI/UX, Figma, Design Systems', count: 321 },
];

export default function Explore() {
  return (
    <DashboardLayout>
      <div className="flex-1 p-6 space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
          <Hash className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Explore</h1>
          <p className="text-muted-foreground">Discover trending topics and resources</p>
        </div>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search topics, tags, or resources..." className="pl-10" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Trending Topics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {trendingTopics.map((topic) => (
                <Badge
                  key={topic.tag}
                  variant="secondary"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  #{topic.tag}
                  <span className="ml-1 text-xs opacity-70">{topic.count}</span>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Browse by Category</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted cursor-pointer transition-colors"
              >
                <div>
                  <p className="font-medium">{category.name}</p>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
                <Badge variant="outline">{category.count}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      </div>
    </DashboardLayout>
  );
}
