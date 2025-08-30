# AI FIT 🤖💪

**Transform Your Body With Advanced AI Technology**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-AI_FIT-brightgreen?style=for-the-badge)](https://aifit2.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

> **🚀 [Experience AI FIT Live](https://aifit2.vercel.app/)** - Your personalized AI fitness companion is just one click away!

## Overview

AI FIT is an intelligent fitness platform that leverages cutting-edge AI technology to create personalized workout plans and diet recommendations. Through an interactive voice assistant, users receive customized fitness programs tailored to their specific goals, physical condition, and lifestyle preferences.

## ✨ Key Features

### 🧠 **Smart AI Assistant**
- Interactive voice-powered conversations using Vapi AI
- Natural language processing for understanding fitness goals
- Personalized recommendations based on user input

### 🏋️ **Personalized Workout Plans**
- Custom exercise routines based on fitness level
- Injury-aware program design
- Goal-specific training (weight loss, muscle gain, general fitness)
- Equipment-based customization (home gym, full gym, bodyweight)

### 🍎 **Intelligent Diet Recommendations**
- Personalized meal plans accounting for dietary restrictions
- Allergy-aware nutrition planning
- Balanced nutrition optimization
- Vegetarian and specialized diet support

### 🔐 **Secure Authentication**
- Multiple sign-in options: GitHub, Google, Email/Password
- Powered by Clerk for robust user management
- Secure session handling

### 📊 **Program Management**
- Create and manage multiple fitness programs
- View program gallery with featured plans
- Only latest program remains active
- Track 500+ active users and programs

## 🛠️ Tech Stack

| Category | Technology |
|----------|----------|
| **Frontend** | Next.js 15, React 19, TypeScript |
| **Styling** | Tailwind CSS 4, Shadcn/ui Components |
| **AI Integration** | Gemini AI (Google), Vapi Voice Assistant |
| **Authentication** | Clerk |
| **Database** | Convex |
| **Deployment** | Vercel |

## 📁 Project Structure

```
aifit2/
├── src/
│   ├── app/
│   │   ├── generate-program/
│   │   │   └── page.tsx           # AI program generation page
│   │   ├── profile/
│   │   │   └── page.tsx           # User profile management
│   │   ├── layout.tsx             # Root layout
│   │   ├── page.tsx               # Home page
│   │   └── globals.css            # Global styles
│   ├── components/
│   │   ├── CornerElements.tsx     # UI decorative elements
│   │   ├── Footer.tsx             # Footer component
│   │   ├── Navbar.tsx             # Navigation component
│   │   ├── NoFitnessPlan.tsx      # Empty state component
│   │   └── ProfileHeader.tsx      # Profile header component
│   ├── constants/
│   │   └── index.ts               # App constants
│   ├── lib/
│   │   ├── utils.ts               # Utility functions
│   │   └── vapi.ts                # Vapi AI integration
│   ├── providers/
│   │   └── ConvexClerkProvider.tsx # Auth & DB provider
│   └── middleware.ts              # Route middleware
├── convex/
│   ├── _generated/               # Auto-generated Convex files
│   ├── auth.config.ts           # Authentication configuration
│   ├── http.ts                  # HTTP endpoints
│   ├── plans.ts                 # Fitness plans schema
│   ├── schema.ts                # Database schema
│   └── users.ts                 # User management
├── public/
│   ├── ai-avatar.png            # AI assistant avatar
│   ├── hero-ai.png              # Hero section images
│   ├── hero-ai2.png
│   └── hero-ai3.png
├── components.json              # Shadcn/ui configuration
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies
├── tailwind.config.js           # Tailwind configuration
└── tsconfig.json                # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Convex account
- Clerk account
- Vapi AI account
- Google AI (Gemini) API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hifzaanDev/aifit2.git
   cd aifit2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.local file with required variables
   NEXT_PUBLIC_CONVEX_URL=your_convex_url
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   CLERK_SECRET_KEY=your_clerk_secret
   NEXT_PUBLIC_VAPI_PUBLIC_KEY=your_vapi_key
   GOOGLE_AI_API_KEY=your_gemini_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Visit the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## 📈 Key Statistics

- **10+ Active Users** - Growing community of fitness enthusiasts
- **3min Generation Time** - Fast AI-powered program creation
- **100% Personalized** - Every program tailored to individual needs
- **Multiple Fitness Levels** - Beginner to advanced support

## 🎯 Use Cases

- **Beginners** - Start your fitness journey with guided programs
- **Fitness Enthusiasts** - Optimize existing routines with AI insights
- **Busy Professionals** - Get efficient workouts that fit your schedule
- **Health-Conscious Individuals** - Receive nutrition guidance alongside fitness plans

## 📱 Features in Action

- **Voice Interaction**: Talk naturally with the AI assistant about your fitness goals
- **Smart Recommendations**: Get programs that consider your injuries and limitations
- **Equipment Flexibility**: Programs adapt to your available equipment
- **Dietary Intelligence**: Nutrition plans that respect your allergies and preferences

## 🤝 Connect

**Developer**: Yash Raj

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/yash-raj-59918725b/)
[![GitHub](https://img.shields.io/badge/GitHub-hifzaanDev-181717?style=for-the-badge&logo=github)](https://github.com/YashCooks)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail)](mailto:yraj0600@gmail.com)

---

**Ready to transform your fitness journey?** 

## 🌟 [Start Your AI Fitness Journey Now →](https://aifit2.vercel.app/)

*Built with ❤️ using Next.js, AI, and modern web technologies*
