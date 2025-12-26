# SimpleBit - Fintech Payment Platform

## Overview

SimpleBit is a UAE-based fintech website for a payment processing platform that allows businesses to accept crypto, cards, and Apple Pay with instant AED settlement. The project is built as a full-stack React application with an Express backend, featuring a modern, responsive marketing website with multiple pages including Home, About, Features, Pricing, Case Studies, FAQ, Contact, Privacy Policy, and Terms of Service.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **State Management**: TanStack React Query for server state
- **Animations**: Framer Motion for page transitions and UI animations
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React and React Icons

The frontend follows a page-based architecture where each route maps to a page component in `client/src/pages/`. Reusable UI components live in `client/src/components/ui/` (shadcn components) and custom components in `client/src/components/`.

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Build Tool**: Vite for development, esbuild for production bundling
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` contains database table definitions

The backend serves the API routes and static files. In development, Vite middleware handles hot module replacement. In production, pre-built static files are served from `dist/public`.

### Project Structure
- `client/` - React frontend application
- `server/` - Express backend with routes and storage
- `shared/` - Shared TypeScript types and database schema
- `simplebit-website/` and `website-template/` - Static HTML/Bootstrap reference implementations (not the main app)

### Build and Development
- Development: `npm run dev` starts the Express server with Vite middleware
- Production build: `npm run build` compiles both client (Vite) and server (esbuild)
- Database migrations: `npm run db:push` using Drizzle Kit

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connected via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database queries and schema management

### UI Framework
- **shadcn/ui**: Pre-built accessible React components based on Radix UI primitives
- **Tailwind CSS v4**: Utility-first CSS framework with custom theme variables

### Third-Party Libraries
- **TanStack React Query**: Data fetching and caching
- **Framer Motion**: Animation library for React
- **Zod**: Runtime type validation for forms and API
- **connect-pg-simple**: PostgreSQL session storage (available but not currently implemented)

### CDN Resources (in static templates only)
- Bootstrap 5.3.0
- Font Awesome 6.4.0
- Google Fonts (Poppins, DM Sans)