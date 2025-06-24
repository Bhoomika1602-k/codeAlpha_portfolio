# Personal Portfolio Application

## Overview

This is a modern full-stack personal portfolio website for Bhoomika Gautam, a fresh graduate with skills in SQL, Python, and web development. The application showcases her professional journey, projects, education, and provides a contact form for potential employers or collaborators to reach out.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns:

- **Frontend**: React-based SPA with TypeScript, built using Vite
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **Component Structure**: Modular React components following atomic design principles
- **UI Framework**: shadcn/ui component library built on Radix UI primitives
- **Styling Strategy**: Utility-first CSS with Tailwind, custom CSS variables for theming
- **Type Safety**: Full TypeScript implementation with strict mode enabled
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Server Framework**: Express.js with TypeScript for type-safe server development
- **API Design**: RESTful endpoints for contact form submission and data retrieval
- **Database Layer**: Drizzle ORM for type-safe database operations
- **Environment Configuration**: Environment-based configuration for different deployment stages

### Database Schema
The application uses a simple PostgreSQL schema with two main tables:

1. **Users Table**: For potential future authentication features
   - `id` (serial primary key)
   - `username` (unique text)
   - `password` (text)

2. **Contacts Table**: For storing contact form submissions
   - `id` (serial primary key)
   - `name` (text, required)
   - `email` (text, required)
   - `message` (text, required)
   - `createdAt` (timestamp with default)

### UI Components
- **Navigation**: Responsive navigation with smooth scrolling and active section highlighting
- **Portfolio Sections**: Hero, About, Projects, Experience, Education, Contact
- **Contact Form**: Validated form with real-time feedback and toast notifications
- **Admin Panel**: Simple admin interface to view contact submissions

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form data validated using Zod schemas
   - POST request sent to `/api/contact` endpoint
   - Server validates and stores data in PostgreSQL
   - Success/error feedback displayed via toast notifications

2. **Contact Data Retrieval**:
   - Admin page fetches contacts via GET `/api/contacts`
   - TanStack Query handles caching and error states
   - Data displayed in responsive card layout

3. **Portfolio Content**:
   - Static content rendered from component data
   - Responsive design adapts to different screen sizes
   - Smooth scrolling navigation between sections

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI/UX**: Radix UI primitives, Lucide React icons, Tailwind CSS
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation
- **Utilities**: clsx, class-variance-authority for conditional styling

### Backend Dependencies
- **Server**: Express.js, TypeScript execution via tsx
- **Database**: Drizzle ORM, Neon serverless PostgreSQL driver
- **Development**: ESBuild for production bundling
- **Validation**: Zod for runtime type validation

### Development Tools
- **Build System**: Vite with React plugin and Replit-specific plugins
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESLint and Prettier configurations
- **Database Migrations**: Drizzle Kit for schema management

## Deployment Strategy

The application is configured for deployment on Replit's infrastructure:

- **Development**: `npm run dev` runs both frontend and backend in development mode
- **Production Build**: 
  - Frontend: Vite builds optimized static assets
  - Backend: ESBuild bundles server code for Node.js execution
- **Database**: Uses Neon PostgreSQL for serverless database hosting
- **Environment**: Replit's autoscale deployment target with PostgreSQL module
- **Port Configuration**: Server runs on port 5000, mapped to external port 80

### Build Process
1. Vite builds React frontend to `dist/public`
2. ESBuild bundles Express server to `dist/index.js`
3. Static assets served by Express in production
4. Database migrations handled via Drizzle Kit

## Changelog

```
Changelog:
- June 23, 2025: Initial setup
- June 23, 2025: Customized portfolio for Bhoomika Gautam with personal information, skills, certifications, and education
- June 23, 2025: Added PostgreSQL database integration for contact form submissions
- June 23, 2025: Created admin page for viewing contact messages
- June 23, 2025: Updated with professional photo
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```