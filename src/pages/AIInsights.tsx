import { Sparkles, TrendingUp, Lightbulb, Target, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { DashboardLayout } from '@/components/layout/DashboardLayout';

const insights = [
  {
    id: 1,
    title: 'Your Learning Path',
    description: 'Based on your activity, we recommend focusing on React Server Components next.',
    icon: Target,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Trending in Your Network',
    description: 'TypeScript decorators are getting popular among developers you follow.',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 3,
    title: 'Skill Gap Analysis',
    description: 'You might benefit from exploring testing patterns and CI/CD practices.',
    icon: Lightbulb,
    color: 'from-yellow-500 to-orange-500',
  },
];

const recommendations = [
  { title: 'React 19 Features Deep Dive', match: 95, tags: ['react', 'frontend'] },
  { title: 'Building Type-Safe APIs', match: 88, tags: ['typescript', 'api'] },
  { title: 'Modern CSS Techniques', match: 82, tags: ['css', 'design'] },
  { title: 'Testing React Applications', match: 78, tags: ['testing', 'react'] },
];

const weeklyStats = [
  { label: 'Resources Viewed', value: 47, change: '+12%' },
  { label: 'Time Learning', value: '8.5h', change: '+23%' },
  { label: 'Topics Explored', value: 12, change: '+5%' },
  { label: 'Saves', value: 8, change: '+15%' },
];

export default function AIInsights() {
  return (
    <DashboardLayout>
      <div className="flex-1 p-6 space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">AI Insights</h1>
          <p className="text-muted-foreground">Personalized recommendations powered by AI</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {weeklyStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold">{stat.value}</span>
                <span className="text-xs text-green-500">{stat.change}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {insights.map((insight) => (
          <Card key={insight.id} className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
            <div className={`h-2 bg-gradient-to-r ${insight.color}`} />
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${insight.color} flex items-center justify-center`}>
                  <insight.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold">{insight.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{insight.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            Recommended for You
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recommendations.map((rec) => (
            <div
              key={rec.title}
              className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted cursor-pointer transition-colors"
            >
              <div className="flex-1">
                <p className="font-medium">{rec.title}</p>
                <div className="flex gap-2 mt-2">
                  {rec.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="text-right min-w-24">
                <p className="text-sm font-medium text-primary">{rec.match}% match</p>
                <Progress value={rec.match} className="h-1.5 mt-2" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      </div>
    </DashboardLayout>
  );
}
