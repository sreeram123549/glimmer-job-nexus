import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { jobCategories, experienceLevels, jobTypes } from '@/data/mockJobs';

const PostJob = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: '',
    salary: '',
    category: '',
    experienceLevel: '',
    description: '',
    requirements: '',
    responsibilities: '',
    benefits: '',
    tags: '',
    applicationDeadline: ''
  });

  const steps = [
    { number: 1, title: "Basic Information" },
    { number: 2, title: "Job Details" },
    { number: 3, title: "Requirements" },
    { number: 4, title: "Review & Publish" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="title" className="text-sm font-medium mb-2 block">
                  Job Title *
                </Label>
                <Input
                  id="title"
                  placeholder="e.g. Senior Full Stack Developer"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="neuro-button"
                />
              </div>
              <div>
                <Label htmlFor="company" className="text-sm font-medium mb-2 block">
                  Company Name *
                </Label>
                <Input
                  id="company"
                  placeholder="e.g. TechCorp Solutions"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="neuro-button"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="location" className="text-sm font-medium mb-2 block">
                  Location *
                </Label>
                <Input
                  id="location"
                  placeholder="e.g. San Francisco, CA or Remote"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="neuro-button"
                />
              </div>
              <div>
                <Label htmlFor="salary" className="text-sm font-medium mb-2 block">
                  Salary Range *
                </Label>
                <Input
                  id="salary"
                  placeholder="e.g. $120,000 - $160,000"
                  value={formData.salary}
                  onChange={(e) => handleInputChange('salary', e.target.value)}
                  className="neuro-button"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label className="text-sm font-medium mb-2 block">Job Type *</Label>
                <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
                  <SelectTrigger className="neuro-button">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {jobTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-sm font-medium mb-2 block">Category *</Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger className="neuro-button">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {jobCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-sm font-medium mb-2 block">Experience Level *</Label>
                <Select value={formData.experienceLevel} onValueChange={(value) => handleInputChange('experienceLevel', value)}>
                  <SelectTrigger className="neuro-button">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    {experienceLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <Label htmlFor="description" className="text-sm font-medium mb-2 block">
                Job Description *
              </Label>
              <Textarea
                id="description"
                placeholder="Provide a detailed job description..."
                rows={6}
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="neuro-button"
              />
            </div>

            <div>
              <Label htmlFor="responsibilities" className="text-sm font-medium mb-2 block">
                Key Responsibilities *
              </Label>
              <Textarea
                id="responsibilities"
                placeholder="List the main responsibilities (one per line)..."
                rows={5}
                value={formData.responsibilities}
                onChange={(e) => handleInputChange('responsibilities', e.target.value)}
                className="neuro-button"
              />
            </div>

            <div>
              <Label htmlFor="applicationDeadline" className="text-sm font-medium mb-2 block">
                Application Deadline *
              </Label>
              <Input
                id="applicationDeadline"
                type="date"
                value={formData.applicationDeadline}
                onChange={(e) => handleInputChange('applicationDeadline', e.target.value)}
                className="neuro-button"
              />
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <Label htmlFor="requirements" className="text-sm font-medium mb-2 block">
                Requirements *
              </Label>
              <Textarea
                id="requirements"
                placeholder="List the job requirements (one per line)..."
                rows={6}
                value={formData.requirements}
                onChange={(e) => handleInputChange('requirements', e.target.value)}
                className="neuro-button"
              />
            </div>

            <div>
              <Label htmlFor="benefits" className="text-sm font-medium mb-2 block">
                Benefits & Perks
              </Label>
              <Textarea
                id="benefits"
                placeholder="List the benefits and perks (one per line)..."
                rows={5}
                value={formData.benefits}
                onChange={(e) => handleInputChange('benefits', e.target.value)}
                className="neuro-button"
              />
            </div>

            <div>
              <Label htmlFor="tags" className="text-sm font-medium mb-2 block">
                Skills & Tags
              </Label>
              <Input
                id="tags"
                placeholder="e.g. React, Node.js, TypeScript, AWS (comma separated)"
                value={formData.tags}
                onChange={(e) => handleInputChange('tags', e.target.value)}
                className="neuro-button"
              />
              <div className="flex flex-wrap gap-2 mt-3">
                {formData.tags.split(',').filter(tag => tag.trim()).map((tag) => (
                  <Badge key={tag.trim()} variant="outline">
                    {tag.trim()}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Job Preview</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium">{formData.title || 'Job Title'}</h4>
                  <p className="text-muted-foreground">{formData.company || 'Company Name'}</p>
                  <p className="text-sm text-muted-foreground">{formData.location || 'Location'}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{formData.type || 'Job Type'}</Badge>
                  <Badge variant="outline">{formData.experienceLevel || 'Experience Level'}</Badge>
                  <Badge variant="outline">{formData.category || 'Category'}</Badge>
                </div>

                <div>
                  <span className="text-lg font-semibold text-primary">
                    {formData.salary || 'Salary Range'}
                  </span>
                </div>

                {formData.description && (
                  <div>
                    <h5 className="font-medium mb-2">Description</h5>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {formData.description}
                    </p>
                  </div>
                )}

                {formData.tags && (
                  <div>
                    <h5 className="font-medium mb-2">Skills</h5>
                    <div className="flex flex-wrap gap-2">
                      {formData.tags.split(',').filter(tag => tag.trim()).slice(0, 5).map((tag) => (
                        <Badge key={tag.trim()} variant="outline" className="text-xs">
                          {tag.trim()}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="neuro-button bg-gradient-primary text-primary-foreground px-12 glow-effect"
              >
                <Upload className="h-5 w-5 mr-2" />
                Publish Job
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Your job will be reviewed and published within 24 hours
              </p>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Link to="/" className="inline-block mb-6">
            <Button variant="ghost" className="glass-button">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Post a Job</h1>
          <p className="text-xl text-muted-foreground">
            Find the perfect candidate for your open position
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                    currentStep >= step.number
                      ? 'bg-primary border-primary text-primary-foreground'
                      : 'border-border text-muted-foreground'
                  }`}
                >
                  {currentStep > step.number ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <span>{step.number}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-24 h-0.5 ml-4 transition-all duration-300 ${
                      currentStep > step.number ? 'bg-primary' : 'bg-border'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">{steps[currentStep - 1].title}</h2>
            <p className="text-muted-foreground">Step {currentStep} of {steps.length}</p>
          </div>
        </motion.div>

        {/* Form Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>{steps[currentStep - 1].title}</CardTitle>
            </CardHeader>
            <CardContent className="pb-8">
              {renderStepContent()}
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-between mt-8"
        >
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="glass-button px-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          {currentStep < 4 ? (
            <Button
              onClick={nextStep}
              className="neuro-button bg-gradient-primary text-primary-foreground px-6"
            >
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : null}
        </motion.div>
      </div>
    </div>
  );
};

export default PostJob;