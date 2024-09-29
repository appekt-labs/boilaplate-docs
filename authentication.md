# Authentication

The boilerplate comes with **NextAuth.js** for handling authentication. It supports both OAuth providers and email/password-based authentication. All authentication-related data is stored in a **MongoDB** database.

## Sign Up

While **NextAuth.js** does not include built-in registration functionality, this boilerplate has an API route for user registration:

### API Route: `/api/auth/register`

To register a new user, send a `POST` request to `/api/auth/register` with the following fields:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

Upon successful registration, the user's data is stored in MongoDB, and an account verification email is sent using **Resend**.

## Sign In

Users can sign in using email/password or any connected OAuth provider. NextAuth manages the session and tokens.

To sign in:

1. Navigate to `/auth/signin`.
2. Enter the credentials (email/password or OAuth).
3. If the user has not verified their account, they will receive an email verification prompt.

### Sign In API

You can also directly sign in via the API:

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

A session token is generated and stored for future requests.

## Forgot Password

If a user forgets their password, they can reset it by requesting a password reset link. An email with a reset link will be sent using **Resend**.

### API Route: `/api/auth/forgot-password`

To initiate a password reset, send a `POST` request with the user's email:

```json
{
  "email": "john@example.com"
}
```

The email sent uses a custom template built with **React Email**.

## Reset Password

When the user clicks the reset link from their email, they can create a new password.

### API Route: `/api/auth/reset-password`

To reset the password, send a `POST` request to the `/api/auth/reset-password` route:

```json
{
  "token": "reset-token-from-email",
  "newPassword": "newpassword123"
}
```

If the token is valid, the user's password is updated in the MongoDB database.

## Update User Details

Users can update their profile information such as name, email, and password.

### API Route: `/api/auth/user-profile`

To update user details, send a `PATCH` request to `/api/auth/user-profile` with the updated data:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "newpassword123"
}
```

The MongoDB database is updated accordingly.

## Account Verification

After registration, the user will receive a verification email to confirm their account. This is done via **Resend**, and the email template is built with **React Email**.

### API Route: `/api/auth/verify`

To verify the account, the user clicks the link in the verification email. This activates the account, and the user is allowed to sign in.

## Email Templates

All the email templates in this boilerplate are created using **React Email** (`@react-email/components`), which allows for reusable and responsive components. The templates cover:

- **Account verification**
- **Password reset**
- **Welcome emails**

These templates can be easily customized to fit your needs.

## OAuth Providers

NextAuth supports multiple OAuth providers, including:

- **Google**
- **GitHub**
- **Twitter**

To configure OAuth providers, add your credentials to the `.env.local` file:

```bash
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### Example OAuth Provider Configuration

In `src/app/api/auth/[...nextauth].ts`:

```ts
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  ...
}
```

## Conclusion

This boilerplate provides a complete authentication solution using **NextAuth.js**, along with custom functionality for user registration, account verification, and password management. Email functionality is powered by **Resend**, with customizable templates built using **React Email**. All user data is securely stored in a **MongoDB** database.
