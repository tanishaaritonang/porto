'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
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
    title: "Computer Technology Student | Frontend & Full-Stack Web Developer | AI Enthusiast | DevOps Practitioner",
    email: "tanishaartng@gmail.com",
    location: "Medan, North Sumatera",
    linkedin: "https://www.linkedin.com/in/tanisha-natalia-aritonang-99763a26a",
    phone: "081396700208"
  };

  const experiences = [
  {
    title: "Matriculation Assistant",
    company: "Institut Teknologi Del",
    period: "August 2024",
    description: [
      "Assisted in facilitating matriculation for ~500 new students.",
      "Supported academic sessions, attendance, and classroom coordination.",
      "Taught introductory programming and digital literacy (Microsoft Word, etc.)."
    ]
  },
  {
    title: "Vice Chair of KPU HIMATEK",
    company: "Institut Teknologi Del",
    period: "September 2025",
    description: [
      "Assisted the Chair in leading the Election Commission of HIMATEK.",
      "Organized and supervised the student election process.",
      "Ensured fairness, transparency, and documentation integrity."
    ]
  },
  {
    title: "PILMAPRES Participant",
    company: "Institut Teknologi Del",
    period: "2024 / 2025",
    description: [
      "Selected as a representative for the campus in the PILMAPRES competition.",
      "Prepared a proposal for a chatbot analogy project as the scientific writing component.",
      "Presented a topic on poverty within the Sustainable Development Goals (SDG) framework."
    ]
  }
];


  const organizations = [
    {
      title: "Leader of Education Division",
      organization: "HIMATEK – Institut Teknologi Del",
      period: "August 2025 – Present",
      description: [
        "Coordinated training programs, workshops, and academic development.",
        "Designed initiatives to improve technical and academic performance."
      ]
    },
    {
      title: "Leader of Competition Division",
      organization: "HIMATEK – Institut Teknologi Del",
      period: "August 2024 – Present",
      description: [
        "Organized technical workshops and collaboration with lecturers.",
        "Mentored junior members and promoted continuous learning."
      ]
    }
  ];

  const projects = [
    {
      title: "AI-Supported Adaptive Learning System for Computer Networks",
      period: "2025",
      description: "Developed adaptive learning platform using fine-tuned LLaMA 3.1 8B model. Built modular LoRA-based SFT scripts and containerized the system for cloud deployment.",
      technologies: ["Python", "FastAPI", "JavaScript", "Next.js", "Docker", "Hugging Face", "PyTorch", "PostgreSQL"],
      link: "https://github.com/tanishaaritonang/ADLv2",
      thumbnail: "/adl.png"
    },
    {
      title: "End-to-End DevOps Project with GitOps Implementation",
      period: "2025",
      description: "Built production-ready GitOps pipeline for automated Kubernetes deployments. Implemented Infrastructure as Code with Terraform, continuous delivery with ArgoCD, and self-healing mechanisms for high availability.",
      technologies: ["Terraform", "Kubernetes", "ArgoCD", "Helm", "Docker", "Minikube", "Python", "Flask", "GitOps"],
      link: "https://github.com/tanishaaritonang/end-to-end-devOps",
      thumbnail: "/argo.png"
    },
    {
      title: "Chatbot for Education Platform using Analogy-Based Learning",
      period: "2024",
      description: "Built analogy-driven chatbot with semantic retrieval and contextual reasoning. Deployed via Docker with a lightweight web interface.",
      technologies: ["OpenAI API", "LangChain", "Supabase", "Docker"],
      link: "https://github.com/tanishaaritonang/PA2_Product",
      thumbnail: "/chatbot.png"
    },
    {
      title: "Infrastructure Automation Project using Ansible",
      period: "2024",
      description: "Automated multi-server LAN setup including DNS, mail, load balancing, and proxy servers. Achieved faster provisioning and consistent deployments with reusable playbooks.",
      technologies: ["Ansible", "Linux", "Bind9", "Postfix/Dovecot", "HAProxy", "Squid Proxy", "Bash"],
      link: "#",
      thumbnail: "/ansible.png"
    },
    {
      title: "Embedded System – Automatic Laundry System",
      period: "2024",
      description: "Designed automatic laundry system with weather-adaptive roof and drying fan using Arduino, servo motor, rain sensor, LDR, relay, and DC fan.",
      technologies: ["Arduino", "C/C++", "Servo Motor", "Rain Sensor", "LDR", "Relay", "DC Fan", "LCD"],
      link: "#",
      thumbnail: "/sistan.png"
    },
    {
      title: "Genshin Impact Character Viewer",
      period: "2024",
      description: "Built a simple web application for browsing Genshin Impact character information using PHP and JSON data from Paimon.moe.",
      technologies: ["PHP", "CSS", "JSON"],
      link: "https://github.com/D3TeknologiKomputer/quiz-web-api-tanishaaritonang",
      thumbnail: "/genshin.png"
    },
    {
      title: "Website on the Use of Analogies in Parent-Child Communication",
      period: "2024",
      description: "Developed educational site with responsive UI and interactive content. Optimized usability and content management workflows.",
      technologies: ["WordPress", "Elementor"],
      link: "#",
      
    }
  ];

  const certifications = [
    {
      text: "PILMAPRES 2025 – Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
      link: "/1753187039000 (1).jpg"
    },
    {
      text: "Microsoft Certified: Azure AI Fundamentals (2025)",
      link: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=455&cvid=becO9kh/V3cTX4ESpPrNLQ=="
    },
    {
      text: "AWS Cloud Practitioner Essentials (2025)",
      link: "https://drive.google.com/file/d/1MQncQXG89xEDTeX_26HCjmhC--X918ej/view?usp=sharing"
    },
    {
      text: "AI Agents Fundamentals – Hugging Face (2025)",
      link: "https://drive.google.com/file/d/1QVI8h-sYcZ4I7exIuHAwIIkejraeULXN/view"
    },
    {
      text: "LLM Course Unit 3: Fine-Tuning Language Models – Hugging Face (2025)",
      link: "https://drive.google.com/file/d/1S9OVBzebmwIHvF0jV94j0CcMMy6JEffh/view?usp=drive_link"
    },
    {
      text: "HCIA-Storage V5.0, HCIA-Datacom V1.0, HCIA-Cloud Computing V5.5 – Huawei (2025)",
      link: [
        "https://drive.google.com/file/d/1K0Lo566CZTno4vDQtoAI_ABt4lStvBu8/view?usp=sharing",
        "https://drive.google.com/file/d/1zI0HMMUti-ghQKTzNW81_JUyqzdsp4nq/view?usp=drive_link",
        "https://drive.google.com/file/d/1G5m8U9y6f5gxGWQjkon1cqI89I0RPQZS/view?usp=sharing"
      ]
    },
    {
      text: "Short Class: UI/UX Design Fundamental – Myskills (2024)",
      link: "#"
    },
    {
      text: "Complete Linux Training Course – Udemy (2025)",
      link: "https://ude.my/UC-d69ccfe5-d0ec-4de1-92a6-9289047e0cc1"
    },
    {
      text: "Go Programming Language – Great Learning (2025)",
      link: "https://drive.google.com/file/d/1WCduPnysKP5KktHVVdAiCaSa28n7Ypj5/view?usp=drive_link"
    },
    {
      text: "Del Debate Competition 2025 – British Parliamentary Debate, UPT Bahasa IT Del (2024)",
      link: "/1747013211944.jpg"
    }
  ];

  const skills = {
    "Programming & Frameworks": ["Python", "JavaScript", "C", "Next.js"],
    "AI & Machine Learning": ["LoRA", "SFT", "Hugging Face", "OpenAI API", "LangChain", "Ollama"],
    "Databases": ["Supabase", "PostgreSQL", "MySQL", "Vector DBs", "JSON/CSV"],
    "DevOps & Cloud": ["Docker", "Kubernetes", "Terraform", "AWS", "CI/CD Pipelines"],
    "Web Development": ["WordPress (Elementor, PHP)", "HTML", "CSS", "REST API"],
    "Tools": ["Git", "GitHub", "Weights & Biases (wandb)", "Shell Scripting"]
  };

  const softSkills = [
    "Analytical Thinking", "Problem Solving", "Collaboration", "Adaptability", "Communication", "Ownership"
  ];

  const education = [
    {
      degree: "Diploma in Computer Engineering",
      school: "Institut Teknologi Del – Sitoluama, Laguboti, Toba Samosir",
      period: "Aug 2023 – Sep 2026 (Expected)",
      additionalInfo: "GPA: 3.80 / 4.00"
    },
    {
      degree: "Senior High School, Science Stream",
      school: "SMAN 1 Girsang Sipangan Bolon – Parapat",
      period: "2020 – 2023"
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
              Tanisha
            </motion.div>
            <div className="hidden md:flex items-center space-x-4" role="menubar">
              <div className="flex space-x-8">
                {['about', 'experience', 'organization', 'projects', 'skills', 'education', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setActiveSection(item);
                      const element = document.getElementById(item);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`capitalize ${activeSection === item ? 'text-primary font-medium' : 'text-muted-foreground hover:text-primary'}`}
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
                className="text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded"
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
                {['about', 'experience', 'organization', 'projects', 'skills', 'education', 'contact'].map((item) => (
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
                    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === item ? 'bg-accent text-primary' : 'text-muted-foreground hover:text-primary hover:bg-accent'
                      }`}
                    role="menuitem"
                    aria-label={`Navigate to ${item} section`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
                <div className="px-3 py-2 rounded-md text-base font-medium w-full text-left text-muted-foreground hover:text-primary hover:bg-accent">
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
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
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
                className="text-lg text-foreground mb-8 max-w-lg"
              >
                Motivated Computer Technology student specializing in cloud computing, IT infrastructure, and Software Development.
                Passionate about designing and managing scalable, secure, and efficient cloud-based systems and applications.
                Hands-on experience with cloud platforms, DevOps tools, and AI integration to optimize modern infrastructure solutions.              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a href={`mailto:${profile.email}`} className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-blue-600 active:bg-blue-700 dark:hover:bg-blue-400 dark:active:bg-blue-500 px-4 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
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
                    <div className="bg-muted w-full h-full rounded-full flex items-center justify-center">
                      <span className="text-5xl text-muted-foreground">TNA</span>
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
                <Phone className="text-primary" size={24} />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">{profile.phone}</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-lg text-foreground leading-relaxed">
                Motivated Computer Technology student specializing in frontend and full-stack web development.
                Passionionate about building interactive, user-centric web applications with scalable and maintainable architecture.
                Experienced in integrating AI features and deploying modern web apps using DevOps and cloud technologies.
                Strong skills in translating user needs into responsive and efficient interfaces.
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

      {/* Organization Section */}
      <section id="organization" className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-primary" size={32} />
              <h2 className="text-3xl font-bold text-foreground">Organization Experience</h2>
              <div className="h-px bg-border flex-grow"></div>
            </div>
            <div className="space-y-8">
              {organizations.map((org, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                        <h3 className="text-xl font-bold text-foreground">{org.title}</h3>
                        <Badge variant="default" className="text-sm">
                          {org.period}
                        </Badge>
                      </div>
                      <p className="text-lg text-primary mb-3">{org.organization}</p>
                      <ul className="space-y-2">
                        {org.description.map((desc, i) => (
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
                      {project.thumbnail && (
                        <div className="mb-3">
                          <img
                            src={project.thumbnail}
                            alt={`${project.title} thumbnail`}
                            className="w-full h-32 object-cover rounded-md border border-border"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/placeholder.jpg'; // fallback placeholder
                              target.alt = 'Project thumbnail placeholder';
                            }}
                          />
                        </div>
                      )}
                      <p className="text-foreground text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="default" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      {project.link !== "#" ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-primary hover:text-primary/90 text-sm font-medium"
                        >
                          View Project <ExternalLink size={14} />
                        </a>
                      ) : (
                        <span className="text-muted-foreground text-sm">View Project</span>
                      )}
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
                      {Array.isArray(cert.link) ? (
                        <div>
                          <span>{cert.text}</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {cert.link.map((link, idx) => (
                              <a
                                key={idx}
                                href={link}
                                target={link.startsWith('/') ? "_self" : "_blank"}
                                rel={link.startsWith('/') ? "" : "noopener noreferrer"}
                                className="inline-flex items-center gap-1 text-primary hover:underline text-xs"
                              >
                                Link {idx + 1} <ExternalLink size={10} />
                              </a>
                            ))}
                          </div>
                        </div>
                      ) : cert.link && cert.link !== "#" ? (
                        <a
                          href={cert.link}
                          target={cert.link.startsWith('/') ? "_self" : "_blank"}
                          rel={cert.link.startsWith('/') ? "" : "noopener noreferrer"}
                          className="inline-flex items-center gap-1 text-primary hover:underline"
                        >
                          {cert.text} <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span>{cert.text}</span>
                      )}
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
                        {edu.additionalInfo && (
                          <p className="text-muted-foreground text-sm">{edu.additionalInfo}</p>
                        )}
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

                // Create email using mailto link with all fields pre-filled
                const mailtoLink = `mailto:tanishaartng@gmail.com?subject=${encodeURIComponent(subject + ' from ' + name + ' (' + email + ')')}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message + '\n\n---\nSent from portfolio website')}`;

                try {
                  // Try to open mail client
                  window.location.href = mailtoLink;
                } catch (error) {
                  // If mailto fails, show alert with email content to paste
                  alert(`Failed to open email client. Here's the information to copy:\n\nTo: tanishaartng@gmail.com\nSubject: ${subject + ' from ' + name + ' (' + email + ')'}\nBody:\nName: ${name}\nEmail: ${email}\n\n${message}\n\n---\nSent from portfolio website`);
                }
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
              <div className="pt-4 space-y-4">
                <Button variant="primary" className="w-full md:w-auto px-8 py-3" type="submit">
                  Send Message via Email
                </Button>
                <div className="text-center">
                  <p className="text-foreground text-sm">Or copy and paste email:</p>
                  <div className="flex items-center justify-center mt-2">
                    <span className="bg-card px-4 py-2 rounded-l-lg border border-border text-foreground font-mono text-sm">tanishaartng@gmail.com</span>
                    <button
                      type="button"
                      className="bg-primary text-primary-foreground px-4 py-2 rounded-r-lg border border-l-0 border-border text-sm hover:bg-blue-600 active:bg-blue-700 dark:hover:bg-blue-400 dark:active:bg-blue-500 transition-colors"
                      onClick={() => {
                        navigator.clipboard.writeText('tanishaartng@gmail.com');
                        alert('Email copied to clipboard!');
                      }}
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted-foreground text-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Tanisha Natalia Aritonang. All rights reserved.</p>
          <p className="text-muted-foreground/70 mt-2">IT Enthusiast</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;