# Get Started

Welcome to the **Next.js Boilerplate** documentation! This guide will walk you through setting up the project, customizing the boilerplate to your needs, and deploying your application to production.

## Prerequisites

Before you get started, make sure you have the following installed on your local machine:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** (for package management)
- **Git** (for version control)
- A **MongoDB** instance (for database integration)

## Clone the Repository

To begin, you need to clone the boilerplate repository to your local machine. Open your terminal and run:

```bash
git clone https://github.com/appekt-labs/boilaplate.git
```

Once the repository is cloned, navigate to the project folder:

```bash
cd boilaplate
```

## Install Dependencies

Next, install the required dependencies. Depending on your package manager, run one of the following commands:

Using **npm**:

```bash
npm install
```

Or using **yarn**:

```bash
yarn install
```

This will install all the necessary packages listed in the `package.json` file.

## Environment Variables

The boilerplate uses **environment variables** to manage sensitive data (e.g., database connection strings, API keys). You will need to create a `.env.local` file at the root of your project.

Here is a template for the `.env.local` file:

```bash
# Next Auth Providers (google github, you can configure as many as you want)
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

GITHUB_ID=""
GITHUB_SECRET=""

# make sure to change this in production
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET=""


# Database
MONGODB_URI="mongodb://localhost:27017/boilaplate"



## Payments
LEMON_SQUEEZY_API_KEY="lemon_squeezy_api"
LEMON_SQUEEZY_STORE_ID="product_id"
LEMON_SQUEEZY_WEBHOOK_URL=""
LEMON_SQUEEZY_WEBHOOK_SIGNATURE=""



## Resend API key
RESEND_API=""



### Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
NEXT_PUBLIC_CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
```

> Make sure to replace `<username>`, `<password>`, and other placeholders with your actual credentials.

## Running the Development Server

With everything set up, you can now start the development server. Run the following command in your terminal:

Using **npm**:

```bash
npm run dev
```

Or using **yarn**:

```bash
yarn dev
```

By default, the app will be available at [http://localhost:3000](http://localhost:3000). You can now open your browser and start building!

## Folder Structure

Here's a brief overview of the main folders and files in the boilerplate:

```bash
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Main layout component
│   │   ├── page.tsx             # Main entry page (home)
│   │   └── api/                 # API routes
│   ├── components/              # Reusable UI components
│   ├── lib/                     # Utilities and helper functions
│   ├── db/                      # Database connection and ORM logic (e.g., mongoose)
├── public/                      # Static assets (images, etc.)
├── .env.local                   # Environment variables
└── next.config.js               # Next.js configuration file

```

### Important Directories

- **`app/`**: The main directory for pages and layout in Next.js 14, utilizing the new App Router.
- **`components/`**: Contains reusable React components.
- **`lib/`**: Helper functions and utilities (e.g., database connections).
- **`db/`** (optional): If you’re using **Prisma** as your ORM for MongoDB, this folder will contain your database schema and migrations.

## Authentication Setup

This boilerplate includes **NextAuth.js** for authentication. By default, it supports **OAuth providers** like Google, GitHub, etc. Here's how you can set up a provider:

1. Open the `pages/api/auth/[...nextauth].ts` file.
2. Add your provider credentials (e.g., **Google** OAuth):

```ts
providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }),
]
```

3. Make sure to add your **client ID** and **client secret** to the `.env.local` file.

## Connecting to MongoDB

This boilerplate uses **MongoDB** for data storage. To connect the application to your MongoDB database, follow these steps:

1. In your `.env.local` file, set the `MONGODB_URI` with your database connection string.

2. Now, the app will be connected to your MongoDB instance.

## Customization

This boilerplate is built to be flexible. You can easily customize the following aspects:

- **Styling**: It uses **Tailwind CSS** for styling, allowing you to easily change the design.
- **Database**: By default, MongoDB is integrated, but you can switch to another database (e.g., PostgreSQL) by modifying the connection logic in the `lib/` folder.
- **Components**: Add or modify components in the `components/` folder to fit your project's needs.

## Building for Production

Once you're ready to deploy your app, you can build it for production by running:

Using **npm**:

```bash
npm run build
```

Or using **yarn**:

```bash
yarn build
```

After building, you can start the production server with:

```bash
npm run start
```

Or using **yarn**:

```bash
yarn start
```

## Deploying to Vercel

The easiest way to deploy your Next.js app is via **Vercel**, the platform built by the creators of Next.js.

1. Push your project to GitHub (or any other Git provider).
2. Head over to [Vercel](https://vercel.com/), sign in, and connect your GitHub repository.
3. Vercel will automatically detect your Next.js project and deploy it.

For more information on deploying to Vercel, visit the [official Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

Congratulations! You now have everything you need to get started with the **Next.js Boilerplate**. Explore the rest of the documentation for more advanced topics and customization guides.


