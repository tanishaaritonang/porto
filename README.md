# 🧠 Adaptive Computer Network Learning Platform (ADLv2)

An AI-powered platform that adapts computer networking lessons to each student's proficiency level. The system automatically generates learning materials, assessments, and provides real-time feedback — all stored in Supabase and powered by locally-served AI models via Ollama.

## ✨ Overview

ADLv2 delivers personalized learning paths where students progress through pre-tests → adaptive lessons → practice sessions → post-tests. Instructors can upload content and monitor student progress through an intuitive dashboard. All AI processing happens locally for enhanced privacy and low latency.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Database Schema](#-database-schema)
- [Adaptive Learning Flow](#adaptive-learning-flow)
- [AI Integration](#-ai-integration)
- [Development](#-development)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 Features

### 👨‍🏫 **Instructor Capabilities**
- **Module Upload**: Upload text modules on computer networking topics
- **Automated Content Generation**: AI generates Easy/Medium/High level content with corresponding questions
- **Dashboard Analytics**: Monitor student progress, test results, and learning outcomes
- **Content Management**: Review and manage all AI-generated materials

### 👨‍🎓 **Student Experience**
1. **Module Selection**: Choose from AI-generated learning modules
2. **Pre-Assessment**: 30-question diagnostic test to determine starting level
3. **Adaptive Lessons**: Receive level-specific learning materials
4. **Practice Sessions**: Interactive MCQs and short-answer questions with immediate feedback
5. **Post-Assessment**: Comprehensive test to evaluate mastery
6. **Performance Summary**: Detailed report on strengths and areas for improvement

### 🤖 **AI Integration**
- **Local Processing**: All AI operations run via Ollama on localhost
- **Privacy-Focused**: No external API calls or data sharing
- **Fine-Tuned Model**: Custom-tuned TinyLlama for educational content
- **Real-Time Feedback**: Instant evaluation of student responses

---

## 🛠️ Tech Stack

| Component       | Technology                          |
|-----------------|-------------------------------------|
| **Frontend**    | Next.js 14 (App Router), React     |
| **Styling**     | Tailwind CSS, shadcn/ui            |
| **Backend**     | Next.js API Routes                 |
| **Database**    | Supabase (PostgreSQL)              |
| **Authentication** | Supabase Auth                    |
| **AI Inference** | Ollama (local)                    |
| **ORM**         | Drizzle ORM                        |
| **Language**    | TypeScript                         |

---

## 🏗️ Architecture

┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ Frontend │ │ Next.js API │ │ Supabase │
│ (Next.js) │◄──►│ Routes │◄──►│ (PostgreSQL + │
│ │ │ │ │ Auth) │
└─────────────────┘ └─────────┬───────┘ └─────────────────┘
│
┌──────▼───────┐
│ Ollama │
│ (Local) │
└──────────────┘


---

## 🚦 Getting Started

### Prerequisites

- **Node.js** (18.x or later)
- **PNPM** (or npm/yarn)
- **Supabase Account** (or local instance)
- **Ollama** installed with TinyLlama model
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/adl-v2.git
   cd adl-v2

2. **Install dependencies**
    pnpm install

3. **Set up environment variables**
    cp .env.example .env.local

    Edit .env.local with your credentials:
    # Supabase
    NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
    SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

    # Ollama
    OLLAMA_API_URL=http://localhost:11434/api/generate

    # Next.js
    NEXT_PUBLIC_APP_URL=http://localhost:3000

4. **Set up the database**
    - Run the SQL schema from /supabase/migrations in your Supabase SQL editor
    - Or use the Supabase CLI to apply migrations

5. **Start Ollama**
     # Ensure Ollama is running with the model
    ollama serve
    # In another terminal
    ollama pull tinyllama

6. **Run the development server**
    pnpm dev
    Open http://localhost:3000 in your browser.

