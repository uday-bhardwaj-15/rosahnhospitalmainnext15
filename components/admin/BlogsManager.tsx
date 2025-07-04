'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Search, 
  Filter,
  Upload,
  Calendar,
  User,
  Tag,
  FileText
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishedDate: string;
  status: 'draft' | 'published';
  featuredImage: string;
  tags: string[];
  readTime: string;
  views: number;
}

const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Your Ultimate Guide to Health and Wellness',
    content: 'Comprehensive guide to maintaining a healthy lifestyle and preventing diseases...',
    excerpt: 'Learn essential tips for maintaining optimal health and wellness in your daily life.',
    author: 'Dr. Sarah Johnson',
    publishedDate: '2024-01-15',
    status: 'published',
    featuredImage: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    tags: ['Health', 'Wellness', 'Prevention'],
    readTime: '8 min read',
    views: 1247
  },
  {
    id: 2,
    title: 'Acne Care Combo of Cetaphil Oily Skin Cleanse',
    content: 'Learn about effective skincare routines for oily and acne-prone skin...',
    excerpt: 'Discover the best skincare routine for managing acne and oily skin conditions.',
    author: 'Dr. Michael Chen',
    publishedDate: '2024-01-10',
    status: 'published',
    featuredImage: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    tags: ['Skincare', 'Acne', 'Beauty'],
    readTime: '5 min read',
    views: 892
  },
  {
    id: 3,
    title: 'Heart Health Tips for Seniors',
    content: 'Important cardiovascular health advice for older adults...',
    excerpt: 'Essential heart health tips and preventive measures for senior citizens.',
    author: 'Dr. Sanjana Gupta',
    publishedDate: '2024-01-08',
    status: 'draft',
    featuredImage: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    tags: ['Cardiology', 'Seniors', 'Prevention'],
    readTime: '6 min read',
    views: 0
  }
];

const authors = ['Dr. Sarah Johnson', 'Dr. Michael Chen', 'Dr. Sanjana Gupta', 'Dr. James Wilson'];
const categories = ['Health', 'Wellness', 'Prevention', 'Skincare', 'Cardiology', 'Neurology', 'Pediatrics'];

