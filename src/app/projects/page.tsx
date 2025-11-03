'use client';

import { motion } from 'framer-motion';
import { Code, ExternalLink } from '@/components/icons';
import { Button } from '@/components/button';
import { Card, CardContent } from '@/components/card';
import { Badge } from '@/components/badge';
import { ThemeToggle } from '@/components/theme-toggle';

const Projects = () => {
  const projects = [
    {
      title: "CurioKids – Question-Answering Chatbot",
      period: "04/2025 – 05/2025",
      description: "Developed a chatbot using OpenAI, LangChain, and Supabase to deliver analogy-based responses. Deployed on a cloud environment for scalable performance.",
      technologies: ["OpenAI", "LangChain", "Supabase", "Cloud Deployment"],
      link: "#"
    },
    {
      title: "Automatic Laundry System – Embedded IoT Project",
      period: "11/2024 – 12/2024",
      description: "Designed an embedded system with sensors (LDR, rain, servo, fan) for weather-adaptive automation. Integrated with IoT principles for remote monitoring potential.",
      technologies: ["Embedded Systems", "IoT", "Sensors", "Automation"],
      link: "#"
    },
    {
      title: "Cloud-Integrated Communication Website",
      period: "02/2024 – 06/2024",
      description: "Built a WordPress site hosted on a cloud server, highlighting analogy-based communication techniques for parents and children.",
      technologies: ["WordPress", "Cloud Hosting", "Web Development"],
      link: "#"
    },
    {
      title: "AI-Powered Cloud Infrastructure Monitor",
      period: "07/2024 – 09/2024",
      description: "Created a monitoring solution using AI to predict infrastructure issues and automatically scale resources based on demand patterns.",
      technologies: ["AI/ML", "Cloud Monitoring", "Predictive Analytics", "Auto-scaling"],
      link: "#"
    },
    {
      title: "Containerized Microservices Architecture",
      period: "05/2024 – 07/2024",
      description: "Designed and deployed a containerized microservices application using Docker and Kubernetes for improved scalability and maintainability.",
      technologies: ["Docker", "Kubernetes", "Microservices", "DevOps"],
      link: "#"
    },
    {
      title: "Automated Security Compliance Checker",
      period: "03/2024 – 05/2024",
      description: "Developed a tool to automatically scan cloud infrastructure for security vulnerabilities and compliance issues according to industry standards.",
      technologies: ["Security", "Compliance", "Automation", "Cloud Security"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-foreground"
            >
              TNA
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="capitalize text-muted-foreground hover:text-primary">
                Home
              </a>
              <a href="/about" className="capitalize text-muted-foreground hover:text-primary">
                About
              </a>
              <a href="/projects" className="capitalize text-primary font-medium">
                Projects
              </a>
              <a href="/skills" className="capitalize text-muted-foreground hover:text-primary">
                Skills
              </a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Code className="text-primary" size={32} />
              <h1 className="text-3xl font-bold text-foreground">Projects</h1>
              <div className="h-px bg-border flex-grow"></div>
            </div>
            
            <p className="text-lg text-foreground mb-12 max-w-3xl">
              Here are some of my recent projects that showcase my skills in cloud computing, 
              infrastructure automation, and software development.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex-grow">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {project.period}
                        </Badge>
                      </div>
                      <p className="text-foreground text-sm mb-4 flex-grow">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="default" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-auto">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="p-0 h-auto flex items-center gap-1 text-primary hover:text-primary/90 text-sm font-medium"
                        >
                          View Project <ExternalLink size={14} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="py-8 bg-muted-foreground text-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Tanisha Natalia Aritonang. All rights reserved.</p>
          <p className="text-muted-foreground/70 mt-2">Aspiring Cloud Engineer</p>
        </div>
      </footer>
    </div>
  );
};

export default Projects;