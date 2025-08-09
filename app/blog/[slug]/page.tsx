import ClientBlogPost from "./ClientBlogPost"

// Sample blog posts data
const blogPosts = {
  "getting-started-nextjs": {
    title: "Getting Started with Next.js 15",
    description: "Learn the fundamentals of Next.js and build your first modern web application.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Tutorial",
    author: "John Doe",
    content: `
# Getting Started with Next.js 15

Next.js 15 brings exciting new features and improvements that make building modern web applications even more powerful and developer-friendly.

## What's New in Next.js 15

### 1. Improved Performance
Next.js 15 introduces several performance optimizations:
- **Faster builds** with improved bundling
- **Better caching** strategies
- **Optimized runtime** for better user experience

### 2. Enhanced Developer Experience
The development experience has been significantly improved:
- Better error messages and debugging
- Improved hot reload functionality
- Enhanced TypeScript support

## Getting Started

To create a new Next.js 15 project, run:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

### Project Structure
Your new Next.js project will have this structure:
- \`app/\` - App Router directory
- \`components/\` - Reusable components
- \`public/\` - Static assets
- \`styles/\` - CSS files

## Key Features

### Server Components
Server Components are the default in Next.js 15, providing:
- Better performance
- Reduced bundle size
- Improved SEO

### App Router
The App Router provides:
- File-based routing
- Nested layouts
- Loading states
- Error boundaries

## Conclusion

Next.js 15 is a powerful framework that makes building modern web applications a breeze. With its improved performance, enhanced developer experience, and powerful features, it's the perfect choice for your next project.

Happy coding! 🚀
    `,
  },
  "react-server-components": {
    title: "Understanding React Server Components",
    description: "Deep dive into React Server Components and how they revolutionize web development.",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "React",
    author: "Jane Smith",
    content: `
# Understanding React Server Components

React Server Components represent a paradigm shift in how we think about React applications, bringing server-side rendering to a new level.

## What are Server Components?

Server Components are React components that run on the server and send their rendered output to the client. Unlike traditional SSR, Server Components:

- Run exclusively on the server
- Have direct access to server-side resources
- Don't add to the client bundle size
- Can't use browser-only APIs

## Benefits of Server Components

### 1. Performance
- **Zero bundle impact** - Server Components don't increase client bundle size
- **Faster initial loads** - Less JavaScript to download and parse
- **Better Core Web Vitals** - Improved LCP and FID scores

### 2. Developer Experience
- **Direct database access** - Query databases directly in components
- **Server-side APIs** - Use server-only libraries and APIs
- **Simplified data fetching** - No need for complex state management

## How They Work

Server Components render on the server and send a special format to the client:

\`\`\`jsx
// This runs on the server
async function BlogPost({ id }) {
  const post = await db.post.findUnique({ where: { id } })
  
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}
\`\`\`

## Best Practices

1. **Use Server Components by default** - Start with Server Components and only use Client Components when needed
2. **Keep the boundary clear** - Understand when to use 'use client'
3. **Optimize data fetching** - Fetch data as close to where it's used as possible

## Conclusion

React Server Components are revolutionizing how we build React applications, offering better performance and developer experience. Embrace this new paradigm to build faster, more efficient web applications.
    `,
  },
  "modern-css-techniques": {
    title: "Modern CSS Techniques for 2024",
    description: "Explore the latest CSS features and techniques for building beautiful interfaces.",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "CSS",
    author: "Alex Johnson",
    content: `
# Modern CSS Techniques for 2024

CSS continues to evolve rapidly, bringing new features and techniques that make creating beautiful, responsive interfaces easier than ever.

## Container Queries

Container queries allow you to style elements based on their container's size, not just the viewport:

\`\`\`css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}
\`\`\`

## CSS Grid Subgrid

Subgrid allows nested grids to participate in their parent's grid:

\`\`\`css
.parent-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.child-grid {
  display: grid;
  grid-column: span 2;
  grid-template-columns: subgrid;
}
\`\`\`

## Modern Color Functions

New color functions provide more control over colors:

\`\`\`css
.element {
  /* Relative color syntax */
  background: oklch(from blue calc(l + 0.2) c h);
  
  /* Color mixing */
  border-color: color-mix(in oklch, blue 70%, red);
}
\`\`\`

## CSS Nesting

Native CSS nesting is now supported in modern browsers:

\`\`\`css
.card {
  padding: 1rem;
  border-radius: 8px;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
}
\`\`\`

## Logical Properties

Use logical properties for better internationalization:

\`\`\`css
.element {
  margin-inline: 1rem; /* Instead of margin-left/right */
  padding-block: 2rem; /* Instead of padding-top/bottom */
  border-inline-start: 2px solid blue; /* Instead of border-left */
}
\`\`\`

## Conclusion

These modern CSS techniques provide powerful tools for creating responsive, maintainable, and beautiful interfaces. Start incorporating them into your projects to stay ahead of the curve!
    `,
  },
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export const dynamicParams = false

interface PageProps {
  params: { slug: string }
}

export default async function BlogPost({ params }: PageProps) {
  return <ClientBlogPost params={params} blogPosts={blogPosts} />
}
