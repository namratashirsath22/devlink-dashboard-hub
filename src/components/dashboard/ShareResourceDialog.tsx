import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plus, Link, Sparkles, X } from 'lucide-react';
import { toast } from 'sonner';

const suggestedTags = ['React', 'Firebase', 'AI', 'TypeScript', 'Cloud', 'Frontend', 'Backend', 'Tools'];

export function ShareResourceDialog() {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [type, setType] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyzeUrl = async () => {
    if (!url) return;
    setIsAnalyzing(true);
    // Simulate AI analysis
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setTitle('Auto-generated title from URL analysis');
    setDescription('AI-powered description based on the content of the linked resource.');
    setSelectedTags(['React', 'Frontend']);
    setType('tutorial');
    setIsAnalyzing(false);
    toast.success('URL analyzed successfully!');
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Resource shared successfully!');
    setOpen(false);
    setUrl('');
    setTitle('');
    setDescription('');
    setSelectedTags([]);
    setType('');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
          <Plus className="h-4 w-4" />
          Share Resource
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[540px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Share a Developer Resource</DialogTitle>
          <DialogDescription>
            Share valuable tutorials, repos, tools, or articles with the community.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          {/* URL Input with AI Analysis */}
          <div className="space-y-2">
            <Label htmlFor="url">Resource URL</Label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Link className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="url"
                  placeholder="https://example.com/resource"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Button
                type="button"
                variant="secondary"
                onClick={handleAnalyzeUrl}
                disabled={!url || isAnalyzing}
                className="gap-2"
              >
                <Sparkles className="h-4 w-4" />
                {isAnalyzing ? 'Analyzing...' : 'AI Analyze'}
              </Button>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Give it a descriptive title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="What makes this resource valuable?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>

          {/* Type */}
          <div className="space-y-2">
            <Label>Resource Type</Label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tutorial">📚 Tutorial</SelectItem>
                <SelectItem value="github">🐙 GitHub Repo</SelectItem>
                <SelectItem value="blog">📝 Blog Post</SelectItem>
                <SelectItem value="tool">🔧 Tool</SelectItem>
                <SelectItem value="video">🎬 Video</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <Label>Tags</Label>
            <div className="flex flex-wrap gap-2">
              {suggestedTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? 'default' : 'outline'}
                  className="cursor-pointer transition-all hover:scale-105"
                  onClick={() => toggleTag(tag)}
                >
                  {selectedTags.includes(tag) && <X className="h-3 w-3 mr-1" />}
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={!url || !title}>
              Share Resource
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
