# Features of **BoilaPlate**

Welcome to **BoilaPlate**, the ultimate starting point for your Next.js projects. This template includes all the essential features you need to build scalable, secure, and feature-rich web applications in no time. Below, we highlight the core features that make **BoilaPlate** stand out.

## 1. **Authentication with NextAuth**  
Secure, customizable, and ready-to-use authentication flows for sign-up, sign-in, and password management.

- **Pre-built Pages**: `/auth/signin`, `/auth/register`, `/auth/forgot-password`, and `/auth/reset-password`
- **Secure Session Handling**: Authenticated sessions via cookies and tokens.
- **User Registration**: Custom `/auth/register` route for user sign-ups, which **NextAuth** doesn’t support out of the box.
- **Resend Integration**: Emails are sent using **Resend**, and email templates are beautifully designed using **React Email**.
- **MongoDB Storage**: User data is stored securely in MongoDB, integrated seamlessly with authentication flows.

**Time Saved**: Up to 10 hours of development!


---

## 2. **Dashboard with Premium Features**  
A clean, basic dashboard layout is provided to help users manage their accounts. Built-in support for premium accounts and a seamless upgrade flow.

- **Premium Badge**: Users who upgrade via **Lemon Squeezy** get a "Premium" badge in their dashboard.
- **Upgrade to Premium**: The `/dashboard` page includes a direct link to purchase premium features through **Lemon Squeezy** integration.
- **Logout Functionality**: Users can securely log out from the dashboard.

**Time Saved**: Up to 5 hours with ready-to-use navigation and authentication handling.

<!-- ![Dashboard](https://placehold.co/500x601) -->

---

## 3. **Email Integration with Resend**  
Seamless integration for email notifications and password resets via the **Resend** API. Custom email templates are designed with **@react-email/components**, providing flexibility and beautiful designs.

- **Pre-configured Emails**: Forgot password, account verification, and custom notifications.
- **React Email Components**: Easily editable email templates using the power of React.

**Time Saved**: No need to set up your own email service; this saves 3-4 hours of manual email integration.

<!-- ![Email Integration](https://placehold.co/500x602) -->

---

## 4. **MDX Blog System**  
A fully functional blog system is included with **MDX** support, allowing you to write content in markdown with React components.

- **Integrated with @next/mdx**: Ready-to-use markdown for building content-rich blogs.
- **Custom MDX Components**: Extendable with your own components via the `mdx-components.tsx` file.
- **Optimized Rendering**: Parse MDX pages into React components for better performance and flexibility.

**Time Saved**: Writing a markdown-powered blog from scratch takes time, but **BoilaPlate** saves you at least 6-7 hours.

<!-- ![Blog](https://placehold.co/500x603) -->

---

## 5. **MongoDB Integration**  
Out-of-the-box integration with MongoDB, making it easy to store and manage your app’s data. Full CRUD support is already set up.

- **User Data**: Authentication and profile data are stored securely.
- **Subscription Management**: Store user subscription status when upgraded via **Lemon Squeezy**.
- **Flexible Database Schema**: Modify and expand your MongoDB schemas easily using **Prisma ORM** if necessary.

**Time Saved**: Save 4-5 hours of setup time by not having to manually configure MongoDB.

<!-- ![Database Integration](https://placehold.co/500x604) -->

---

## 6. **Payment Integration with Lemon Squeezy**  
Monetize your application with the powerful **Lemon Squeezy** payment integration. Users can upgrade to premium with a simple checkout flow.

- **Checkout Flow**: Fully functional purchase route (`/api/purchase-product`) that creates a checkout session.
- **Webhook Integration**: Automatically update user subscriptions when payments are successful using a webhook (`/api/webhooks/lemon-squeezy`).
- **Secure Payment Processing**: Payments are handled securely with Lemon Squeezy’s API, removing the complexity of building your own payment system.

<!-- **Time Saved**: Setting up a custom payment integration can take weeks—this saves you **over 20 hours**! -->

<!-- ![Payment Integration](https://placehold.co/500x605) -->

---

## 7. **Ready-to-Use Profile and Waitlist Pages**  
Additional utility pages for user profile management and capturing waitlist sign-ups for new features or product launches.

- **User Profile Management**: `/dashboard/profile` allows users to update their email, password, and personal info.
- **Waitlist Page**: `/wait-list` captures user interest and stores data securely in MongoDB for future marketing.

**Time Saved**: At least 3-4 hours saved by using pre-configured profile and waitlist management features.

<!-- ![Profile & Waitlist](https://placehold.co/500x606) -->

---

## 8. **Landing Page**  
A beautifully designed and responsive landing page is included, saving you time on building your site’s homepage from scratch.

- **Customizable Hero Section**: Quickly update the hero content and add call-to-action buttons.
- **Feature Highlights**: Showcase your product's key features with pre-built feature sections.
- **Responsive Design**: Mobile-first, responsive layout to ensure your landing page looks great on all devices.

**Time Saved**: Design and development of a responsive landing page can take 10-15 hours, but it’s already done for you.

<!-- ![Landing Page](https://placehold.co/500x607) -->

---

## 9. **Extensible Folder Structure**  
A scalable folder structure that grows with your application. All files are organized and follow industry best practices.

- **`src/app`**: Pages and API routes live here for clean separation.
- **`components/`**: All reusable UI components are placed in one folder for easy management.
- **`lib/`**: Utility functions, services, and APIs are grouped under `lib/` to avoid clutter.
- **`db/`**: Database schemas and models.
- **`public/`**: Static assets such as images.

**Time Saved**: Save countless hours by not having to set up your own project structure.

---

## Summary

By using **BoilaPlate**, you are saving at least **40-50 hours** of work that would otherwise go into building these essential features from scratch. With authentication, payments, email integration, blogs, and much more already implemented, **BoilaPlate** is the best starting point for your Next.js project.

Make sure to check out the full documentation for detailed usage instructions, and get started with **BoilaPlate** today!

