import { Users, UserPlus, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DashboardLayout } from '@/components/layout/DashboardLayout';

const following = [
  {
    id: 1,
    name: 'Sarah Chen',
    username: '@sarahchen',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
    bio: 'Frontend Engineer | React enthusiast',
    posts: 156,
    followers: 2400,
  },
  {
    id: 2,
    name: 'Mike Johnson',
    username: '@mikej',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mike',
    bio: 'Full-stack developer | Open source contributor',
    posts: 89,
    followers: 1800,
  },
  {
    id: 3,
    name: 'Emily Davis',
    username: '@emilyd',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emily',
    bio: 'DevOps Engineer | Cloud architecture',
    posts: 234,
    followers: 3200,
  },
  {
    id: 4,
    name: 'Alex Turner',
    username: '@alexturner',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex',
    bio: 'Backend specialist | Go & Rust',
    posts: 67,
    followers: 1500,
  },
];

const suggestions = [
  {
    id: 5,
    name: 'Jessica Lee',
    username: '@jesslee',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jessica',
    reason: 'Followed by Sarah Chen',
  },
  {
    id: 6,
    name: 'David Park',
    username: '@davidp',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david',
    reason: 'Shares similar interests',
  },
];

export default function Following() {
  return (
    <DashboardLayout>
      <div className="flex-1 p-6 space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
          <Users className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Following</h1>
          <p className="text-muted-foreground">Manage your connections</p>
        </div>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search people..." className="pl-10" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Tabs defaultValue="following" className="w-full">
            <TabsList>
              <TabsTrigger value="following">Following</TabsTrigger>
              <TabsTrigger value="followers">Followers</TabsTrigger>
            </TabsList>

            <TabsContent value="following" className="mt-6 space-y-4">
              {following.map((user) => (
                <Card key={user.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="flex items-center gap-4 p-4">
                    <Avatar className="h-14 w-14">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">{user.name}</p>
                        <span className="text-sm text-muted-foreground">{user.username}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{user.bio}</p>
                      <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                        <span>{user.posts} posts</span>
                        <span>{user.followers.toLocaleString()} followers</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Following
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="followers" className="mt-6">
              <div className="text-center py-12 text-muted-foreground">
                <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Your followers will appear here</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <UserPlus className="h-5 w-5" />
                Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {suggestions.map((user) => (
                <div key={user.id} className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{user.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{user.reason}</p>
                  </div>
                  <Button size="sm" variant="secondary">
                    Follow
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
    </DashboardLayout>
  );
}
