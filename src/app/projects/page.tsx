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
      title: "AI-Supported Adaptive Learning System for Computer Networks",
      period: "2025",
      description: "Developed adaptive learning platform using fine-tuned LLaMA 3.1 8B model. Built modular LoRA-based SFT scripts and containerized the system for cloud deployment.",
      technologies: ["Python", "FastAPI", "JavaScript", "Next.js", "Docker", "Hugging Face", "PyTorch", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Chatbot for Education Platform using Analogy-Based Learning",
      period: "2024",
      description: "Built analogy-driven chatbot with semantic retrieval and contextual reasoning. Deployed via Docker with a lightweight web interface.",
      technologies: ["OpenAI API", "LangChain", "Supabase", "Docker"],
      link: "#"
    },
    {
      title: "Website on the Use of Analogies in Parent-Child Communication",
      period: "2024",
      description: "Developed educational site with responsive UI and interactive content. Optimized usability and content management workflows.",
      technologies: ["WordPress", "Elementor"],
      link: "#"
    },
    {
      title: "Infrastructure Automation Project using Ansible",
      period: "2024",
      description: "Automated multi-server LAN setup including DNS, mail, load balancing, and proxy servers. Achieved faster provisioning and consistent deployments with reusable playbooks.",
      technologies: ["Ansible", "Linux", "Bind9", "Postfix/Dovecot", "HAProxy", "Squid Proxy", "Bash"],
      link: "#"
    },
    {
      title: "Embedded System – Automatic Laundry System",
      period: "2024",
      description: "Designed automatic laundry system with weather-adaptive roof and drying fan using Arduino, servo motor, rain sensor, LDR, relay, and DC fan.",
      technologies: ["Arduino", "C/C++", "Servo Motor", "Rain Sensor", "LDR", "Relay", "DC Fan", "LCD"],
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
              Here are some of my recent projects that showcase my skills in frontend and full-stack web development,
              AI integration, DevOps, and infrastructure automation.
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