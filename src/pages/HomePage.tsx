import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Upload, 
  Briefcase, 
  Building, 
  TrendingUp,
  Sparkles,
  Globe,
  Code,
  Palette,
  Heart,
  Zap,
  Star,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent } from '@/components/ui/card';
import { popularLocations } from '@/data/mockJobs';

const HomePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [isRemote, setIsRemote] = useState(false);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchTerm) params.append('search', searchTerm);
    if (location) params.append('location', location);
    if (isRemote) params.append('remote', 'true');
    navigate(`/jobs?${params.toString()}`);
  };

  const handleUploadResume = () => {
    // TODO: Implement resume upload functionality
    console.log('Upload resume clicked');
  };

  const popularCategories = [
    { name: 'Frontend', icon: Code, color: 'bg-blue-500' },
    { name: 'Backend', icon: Building, color: 'bg-green-500' },
    { name: 'Design', icon: Palette, color: 'bg-purple-500' },
    { name: 'Product', icon: Heart, color: 'bg-red-500' },
    { name: 'DevOps', icon: Zap, color: 'bg-yellow-500' },
    { name: 'Remote', icon: Globe, color: 'bg-cyan-500' },
  ];

  const stats = [
    { label: 'Active Jobs', value: '12,000+', icon: Briefcase },
    { label: 'Companies', value: '2,500+', icon: Building },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer',
      company: 'Tech Corp',
      content: 'Found my dream job within 2 weeks! The AI recommendations were spot on.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Product Manager',
      company: 'StartupXYZ',
      content: 'The platform made job hunting so much easier. Love the fresh job alerts!',
      rating: 5
    },
    {
      name: 'Emily Johnson',
      role: 'UX Designer',
      company: 'Design Studio',
      content: 'Best job portal I\'ve used. Clean interface and great opportunities.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Shapes Background */}
      <div className="absolute inset-0 -z-10">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      {/* Hero Section with Gradient Background */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-primary/10 to-accent/20" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-aspire bg-clip-text text-transparent leading-tight">
              Discover Your Next Big Opportunity.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Instantly find jobs posted in the last 24 hours — all in one place.
            </p>
            <p className="text-lg md:text-xl mt-2 max-w-2xl mx-auto">
              <span className="font-semibold bg-gradient-primary bg-clip-text text-transparent">
                Powered by AI. Designed for dreamers.
              </span>
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Card className="glass-card border-white/20 backdrop-blur-xl max-w-4xl mx-auto">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  {/* Job Title Input */}
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Job title, keywords, or company"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 h-12 border-white/30 bg-white/50 backdrop-blur-sm"
                      onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    />
                  </div>

                  {/* Location Select */}
                  <div className="relative flex-1">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger className="pl-10 h-12 border-white/30 bg-white/50 backdrop-blur-sm">
                        <SelectValue placeholder="Location" />
                      </SelectTrigger>
                      <SelectContent>
                        {popularLocations.map((loc) => (
                          <SelectItem key={loc} value={loc}>
                            {loc}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Remote Toggle */}
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="remote"
                      checked={isRemote}
                      onCheckedChange={setIsRemote}
                    />
                    <label htmlFor="remote" className="text-sm font-medium">
                      Remote
                    </label>
                  </div>

                  {/* Search Button */}
                  <Button
                    onClick={handleSearch}
                    className="h-12 px-8 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Search Jobs
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              onClick={handleUploadResume}
              variant="outline"
              className="h-14 px-8 glass-button border-white/30 hover:bg-white/20 text-lg"
            >
              <Upload className="h-5 w-5 mr-2" />
              Upload Resume
            </Button>
            <Button
              onClick={() => navigate('/jobs')}
              className="h-14 px-8 bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg"
            >
              <TrendingUp className="h-5 w-5 mr-2" />
              Browse All Jobs
            </Button>
          </motion.div>

          {/* Popular Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <p className="text-sm text-muted-foreground mb-4">Popular Categories:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {popularCategories.map((category) => (
                <Badge
                  key={category.name}
                  variant="outline"
                  className="glass-button border-white/30 hover:bg-white/20 cursor-pointer px-4 py-2 text-sm hover:shadow-glow transition-all duration-300"
                  onClick={() => navigate(`/jobs?category=${category.name.toLowerCase()}`)}
                >
                  <category.icon className="h-4 w-4 mr-2" />
                  {category.name}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {stats.map((stat) => (
              <Card key={stat.label} className="glass-card border-white/20 hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 glow-effect">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Trusted by Job Seekers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands who have found their dream jobs through Aspire
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              >
                <Card className="glass-card border-white/20 h-full hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center mr-3">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="floating-shape opacity-20"></div>
          <div className="floating-shape opacity-20"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Aspire Higher?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have found their perfect opportunity through Aspire
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/signup')}
                size="lg"
                className="h-14 px-8 bg-white text-primary hover:shadow-glow transition-all duration-300"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Get Started Free
              </Button>
              <Button 
                onClick={() => navigate('/post-job')}
                variant="outline" 
                size="lg"
                className="h-14 px-8 glass-button text-white border-white/30 hover:bg-white/10"
              >
                <Building className="h-5 w-5 mr-2" />
                Post a Job
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;