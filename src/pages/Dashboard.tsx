import { useState } from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { ResourceCard } from '@/components/dashboard/ResourceCard';
import { AIRecommendations } from '@/components/dashboard/AIRecommendations';
import { TrendingTags } from '@/components/dashboard/TrendingTags';
import { FeedTabs } from '@/components/dashboard/FeedTabs';
import { mockResources, trendingTags, aiRecommendations } from '@/data/mockData';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('trending');

  return (
    <>
      <Helmet>
        <title>Devlink At Hub - Developer Resource Feed</title>
        <meta
          name="description"
          content="Discover, save, and share high-quality developer resources. Curated tutorials, GitHub repos, tools, and AI-powered recommendations."
        />
      </Helmet>

      <SidebarProvider>
        <DashboardSidebar />
        <SidebarInset>
          <DashboardHeader />

          <main className="flex-1 p-4 lg:p-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Feed */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Your Feed</h1>
                  </div>

                  <FeedTabs activeTab={activeTab} onTabChange={setActiveTab} />

                  <div className="space-y-4">
                    {mockResources.map((resource) => (
                      <ResourceCard key={resource.id} resource={resource} />
                    ))}
                  </div>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-6">
                  <AIRecommendations recommendations={aiRecommendations} />
                  <TrendingTags tags={trendingTags} />

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-card border border-border">
                      <p className="text-2xl font-bold text-primary">1.2k</p>
                      <p className="text-sm text-muted-foreground">Resources Saved</p>
                    </div>
                    <div className="p-4 rounded-xl bg-card border border-border">
                      <p className="text-2xl font-bold text-accent-foreground">156</p>
                      <p className="text-sm text-muted-foreground">Following</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default Dashboard;
