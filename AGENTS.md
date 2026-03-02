# Agentic Coding Guidelines - kristen-yong

This document provides essential information for AI agents operating in this repository. Adhere to these guidelines to ensure consistency and quality.

## 🛠 Build, Lint, and Test Commands

This project uses **pnpm** as the package manager.

- **Development**: `pnpm run dev` (uses Turbopack)
- **Production Build**: `pnpm run build`
- **Start Production**: `pnpm run start`
- **Linting**: `pnpm run lint`
- **Type Checking**: `pnpm exec tsc --noEmit`

*Note: There is currently no testing framework (Jest/Vitest/Playwright) configured in this project.*

## 🎨 Code Style & Conventions

### 📦 Imports
- **Path Aliases**: Always use absolute imports with the `@/` prefix (e.g., `import { Header } from "@/components/Header"`).
- **Groupings**:
  1. React and Next.js built-ins.
  2. External libraries.
  3. Absolute imports (`@/*`).
  4. Relative imports (only if necessary, but absolute is preferred).

### ⚛️ React Components
- **Definition**: Prefer arrow functions for components: `export const MyComponent = () => { ... }`.
- **Exports**: Use **named exports** for components in `src/components`. Use **default exports** for Next.js pages/layouts in `src/app`.
- **File Naming**: Use PascalCase for component files (e.g., `Header.tsx`).
- **Hooks**: Keep hooks at the top of the component. Use standard React 19 hooks.

### 🏷 TypeScript & Types
- **Strict Mode**: `strict: true` is enabled in `tsconfig.json`. Ensure all new code is fully typed.
- **Interfaces vs Types**: Prefer `interface` for object definitions and `type` for unions/others.
- **Location**: Define types close to where they are used. If shared, place them in a relevant `types/` directory or at the top of the component file.
- **Explicit Types**: Avoid `any`. Define interfaces for data structures (e.g., character data).

### 💅 Styling
- **Tailwind CSS**: Use Tailwind CSS for all styling. Avoid custom CSS files unless necessary for complex animations (check `src/app/animations.css`).
- **Responsive Design**: Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, etc.).
- **Colors**: Use the project's color palette (e.g., `#0C2C3Dff`, `#D2C69Cff` as seen in `Header.tsx`).

### 🔠 Naming Conventions
- **Components**: PascalCase (e.g., `Characters.tsx`).
- **Utilities/Hooks**: camelCase (e.g., `normalizeName.ts`, `useMyHook.ts`).
- **Constants**: UPPER_SNAKE_CASE (e.g., `CHARACTERS`).
- **Folders**: Lowercase or kebab-case.

### 📁 Project Structure
- `src/app`: App Router pages, layouts, and global styles.
- `src/components`: Reusable UI components.
- `src/data`: Static data files and constants.
- `src/utils`: Helper functions.

### 🚨 Error Handling
- Use Next.js `error.tsx` for route-level error boundaries.
- Use `try/catch` for async operations and provide user-friendly error messages or fallbacks.

## 🚀 AI Agent Instructions
- **Proactiveness**: If you add a new data structure, ensure it has a corresponding TypeScript interface.
- **Consistency**: Mimic the existing component structure. Check `src/components/Header.tsx` as a reference for UI components.
- **Modern Standards**: This project uses Next.js 15 and React 19. Leverage modern features like Server Components by default; use `'use client'` only when necessary for interactivity.
