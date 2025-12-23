import { Bookmark, Folder, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DashboardLayout } from '@/components/layout/DashboardLayout';

const savedItems = [
  {
    id: 1,
    title: 'Advanced React Patterns',
    type: 'article',
    savedAt: '2 hours ago',
    tags: ['react', 'patterns'],
  },
  {
    id: 2,
    title: 'TypeScript Best Practices 2024',
    type: 'article',
    savedAt: '1 day ago',
    tags: ['typescript'],
  },
  {
    id: 3,
    title: 'Building Scalable APIs',
    type: 'video',
    savedAt: '3 days ago',
    tags: ['api', 'backend'],
  },
  {
    id: 4,
    title: 'CSS Grid Complete Guide',
    type: 'tutorial',
    savedAt: '1 week ago',
    tags: ['css', 'frontend'],
  },
];

const collections = [
  { name: 'React Resources', count: 12, color: 'bg-blue-500' },
  { name: 'Backend Tutorials', count: 8, color: 'bg-green-500' },
  { name: 'Design Inspiration', count: 5, color: 'bg-purple-500' },
  { name: 'Career Tips', count: 3, color: 'bg-orange-500' },
];

export default function Saved() {
  return (
    <DashboardLayout>
      <div className="flex-1 p-6 space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
          <Bookmark className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Saved</h1>
          <p className="text-muted-foreground">Your bookmarked resources and collections</p>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Saved</TabsTrigger>
          <TabsTrigger value="collections">Collections</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="space-y-4">
            {savedItems.map((item) => (
              <Card key={item.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                      <Bookmark className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">{item.type}</Badge>
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">#{tag}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {item.savedAt}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="collections" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2">
            {collections.map((collection) => (
              <Card key={collection.name} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className={`h-12 w-12 rounded-lg ${collection.color} flex items-center justify-center`}>
                    <Folder className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">{collection.name}</p>
                    <p className="text-sm text-muted-foreground">{collection.count} items</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      </div>
    </DashboardLayout>
  );
}
