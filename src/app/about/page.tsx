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

  const softSkills = [
    "Analytical Thinking", "Problem Solving", "Collaboration", "Adaptability", "Communication", "Ownership"
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
              Tanisha            </motion.div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="capitalize text-muted-foreground hover:text-primary">
                Home
              </a>
              <a href="/about" className="capitalize text-primary font-medium">
                About
              </a>
              <a href="/projects" className="capitalize text-muted-foreground hover:text-primary">
                Projects
              </a>
              <a href="/skills" className="capitalize text-muted-foreground hover:text-primary">
                Skills
              </a>
              <a href="#contact" className="capitalize text-muted-foreground hover:text-primary">
                Contact
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
              <h1 className="text-3xl font-bold text-foreground">About Me</h1>
              <div className="h-px bg-border flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <div className="sticky top-32">
                  <div className="flex flex-col items-center text-center">
                    <Avatar src="/foto.jpeg" alt={`${profile.name}'s profile picture`} className="w-48 h-48 mb-6">
                      <AvatarFallback>
                        <div className="bg-muted w-full h-full rounded-full flex items-center justify-center">
                          <span className="text-5xl text-muted-foreground">TNA</span>
                        </div>
                      </AvatarFallback>
                    </Avatar>
                    <h2 className="text-2xl font-bold text-foreground mb-2">{profile.name}</h2>
                    <p className="text-primary mb-6">{profile.title}</p>

                    <div className="w-full space-y-4 mb-8">
                      <div className="flex items-center gap-3">
                        <Mail className="text-primary" size={20} />
                        <span className="text-foreground">{profile.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="text-primary" size={20} />
                        <span className="text-foreground">{profile.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="text-primary" size={20} />
                        <span className="text-foreground">{profile.phone}</span>
                      </div>
                    </div>

                    <div className="w-full">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Languages</h3>
                      <div className="space-y-2">
                        {languages.map((lang, index) => (
                          <div key={index} className="flex justify-between">
                            <span className="text-foreground">{lang.name}</span>
                            <span className="text-muted-foreground">{lang.level}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="mb-12">
                  <h2 className="text-xl font-bold text-foreground mb-4">Professional Summary</h2>
                  <p className="text-foreground leading-relaxed">
                    Motivated Computer Technology student specializing in frontend and full-stack web development.
                    Passionionate about building interactive, user-centric web applications with scalable and maintainable architecture.
                    Experienced in integrating AI features and deploying modern web apps using DevOps and cloud technologies.
                    Strong skills in translating user needs into responsive and efficient interfaces.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Briefcase className="text-primary" size={24} />
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
                </div>

                <div className="mb-12">
                  <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Briefcase className="text-primary" size={24} />
                    Organization Experience
                  </h2>
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
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <GraduationCap className="text-primary" size={24} />
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
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Soft Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {softSkills.map((skill, index) => (
                        <span
                          key={index}
                          className="text-sm bg-card text-foreground px-3 py-1 rounded-full border border-border"
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
                      className="bg-primary text-primary-foreground px-4 py-2 rounded-r-lg border border-l-0 border-border text-sm hover:bg-primary/80 transition-colors"
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