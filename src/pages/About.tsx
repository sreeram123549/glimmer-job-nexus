import { motion } from 'framer-motion';
import { Users, Target, Award, Heart, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '2,500+', color: 'text-blue-500' },
    { icon: Award, label: 'Successful Placements', value: '15,000+', color: 'text-green-500' },
    { icon: Target, label: 'Years of Experience', value: '10+', color: 'text-purple-500' },
    { icon: Heart, label: 'Client Satisfaction', value: '98%', color: 'text-red-500' }
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in every interaction and placement we make.',
      icon: Award
    },
    {
      title: 'Integrity',
      description: 'Honesty and transparency guide all our business relationships.',
      icon: CheckCircle
    },
    {
      title: 'Innovation',
      description: 'We leverage cutting-edge technology to revolutionize recruitment.',
      icon: Target
    },
    {
      title: 'Partnership',
      description: 'We build lasting relationships with both clients and candidates.',
      icon: Users
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      experience: '15+ years in executive recruitment',
      description: 'Former Fortune 500 HR executive with a passion for connecting talent with opportunity.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Technology',
      experience: '12+ years in tech recruitment',
      description: 'Expert in placing top technical talent across startups and enterprise companies.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Client Success Director',
      experience: '10+ years in client relations',
      description: 'Dedicated to ensuring exceptional experiences for both employers and job seekers.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About JobPortal
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              We're a premier staffing consultancy dedicated to connecting exceptional talent 
              with outstanding opportunities across all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs">
                <Button className="neuro-button bg-gradient-primary text-primary-foreground px-8 py-4 glow-effect">
                  Explore Opportunities
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="glass-button px-8 py-4">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by companies and professionals worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card text-center hover:shadow-elegant smooth-transition">
                  <CardContent className="p-8">
                    <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2014, JobPortal began with a simple yet powerful vision: to revolutionize 
                the way companies and professionals connect. What started as a small consultancy has 
                grown into a leading recruitment platform serving clients across the globe.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our journey has been driven by one core belief - that the right match between talent 
                and opportunity can transform careers, companies, and communities. We've built our 
                reputation on delivering exceptional results through personalized service and 
                cutting-edge technology.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're proud to be trusted partners to both Fortune 500 companies and innovative 
                startups, while helping thousands of professionals advance their careers every year.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="neuro-card p-6 hover:shadow-elegant smooth-transition">
                  <div className="text-2xl font-bold text-primary mb-2">2014</div>
                  <p className="text-sm text-muted-foreground">Company Founded</p>
                </div>
                <div className="neuro-card p-6 hover:shadow-elegant smooth-transition">
                  <div className="text-2xl font-bold text-primary mb-2">1,000+</div>
                  <p className="text-sm text-muted-foreground">First Thousand Placements</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="neuro-card p-6 hover:shadow-elegant smooth-transition">
                  <div className="text-2xl font-bold text-primary mb-2">2020</div>
                  <p className="text-sm text-muted-foreground">Digital Platform Launch</p>
                </div>
                <div className="neuro-card p-6 hover:shadow-elegant smooth-transition">
                  <div className="text-2xl font-bold text-primary mb-2">15K+</div>
                  <p className="text-sm text-muted-foreground">Total Successful Matches</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card text-center hover:shadow-elegant smooth-transition h-full">
                  <CardContent className="p-8">
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-muted-foreground">
              Experienced professionals leading with passion and expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card hover:shadow-elegant smooth-transition h-full">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-foreground">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center">{member.name}</h3>
                    <p className="text-primary font-medium text-center mb-2">{member.role}</p>
                    <Badge variant="secondary" className="mb-4 mx-auto block w-fit">
                      {member.experience}
                    </Badge>
                    <p className="text-muted-foreground text-center">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have found their perfect opportunity through our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs">
                <Button size="lg" className="neuro-button bg-white text-primary hover:shadow-glow px-8 py-4">
                  Browse Jobs
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="glass-button text-white border-white hover:bg-white/10 px-8 py-4"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;