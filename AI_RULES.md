# AI Development Rules for This Application

This document outlines the core technologies and development guidelines for working on this application.

## Tech Stack Overview

*   **Framework**: React.js for building user interfaces.
*   **Language**: TypeScript for type-safe and robust code.
*   **Routing**: React Router for managing application navigation, with main routes defined in `src/App.tsx`.
*   **Styling**: Tailwind CSS for utility-first styling, ensuring responsive and consistent designs.
*   **UI Components**: `shadcn/ui` for pre-built, accessible, and customizable UI components.
*   **Icons**: `lucide-react` for a comprehensive set of vector icons.
*   **Base UI Primitives**: Radix UI components are available as underlying primitives for `shadcn/ui` and custom components.
*   **Project Structure**: All source code resides in the `src` directory.
*   **Pages**: Application pages are located in `src/pages/`.
*   **Components**: Reusable UI components are located in `src/components/`.
*   **Entry Point**: The main application page is `src/pages/Index.tsx`.

## Library Usage Guidelines

*   **UI Components**:
    *   Prioritize using components from `shadcn/ui` for all standard UI elements (buttons, inputs, cards, etc.).
    *   Do **not** modify `shadcn/ui` component files directly. If a `shadcn/ui` component doesn't meet specific requirements, create a new custom component in `src/components/` that wraps or extends its functionality, or build a new component from scratch using Tailwind CSS and Radix UI primitives if necessary.
*   **Styling**:
    *   All styling must be done using Tailwind CSS classes. Avoid inline styles or separate CSS files unless absolutely necessary for third-party integrations that don't support Tailwind.
    *   Ensure designs are responsive by utilizing Tailwind's responsive utility classes.
*   **Icons**:
    *   Use icons from the `lucide-react` library.
*   **Routing**:
    *   Manage all client-side routing using React Router.
    *   Keep the primary route definitions within `src/App.tsx`.
*   **New Components/Hooks**:
    *   Always create new, dedicated files for every new React component or custom hook, no matter how small.
    *   Aim for components that are concise and focused, ideally under 100 lines of code.
*   **File Structure**:
    *   Adhere strictly to the `src/pages/` directory for application pages and `src/components/` for reusable components.
    *   Directory names should be all lowercase.