'use client';

import { motion } from 'framer-motion';
import { Award, Code } from '@/components/icons';
import { Card, CardContent } from '@/components/card';
import { Badge } from '@/components/badge';
import { ThemeToggle } from '@/components/theme-toggle';

const Skills = () => {
  const skills = {
    "Programming & Frameworks": ["Python", "JavaScript", "C", "Next.js"],
    "AI & Machine Learning": ["LoRA", "SFT", "Hugging Face", "OpenAI API", "LangChain", "Ollama"],
    "Databases": ["Supabase", "PostgreSQL", "MySQL", "Vector DBs", "JSON/CSV"],
    "DevOps & Cloud": ["Docker", "Kubernetes", "Terraform", "AWS", "CI/CD Pipelines"],
    "Web Development": ["WordPress (Elementor, PHP)", "HTML", "CSS", "REST API"],
    "Tools": ["Git", "GitHub", "Weights & Biases (wandb)", "Shell Scripting"]
  };

  const certifications = [
    "PILMAPRES 2025 – Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    "Microsoft Certified: Azure AI Fundamentals (2025)",
    "AWS Cloud Practitioner Essentials (2025)",
    "AI Agents Fundamentals – Hugging Face (2025)",
    "LLM Course Unit 3: Fine-Tuning Language Models – Hugging Face (2025)",
    "HCIA-Storage V5.0, HCIA-Datacom V1.0, HCIA-Cloud Computing V5.5 – Huawei (2025)",
    "Short Class: UI/UX Design Fundamental – Myskills (2024)",
    "Complete Linux Training Course – Udemy (2025)",
    "Go Programming Language – Great Learning (2025)",
    "Del Debate Competition 2025 – British Parliamentary Debate, UPT Bahasa IT Del (2024)"
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
              <a href="/projects" className="capitalize text-muted-foreground hover:text-primary">
                Projects
              </a>
              <a href="/skills" className="capitalize text-primary font-medium">
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
              <Award className="text-primary" size={32} />
              <h1 className="text-3xl font-bold text-foreground">Skills & Certifications</h1>
              <div className="h-px bg-border flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Technical Skills</h2>
                <div className="space-y-8">
                  {Object.entries(skills).map(([category, skillList], index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-foreground mb-3 text-lg">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, i) => (
                          <span
                            key={i}
                            className="text-sm bg-card text-foreground px-3 py-1.5 rounded-full border border-border"
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
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Award className="text-primary" size={24} />
                  Certifications
                </h2>
                <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                  <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                    {certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="text-foreground text-sm py-3 border-b border-border last:border-0"
                      >
                        <div className="flex items-start">
                          <div className="mr-3 mt-1 flex-shrink-0">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          </div>
                          <div>{cert}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Code className="text-primary" size={24} />
                    Core Competencies
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Frontend & Full-Stack Web Development",
                      "AI Integration & LLMs",
                      "Cloud Architecture & Deployment",
                      "DevOps & CI/CD Pipelines",
                      "Infrastructure Automation",
                      "Performance Optimization",
                      "Database Management",
                      "Collaboration & Communication"
                    ].map((competency, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex items-center">
                            <div className="mr-3 flex-shrink-0">
                              <div className="w-3 h-3 bg-primary rounded-full"></div>
                            </div>
                            <span className="text-foreground">{competency}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
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

export default Skills;