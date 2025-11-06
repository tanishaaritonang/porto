'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  MapPin,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  ExternalLink,
  Download
} from '../components/icons';
import { Button } from '../components/button';
import { Card, CardContent } from '../components/card';
import { Badge } from '../components/badge';
import { Avatar, AvatarFallback } from '../components/avatar';
import { ThemeToggle } from '@/components/theme-toggle';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Data from the resume
  const profile = {
    name: "Tanisha Natalia Aritonang",
    title: "Computer Engineering Undergraduate | Aspiring Cloud Engineer",
    email: "tanishaartng@gmail.com",
    location: "Medan",
    linkedin: "https://www.linkedin.com/in/tanisha-natalia-aritonang-99763a26a"
  };

  const experiences = [
    {
      title: "Cloud & Infrastructure Enthusiast",
      company: "HIMATEK (Computer Engineering Association)",
      period: "09/2024 – Present",
      description: [
        "Assisted in implementing cloud-based tools for academic projects and events.",
        "Supported deployment and automation initiatives for internal activities.",
        "Promoted awareness of cloud technology within the student community."
      ]
    },
    {
      title: "Matriculation Assistant",
      company: "Institut Teknologi Del",
      period: "08/2024 – 08/2024",
      description: [
        "Supported academic sessions for ~500 students, ensuring smooth operations.",
        "Assisted with technical setup, basic programming, and digital literacy workshops.",
        "Collaborated with lecturers to coordinate academic resources efficiently."
      ]
    }
  ];

  const projects = [
    {
      title: "CurioKids – Question-Answering Chatbot",
      period: "04/2025 – 05/2025",
      description: "Developed a chatbot using OpenAI, LangChain, and Supabase to deliver analogy-based responses. Deployed on a cloud environment for scalable performance.",
      technologies: ["OpenAI", "LangChain", "Supabase", "Cloud Deployment"]
    },
    {
      title: "Automatic Laundry System – Embedded IoT Project",
      period: "11/2024 – 12/2024",
      description: "Designed an embedded system with sensors (LDR, rain, servo, fan) for weather-adaptive automation. Integrated with IoT principles for remote monitoring potential.",
      technologies: ["Embedded Systems", "IoT", "Sensors", "Automation"]
    },
    {
      title: "Cloud-Integrated Communication Website",
      period: "02/2024 – 06/2024",
      description: "Built a WordPress site hosted on a cloud server, highlighting analogy-based communication techniques for parents and children.",
      technologies: ["WordPress", "Cloud Hosting", "Web Development"]
    }
  ];

  const certifications = [
    "Microsoft Certified: Azure AI Fundamentals – Microsoft",
    "AWS Cloud Practitioner Essentials – Amazon Web Services",
    "Complete Linux Training Course – Udemy",
    "Professional Skill: Internet of Things – MySkill",
    "Short Course: UI/UX Design Fundamentals – MySkill",
    "Huawei ICT Competition National Final (2024–2025) – Huawei",
    "Prompt Engineering with Azure OpenAI Service – GreatNusa",
    "Microsoft Azure AI Fundamentals (AI-900T00-A) – GreatNusa"
  ];

  const skills = {
    "Cloud Platforms": ["AWS", "Azure", "Google Cloud Platform (GCP)"],
    "Infrastructure & DevOps": ["Docker", "Kubernetes", "Terraform", "Ansible", "CI/CD (GitHub Actions, Jenkins)"],
    "Programming & Scripting": ["Python", "Bash", "PowerShell"],
    "System & Network": ["Linux Administration", "Networking (VPC, DNS, Load Balancing)", "Security (IAM, SSL/TLS)"],
    "Monitoring & Automation": ["CloudWatch", "Prometheus", "Grafana"],
    "AI & Integration": ["OpenAI API", "Serverless Functions (AWS Lambda, Cloud Functions)"]
  };

  const softSkills = [
    "Problem-Solving", "Collaboration", "Technical Documentation", "Adaptability"
  ];

  const education = [
    {
      degree: "Bachelor of Computer Technology / Computer Systems Technology",
      school: "Institut Teknologi Del",
      period: "2023 – Present"
    },
    {
      degree: "Science Major",
      school: "SMAN 1 Girsang Sipangan Bolon, Parapat",
      period: ""
    }
  ];

  const languages = [
    { name: "Indonesian", level: "Native" },
    { name: "English", level: "Advanced" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border" role="navigation" aria-label="Main navigation">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-foreground"
              aria-label="Portfolio logo"
            >
              TNA
            </motion.div>
            <div className="hidden md:flex items-center space-x-4" role="menubar">
              <div className="flex space-x-8">
                {['about', 'experience', 'projects', 'skills', 'education', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setActiveSection(item);
                      const element = document.getElementById(item);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`capitalize ${activeSection === item ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-500'}`}
                    aria-label={`Navigate to ${item} section`}
                    role="menuitem"
                  >
                    {item}
                  </button>
                ))}
              </div>
              <ThemeToggle />
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
              role="menu"
              aria-orientation="vertical"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['about', 'experience', 'projects', 'skills', 'education', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setActiveSection(item);
                      setMobileMenuOpen(false);
                      const element = document.getElementById(item);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === item ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-500 hover:bg-gray-50'
                      }`}
                    role="menuitem"
                    aria-label={`Navigate to ${item} section`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
                <div className="px-3 py-2 rounded-md text-base font-medium w-full text-left text-gray-600 hover:text-blue-500 hover:bg-gray-50">
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
              >
                {profile.name}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl md:text-2xl text-blue-600 mb-6"
              >
                {profile.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-gray-600 mb-8 max-w-lg"
              >
                Motivated Computer Technology student specializing in cloud computing, IT infrastructure, and automation.
                Passionate about designing and managing scalable, secure, and efficient cloud-based systems.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a href={`mailto:${profile.email}`} className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <Mail size={20} aria-hidden="true" />
                  Contact Me
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  <Linkedin size={20} aria-hidden="true" />
                  LinkedIn
                </a>
                <a href="/cv.pdf" download="Tanisha_Natalia_Aritonang_CV.pdf" className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <Download size={20} aria-hidden="true" />
                  Download CV
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex justify-center"
              aria-label={`${profile.name}'s profile picture`}
            >
              <div className="relative">
                <Avatar
                  src="/foto.jpeg"
                  alt={`${profile.name}'s profile picture`}
                  className="w-64 h-64 md:w-80 md:h-80"
                >
                  <AvatarFallback>
                    <div className="bg-gray-200 w-full h-full rounded-full flex items-center justify-center">
                      <span className="text-5xl text-gray-400">TNA</span>
                    </div>
                  </AvatarFallback>
                </Avatar>

                <motion.div
                  className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  aria-label="Online status indicator"
                >
                  <div className="w-6 h-6 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-3xl font-bold text-foreground">About Me</h2>
              <div className="h-px bg-border flex-grow"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Mail className="text-primary" size={24} />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">{profile.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-primary" size={24} />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">{profile.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="text-primary" size={24} />
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium text-foreground">{profile.linkedin}</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-lg text-foreground leading-relaxed">
                Motivated Computer Technology student specializing in cloud computing, IT infrastructure, and automation.
                Passionate about designing and managing scalable, secure, and efficient cloud-based systems.
                Hands-on experience with cloud platforms, DevOps tools, and AI integration to optimize modern infrastructure solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-primary" size={32} />
              <h2 className="text-3xl font-bold text-foreground">Experience</h2>
              <div className="h-px bg-border flex-grow"></div>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        <Badge variant="default" className="text-sm">
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-lg text-primary mb-3">{exp.company}</p>
                      <ul className="space-y-2">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-foreground">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Code className="text-primary" size={32} />
              <h2 className="text-3xl font-bold text-foreground">Projects</h2>
              <div className="h-px bg-border flex-grow"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {project.period}
                        </Badge>
                      </div>
                      <p className="text-foreground text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="default" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="p-0 h-auto flex items-center gap-1 text-primary hover:text-primary/90 text-sm font-medium">
                        View Project <ExternalLink size={14} />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-primary" size={32} />
              <h2 className="text-3xl font-bold text-foreground">Skills</h2>
              <div className="h-px bg-border flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Technical Skills</h3>
                <div className="space-y-6">
                  {Object.entries(skills).map(([category, skillList], index) => (
                    <div key={index}>
                      <h4 className="font-medium text-foreground mb-2">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, i) => (
                          <span
                            key={i}
                            className="text-sm bg-card text-foreground px-3 py-1 rounded-full border border-border"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {softSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-sm bg-card text-foreground px-3 py-1 rounded-full border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">Certifications</h3>
                <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
                  {certifications.map((cert, index) => (
                    <div key={index} className="text-foreground text-sm py-2 border-b border-border">
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-primary" size={32} />
              <h2 className="text-3xl font-bold text-foreground">Education</h2>
              <div className="h-px bg-border flex-grow"></div>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <GraduationCap className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                        <p className="text-primary font-medium">{edu.school}</p>
                        <p className="text-muted-foreground text-sm">{edu.period}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              <div className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Languages</h3>
                <div className="flex flex-wrap gap-4">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
                      <span className="font-medium text-foreground">{lang.name}</span>
                      <span className="text-muted-foreground text-sm">({lang.level})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-2">Get In Touch</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
              </p>
            </div>

            <form 
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const target = e.target as HTMLFormElement;
                const formData = new FormData(target);
                const name = formData.get('name') as string;
                const email = formData.get('email') as string;
                const subject = formData.get('subject') as string;
                const message = formData.get('message') as string;
                
                // Send email using mailto link
                const mailtoLink = `mailto:tanishaartng@gmail.com?subject=${encodeURIComponent(subject + ' from ' + name + ' (' + email + ')')}&body=${encodeURIComponent(message + '\n\nSent from portfolio website')}`;
                window.location.href = mailtoLink;
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-input bg-background rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-input bg-background rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-input bg-background rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                  placeholder="How can I help you?"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-input bg-background rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <div className="pt-4">
                <Button variant="primary" className="w-full md:w-auto px-8 py-3" type="submit">
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted-foreground text-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Tanisha Natalia Aritonang. All rights reserved.</p>
          <p className="text-muted-foreground/70 mt-2">Aspiring Cloud Engineer</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;