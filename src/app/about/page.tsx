'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, GraduationCap, Briefcase, Code, Award } from '@/components/icons';
import { Button } from '@/components/button';
import { Card, CardContent } from '@/components/card';
import { Badge } from '@/components/badge';
import { Avatar, AvatarFallback } from '@/components/avatar';
import { ThemeToggle } from '@/components/theme-toggle';

const About = () => {
  // Data from the resume
  const profile = {
    name: "Tanisha Natalia Aritonang",
    title: "Computer Engineering Undergraduate | Aspiring Cloud Engineer",
    email: "tanishanatrng@gmail.com",
    location: "Medan",
    linkedin: "linkedin.com/in/tanisha-natalia-aritonang-99763a263"
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

  const softSkills = [
    "Problem-Solving", "Collaboration", "Technical Documentation", "Adaptability"
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
              <a href="/" className="capitalize text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
                Home
              </a>
              <a href="/about" className="capitalize text-blue-600 font-medium dark:text-blue-400">
                About
              </a>
              <a href="/projects" className="capitalize text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
                Projects
              </a>
              <a href="/skills" className="capitalize text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
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
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h1>
              <div className="h-px bg-gray-300 dark:bg-gray-600 flex-grow"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <div className="sticky top-32">
                  <div className="flex flex-col items-center text-center">
                    <Avatar src="/foto.jpeg" alt={`${profile.name}'s profile picture`} className="w-48 h-48 mb-6">
                      <AvatarFallback>
                        <div className="bg-gray-200 w-full h-full rounded-full flex items-center justify-center">
                          <span className="text-5xl text-gray-400">TNA</span>
                        </div>
                      </AvatarFallback>
                    </Avatar>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{profile.name}</h2>
                    <p className="text-blue-600 dark:text-blue-400 mb-6">{profile.title}</p>
                    
                    <div className="w-full space-y-4 mb-8">
                      <div className="flex items-center gap-3">
                        <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                        <span className="text-gray-700 dark:text-gray-300">{profile.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                        <span className="text-gray-700 dark:text-gray-300">{profile.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Linkedin className="text-blue-600 dark:text-blue-400" size={20} />
                        <span className="text-gray-700 dark:text-gray-300">{profile.linkedin}</span>
                      </div>
                    </div>
                    
                    <div className="w-full">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Languages</h3>
                      <div className="space-y-2">
                        {languages.map((lang, index) => (
                          <div key={index} className="flex justify-between">
                            <span className="text-gray-700 dark:text-gray-300">{lang.name}</span>
                            <span className="text-gray-600 dark:text-gray-400">{lang.level}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="mb-12">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Professional Summary</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Motivated Computer Technology student specializing in cloud computing, IT infrastructure, and automation. 
                    Passionate about designing and managing scalable, secure, and efficient cloud-based systems. 
                    Hands-on experience with cloud platforms, DevOps tools, and AI integration to optimize modern infrastructure solutions.
                  </p>
                </div>
                
                <div className="mb-12">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
                    Experience
                  </h2>
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
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                              <Badge variant="default" className="bg-blue-100 text-blue-800 text-sm dark:bg-blue-900/50 dark:text-blue-300">
                                {exp.period}
                              </Badge>
                            </div>
                            <p className="text-lg text-blue-600 dark:text-blue-400 mb-3">{exp.company}</p>
                            <ul className="space-y-2">
                              {exp.description.map((desc, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                                  <span className="text-gray-700 dark:text-gray-300">{desc}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                    Education
                  </h2>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card>
                          <CardContent className="p-6 flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-full dark:bg-blue-900/50">
                              <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                              <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.school}</p>
                              <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.period}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Soft Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {softSkills.map((skill, index) => (
                        <span 
                          key={index} 
                          className="text-sm bg-white text-gray-700 px-3 py-1 rounded-full border border-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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

export default About;