export default function BlogsManager() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(mockBlogPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    author: '',
    status: 'draft' as 'draft' | 'published',
    featuredImage: '',
    tags: [] as string[],
    readTime: ''
  });
  const { toast } = useToast();

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !filterStatus || post.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingPost) {
      // Update existing post
      setBlogPosts(prev => prev.map(post => 
        post.id === editingPost.id 
          ? { 
              ...post, 
              ...formData,
              publishedDate: formData.status === 'published' ? new Date().toISOString().split('T')[0] : post.publishedDate,
              views: post.views
            }
          : post
      ));
      toast({
        title: "Blog Post Updated",
        description: "Blog post has been successfully updated.",
      });
    } else {
      // Add new post
      const newPost: BlogPost = {
        id: Date.now(),
        ...formData,
        publishedDate: formData.status === 'published' ? new Date().toISOString().split('T')[0] : '',
        views: 0
      };
      setBlogPosts(prev => [...prev, newPost]);
      toast({
        title: "Blog Post Created",
        description: "New blog post has been successfully created.",
      });
    }

    // Reset form
    setFormData({
      title: '',
      content: '',
      excerpt: '',
      author: '',
      status: 'draft',
      featuredImage: '',
      tags: [],
      readTime: ''
    });
    setEditingPost(null);
    setIsAddDialogOpen(false);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      author: post.author,
      status: post.status,
      featuredImage: post.featuredImage,
      tags: post.tags,
      readTime: post.readTime
    });
    setIsAddDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setBlogPosts(prev => prev.filter(post => post.id !== id));
    toast({
      title: "Blog Post Deleted",
      description: "Blog post has been successfully deleted.",
      variant: "destructive",
    });
  };

  const togglePublishStatus = (id: number) => {
    setBlogPosts(prev => prev.map(post => 
      post.id === id 
        ? { 
            ...post, 
            status: post.status === 'published' ? 'draft' : 'published',
            publishedDate: post.status === 'draft' ? new Date().toISOString().split('T')[0] : post.publishedDate
          }
        : post
    ));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData(prev => ({ ...prev, featuredImage: imageUrl }));
    }
  };

  const addTag = (tag: string) => {
    if (tag && !formData.tags.includes(tag)) {
      setFormData(prev => ({ ...prev, tags: [...prev.tags, tag] }));
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({ ...prev, tags: prev.tags.filter(tag => tag !== tagToRemove) }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog Posts</h1>
            <p className="text-gray-600">Manage blog content and articles</p>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => {
                setEditingPost(null);
                setFormData({
                  title: '',
                  content: '',
                  excerpt: '',
                  author: '',
                  status: 'draft',
                  featuredImage: '',
                  tags: [],
                  readTime: ''
                });
              }}>
                <Plus className="w-4 h-4 mr-2" />
                New Blog Post
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingPost ? 'Edit Blog Post' : 'Create New Blog Post'}
                </DialogTitle>
                <DialogDescription>
                  {editingPost 
                    ? 'Update the blog post content below.'
                    : 'Fill in the details to create a new blog post.'
                  }
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Enter blog post title"
                  />
                </div>

                <div>
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    rows={2}
                    value={formData.excerpt}
                    onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                    placeholder="Brief description of the blog post..."
                  />
                </div>

                <div>
                  <Label htmlFor="content">Content *</Label>
                  <Textarea
                    id="content"
                    required
                    rows={8}
                    value={formData.content}
                    onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                    placeholder="Write your blog post content here..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="author">Author *</Label>
                    <Select value={formData.author} onValueChange={(value) => setFormData(prev => ({ ...prev, author: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select author" />
                      </SelectTrigger>
                      <SelectContent>
                        {authors.map(author => (
                          <SelectItem key={author} value={author}>{author}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="readTime">Read Time</Label>
                    <Input
                      id="readTime"
                      value={formData.readTime}
                      onChange={(e) => setFormData(prev => ({ ...prev, readTime: e.target.value }))}
                      placeholder="e.g., 5 min read"
                    />
                  </div>
                </div>

                <div>
                  <Label>Featured Image</Label>
                  <div className="mt-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="featured-image-upload"
                    />
                    <label
                      htmlFor="featured-image-upload"
                      className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors"
                    >
                      {formData.featuredImage ? (
                        <img
                          src={formData.featuredImage}
                          alt="Featured"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <div className="text-center">
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">Click to upload featured image</p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                <div>
                  <Label>Tags</Label>
                  <div className="mt-2">
                    <Select onValueChange={addTag}>
                      <SelectTrigger>
                        <SelectValue placeholder="Add tags" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(category => (
                          <SelectItem key={category} value={category}>{category}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {formData.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {formData.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="cursor-pointer" onClick={() => removeTag(tag)}>
                            {tag} ×
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="publish"
                    checked={formData.status === 'published'}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, status: checked ? 'published' : 'draft' }))}
                  />
                  <Label htmlFor="publish">Publish immediately</Label>
                </div>

                <div className="flex justify-end space-x-4">
                  <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingPost ? 'Update Post' : 'Create Post'}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search and Filter */}
        <div className="flex space-x-4 mb-6">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Status</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-video relative">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                      {post.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    {post.publishedDate && (
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">{post.readTime}</span>
                      <span className="text-gray-500">{post.views} views</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleEdit(post)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => togglePublishStatus(post.id)}
                      className={post.status === 'published' ? 'text-orange-600' : 'text-green-600'}
                    >
                      {post.status === 'published' ? 'Unpublish' : 'Publish'}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleDelete(post.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-16">
          <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No blog posts found</h3>
          <p className="text-gray-600 mb-6">
            {searchTerm || filterStatus ? 'Try adjusting your search criteria.' : 'Get started by creating your first blog post.'}
          </p>
          {!searchTerm && !filterStatus && (
            <Button onClick={() => setIsAddDialogOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Create First Post
            </Button>
          )}
        </div>
      )}
    </motion.div>
  );
}