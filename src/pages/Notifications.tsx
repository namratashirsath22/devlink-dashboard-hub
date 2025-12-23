import { Bell, Heart, MessageCircle, UserPlus, Sparkles, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DashboardLayout } from '@/components/layout/DashboardLayout';

const notifications = [
  {
    id: 1,
    type: 'upvote',
    user: 'Sarah Chen',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
    message: 'upvoted your resource "React Performance Tips"',
    time: '5 min ago',
    read: false,
  },
  {
    id: 2,
    type: 'comment',
    user: 'Mike Johnson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mike',
    message: 'commented on "TypeScript Best Practices"',
    time: '1 hour ago',
    read: false,
  },
  {
    id: 3,
    type: 'follow',
    user: 'Emily Davis',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emily',
    message: 'started following you',
    time: '3 hours ago',
    read: false,
  },
  {
    id: 4,
    type: 'ai',
    user: 'AI Assistant',
    avatar: '',
    message: 'Found 5 new resources matching your interests',
    time: '1 day ago',
    read: true,
  },
  {
    id: 5,
    type: 'upvote',
    user: 'Alex Turner',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex',
    message: 'upvoted your resource "CSS Grid Mastery"',
    time: '2 days ago',
    read: true,
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case 'upvote':
      return <Heart className="h-4 w-4 text-red-500" />;
    case 'comment':
      return <MessageCircle className="h-4 w-4 text-blue-500" />;
    case 'follow':
      return <UserPlus className="h-4 w-4 text-green-500" />;
    case 'ai':
      return <Sparkles className="h-4 w-4 text-purple-500" />;
    default:
      return <Bell className="h-4 w-4" />;
  }
};

export default function Notifications() {
  return (
    <DashboardLayout>
      <div className="flex-1 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
            <Bell className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Notifications</h1>
            <p className="text-muted-foreground">Stay updated with your activity</p>
          </div>
        </div>
        <Button variant="outline" size="sm">
          <Check className="h-4 w-4 mr-2" />
          Mark all read
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
          <TabsTrigger value="mentions">Mentions</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6 space-y-3">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={`hover:shadow-md transition-shadow cursor-pointer ${
                !notification.read ? 'border-l-4 border-l-primary bg-primary/5' : ''
              }`}
            >
              <CardContent className="flex items-start gap-4 p-4">
                {notification.type === 'ai' ? (
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                ) : (
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={notification.avatar} />
                    <AvatarFallback>{notification.user[0]}</AvatarFallback>
                  </Avatar>
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {getIcon(notification.type)}
                    <span className="font-medium">{notification.user}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                  <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="unread" className="mt-6 space-y-3">
          {notifications
            .filter((n) => !n.read)
            .map((notification) => (
              <Card
                key={notification.id}
                className="hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-primary bg-primary/5"
              >
                <CardContent className="flex items-start gap-4 p-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={notification.avatar} />
                    <AvatarFallback>{notification.user[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      {getIcon(notification.type)}
                      <span className="font-medium">{notification.user}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                    <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="mentions" className="mt-6">
          <div className="text-center py-12 text-muted-foreground">
            <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No mentions yet</p>
          </div>
        </TabsContent>
      </Tabs>
      </div>
    </DashboardLayout>
  );
}
