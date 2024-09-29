# Blog Implementation

This boilerplate provides a blogging system built using **@next/mdx**, allowing you to write blog posts in **Markdown** and display them in your **Next.js** application. The setup involves configuring your `next.config.js` file, and using custom MDX components for rendering the markdown content.

## MDX Integration

To enable **Markdown** (`.mdx`) support, the following setup is required.

### 1. Install @next/mdx

To get started, you need to install the required package:

```bash
npm install @next/mdx
```

### 2. Modify `next.config.js`

Add **MDX** support in the `next.config.js` file using `@next/mdx`.

```js
const withMDX = require("@next/mdx")();

module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "mdx"], // Enable .mdx parsing
  reactStrictMode: true,
});
```

This configuration ensures that files with the `.mdx` extension are treated as **React** components.

### 3. Creating MDX Components

In the root directory of your project, create a file called `mdx-components.tsx`. This file allows you to define or override custom components used in your **Markdown** content, such as headers, links, or images.

```tsx
// mdx-components.tsx

import type { MDXComponents } from "mdx/types";

// This function will return the MDX components to be used globally
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // You can add custom MDX components here
  };
}
```

### 4. Creating Blog Pages

Now, you can create blog pages using **Markdown** with the `.mdx` extension. These files will be parsed and rendered as React components in your Next.js app.

For example, create a file `src/pages/blog/my-first-post.mdx`:

```md
# My First Post

Welcome to my blog! This is the first post.

## Benefits of MDX

- Easy to write content in markdown
- Supports embedding React components directly
- Perfect for blogs, documentation, and tutorials
```

### 5. Rendering Blog Posts

You can render the blog posts inside your **Next.js** pages just like regular React components. Ensure that the pages directory or the `app` directory supports routing for your **MDX** content.

Example blog page setup:

```tsx
// src/pages/blog/[slug].tsx

import { getMDXComponent } from "mdx-bundler/client";
import { useMDXComponents } from "../../mdx-components";
import { getPostBySlug } from "../../lib/blog"; // Example to fetch MDX content

export default function BlogPost({ code }) {
  const Component = getMDXComponent(code);
  const components = useMDXComponents({});

  return <Component components={components} />;
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  
  return {
    props: {
      code: post.code,
    },
  };
}

export async function getStaticPaths() {
  // Here you would dynamically generate paths from the available blog posts
  const paths = getAllBlogSlugs(); // Fetch all blog slugs
  return {
    paths,
    fallback: false,
  };
}
```

### 6. Blog Data Handling

You can store your blog posts as markdown files inside your project and use a helper function to load them. Here's an example utility to fetch blog content:

```js
// src/lib/blog.js

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";

const postsDirectory = path.join(process.cwd(), "src", "posts");

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(fileContents);

  const code = await bundleMDX({ source: content });

  return {
    code: code.code,
    frontmatter: data,
  };
}

export function getAllBlogSlugs() {
  const files = fs.readdirSync(postsDirectory);

  return files.map((file) => ({
    params: {
      slug: file.replace(/\.mdx$/, ""),
    },
  }));
}
```

### 7. Deploying Your Blog

Once your blog structure is in place, you can deploy your **Next.js** app with support for **MDX** content. Any changes to `.mdx` files will automatically be compiled and served as part of your site.

## Additional Customization

You can extend the `mdx-components.tsx` file to add custom components, such as embedding videos, custom code blocks, or enhanced styling for different markdown elements. This gives you the flexibility to build a feature-rich blog within your boilerplate.

## Conclusion

By leveraging **@next/mdx**, you can easily integrate a markdown-based blog system into your **Next.js** boilerplate, enabling you to write posts in markdown while retaining the power of React for dynamic functionality.

Feel free to explore the [MDX Documentation](https://mdxjs.com/docs/) for more information on customizing your blog.
