import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Clock, 
  DollarSign, 
  Users, 
  Bookmark,
  Share2,
  Building,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { mockJobs } from '@/data/mockJobs';

const JobDetails = () => {
  const { id } = useParams();
  const job = mockJobs.find(j => j.id === id);

  if (!job) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
          <Link to="/jobs">
            <Button className="neuro-button bg-gradient-primary">
              Back to Jobs
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link to="/jobs">
            <Button variant="ghost" className="glass-button">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Jobs
            </Button>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h1 className="text-3xl font-bold mb-3">{job.title}</h1>
                      <div className="flex items-center text-lg text-muted-foreground mb-4">
                        <Building className="h-5 w-5 mr-2" />
                        {job.company}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Posted {new Date(job.postedDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          Apply by {new Date(job.applicationDeadline).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" size="icon" className="glass-button">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="glass-button">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-6">
                    <Badge variant="secondary" className="glass-button px-3 py-1">
                      {job.type}
                    </Badge>
                    <Badge variant="outline" className="px-3 py-1">
                      {job.experienceLevel}
                    </Badge>
                    <Badge variant="outline" className="px-3 py-1">
                      {job.category}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-2xl font-bold text-primary">
                      <DollarSign className="h-6 w-6 mr-1" />
                      {job.salary}
                    </div>
                    <Button 
                      size="lg"
                      className="neuro-button bg-gradient-primary text-primary-foreground px-8 glow-effect"
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Job Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">Job Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">Key Responsibilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">Benefits & Perks</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent-glow mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills Tags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">Required Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="px-3 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Apply */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="glass-card sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Apply</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full neuro-button bg-gradient-primary text-primary-foreground glow-effect"
                  >
                    Apply Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full glass-button"
                  >
                    Save Job
                  </Button>
                  <Separator />
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Job Type:</span>
                      <span className="font-medium">{job.type}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Experience:</span>
                      <span className="font-medium">{job.experienceLevel}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Category:</span>
                      <span className="font-medium">{job.category}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Posted:</span>
                      <span className="font-medium">
                        {new Date(job.postedDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">About {job.company}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {job.company} is a leading company in the {job.category.toLowerCase()} industry, 
                    committed to innovation and excellence.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>500-1000 employees</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>Multiple locations</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Similar Jobs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Similar Jobs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockJobs
                    .filter(j => j.id !== job.id && j.category === job.category)
                    .slice(0, 3)
                    .map((similarJob) => (
                      <Link key={similarJob.id} to={`/jobs/${similarJob.id}`}>
                        <div className="neuro-card p-4 hover:shadow-elegant smooth-transition cursor-pointer">
                          <h4 className="font-medium mb-1 hover:text-primary">
                            {similarJob.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            {similarJob.company}
                          </p>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">
                              {similarJob.location}
                            </span>
                            <Badge variant="outline" className="text-xs">
                              {similarJob.type}
                            </Badge>
                          </div>
                        </div>
                      </Link>
                    ))}
                  <Link to="/jobs">
                    <Button variant="outline" size="sm" className="w-full glass-button">
                      View All Jobs
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;