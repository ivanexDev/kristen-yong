# Agentic Coding Guidelines - kristen-yong

This document provides essential information for AI agents operating in this repository. Adhere to these guidelines to ensure consistency and quality.

## 🎭 1. Project Context & Product Domain

**The World:** This is the official website for Kristen Yong, an author of dark, emotional danmei fantasy. The flagship story is *"The Frost and The Flame"*, set in an eternal winter kingdom inspired by Joseon Korea.
**The Vibe:** Ice, fire, winter palaces, secrets, spiritual folklore, and intense romance. 
**The Design Direction:** This is NOT a generic marketing site or a standard modern dashboard. It is an immersive, dramatic archive. We reject standard defaults (e.g., white rounded cards, generic blue buttons, standard blog grids).

## 🎨 2. Visual Signature & Color World

Do NOT use default tailwind colors (e.g., `blue-500`, `gray-100`). Always use the project's semantic color variables defined in `src/app/globals.css`.

- **`--ink` (`#0C2C3D`)**: The deep night, cold stone, and ink on parchment. Used as the primary background (`bg-ink`) for the void and coldness.
- **`--hanji` (`#F2EAD3`)**: Traditional Korean paper. Used for primary text or surfaces that simulate reading a physical scroll (`hanji-surface`).
- **`--gold` (`#D2C69C`)**: Dim candlelight in the snow. Used for subtle borders, elegant typography, and interactive hover states.
- **`--cinnabar` (`#8B2323`)**: Red lacquer, imperial seals, or blood on snow. Used strictly for high-emphasis elements (dates, categories, drop caps).
- **Typography:** The custom font `asiatiyca` (via `.font-asiatiyca`) is strictly for giant headers (Hero, Character Names, Chronicle Titles) to provide a literary, Asian-inspired touch. Body text uses `serif`.

### Signature Elements (Avoid Generic Defaults)
- **Traditional Borders:** Use the `.border-traditional` class for frames and cards. It creates a subtle, double gold border instead of modern `box-shadow` cards.
- **Imperial Seals (Categories/Badges):** Instead of standard horizontal pill badges, we use vertical text (`[writing-mode:vertical-rl]`) with a `bg-cinnabar` background to simulate an ancient stamped seal.
- **Drop Caps:** For heavy reading sections (like `/chronicles/[slug]`), the first letter of the first paragraph is styled as a giant red drop cap (`first-letter:text-7xl first-letter:text-cinnabar`) to evoke an old manuscript.

## 🏛️ 3. Next.js Best Practices & Architecture

### Images & Media
- **STRICT RULE:** Never use the native `<img>` tag.
- Always use Next.js `<Image>` from `next/image`.
- Provide explicit `width` and `height`, or use `fill` within a relatively positioned container to prevent Cumulative Layout Shift (CLS).
- Use the `priority` prop for images "Above the Fold".

### Navigation
- **STRICT RULE:** Never use native `<a>` tags for internal routing.
- Always use Next.js `<Link>` from `next/link` to ensure prefetching and SPA-like transitions.

### Rendering & SEO
- **Static Site Generation (SSG):** Dynamic routes that consume static local data (e.g., `/character/[name]` or `/chronicles/[slug]`) MUST export the `generateStaticParams()` function to pre-render the entire site at build time.
- **Dynamic SEO:** All dynamic pages must use the `generateMetadata()` function to ensure proper title and description tags for social sharing.

### Local Mock Data (Pre-CMS)
- We currently rely on local mock data in `src/data/characters.data.ts` and `src/data/chronicles.data.ts`.
- If a new feature requires data that will eventually come from a CMS (like Contentful), you must first create the data architecture in the `src/data/` folder and strictly type it with a TypeScript `interface`.

## 🛠 4. Build, Lint, and Test Commands

This project uses **pnpm** as the package manager.

- **Development**: `pnpm run dev` (uses Turbopack)
- **Production Build**: `pnpm run build`
- **Start Production**: `pnpm run start`
- **Linting**: `pnpm run lint`
- **Type Checking**: `pnpm exec tsc --noEmit`

*Note: There is currently no testing framework configured.*

## 💻 5. Code Style & Conventions

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

### 🏷 TypeScript & Types
- **Strict Mode**: `strict: true` is enabled. Ensure all new code is fully typed.
- **Interfaces vs Types**: Prefer `interface` for object definitions and `type` for unions/others.
- **Explicit Types**: Avoid `any`. Define interfaces for data structures (e.g., `Chronicle`).
