import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Filter, Briefcase, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';
import { mockJobs, jobCategories, experienceLevels, jobTypes, type Job } from '@/data/mockJobs';

const JobListings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredJobs = useMemo(() => {
    return mockJobs.filter((job: Job) => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLocation = !locationFilter || job.location.toLowerCase().includes(locationFilter.toLowerCase());
      const matchesCategory = !categoryFilter || job.category === categoryFilter;
      const matchesType = !typeFilter || job.type === typeFilter;
      const matchesExperience = !experienceFilter || job.experienceLevel === experienceFilter;

      return matchesSearch && matchesLocation && matchesCategory && matchesType && matchesExperience;
    });
  }, [searchTerm, locationFilter, categoryFilter, typeFilter, experienceFilter]);

  const clearFilters = () => {
    setSearchTerm('');
    setLocationFilter('');
    setCategoryFilter('');
    setTypeFilter('');
    setExperienceFilter('');
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Job</h1>
          <p className="text-xl text-muted-foreground">
            Explore {mockJobs.length} amazing opportunities from top companies
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-6 rounded-2xl mb-8"
        >
          {/* Main Search */}
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Job title, keywords, or company"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 neuro-button"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Location"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="pl-10 h-12 neuro-button"
              />
            </div>
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="h-12 px-6 glass-button"
            >
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </Button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-border"
            >
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="neuro-button">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {jobCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="neuro-button">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  {jobTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                <SelectTrigger className="neuro-button">
                  <SelectValue placeholder="Experience Level" />
                </SelectTrigger>
                <SelectContent>
                  {experienceLevels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>
          )}

          {/* Active Filters */}
          {(searchTerm || locationFilter || categoryFilter || typeFilter || experienceFilter) && (
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {searchTerm && (
                <Badge variant="secondary" className="glass-button">
                  Search: {searchTerm}
                </Badge>
              )}
              {locationFilter && (
                <Badge variant="secondary" className="glass-button">
                  Location: {locationFilter}
                </Badge>
              )}
              {categoryFilter && (
                <Badge variant="secondary" className="glass-button">
                  {categoryFilter}
                </Badge>
              )}
              {typeFilter && (
                <Badge variant="secondary" className="glass-button">
                  {typeFilter}
                </Badge>
              )}
              {experienceFilter && (
                <Badge variant="secondary" className="glass-button">
                  {experienceFilter}
                </Badge>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-xs glass-button"
              >
                Clear All
              </Button>
            </div>
          )}
        </motion.div>

        {/* Results Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-between mb-8"
        >
          <h2 className="text-2xl font-semibold">
            {filteredJobs.length} Jobs Found
          </h2>
          <Select defaultValue="newest">
            <SelectTrigger className="w-48 neuro-button">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="salary-high">Highest Salary</SelectItem>
              <SelectItem value="salary-low">Lowest Salary</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        {/* Job Cards */}
        <div className="space-y-6">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-card hover:shadow-elegant smooth-transition">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2 hover:text-primary cursor-pointer">
                            <Link to={`/jobs/${job.id}`}>{job.title}</Link>
                          </h3>
                          <p className="text-lg text-muted-foreground mb-1">{job.company}</p>
                          <div className="flex items-center text-sm text-muted-foreground mb-3">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                            <span className="mx-2">•</span>
                            <Clock className="h-4 w-4 mr-1" />
                            {new Date(job.postedDate).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge variant="secondary" className="glass-button">
                            {job.type}
                          </Badge>
                          <Badge variant="outline">
                            {job.experienceLevel}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.tags.slice(0, 4).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {job.tags.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{job.tags.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col lg:items-end lg:ml-6 gap-4">
                      <div className="flex items-center text-lg font-semibold text-primary">
                        <DollarSign className="h-5 w-5 mr-1" />
                        {job.salary}
                      </div>
                      <div className="flex gap-3">
                        <Button variant="outline" className="glass-button">
                          Save
                        </Button>
                        <Link to={`/jobs/${job.id}`}>
                          <Button className="neuro-button bg-gradient-primary text-primary-foreground">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-16"
          >
            <Briefcase className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">No jobs found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search criteria or browse all available positions
            </p>
            <Button onClick={clearFilters} className="neuro-button bg-gradient-primary">
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* Load More */}
        {filteredJobs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button 
              variant="outline" 
              size="lg"
              className="glass-button px-8 py-4"
            >
              Load More Jobs
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default JobListings;