import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  // not required, but redirects users to this page rather than nextauth.js default
  pages: {
    signIn: '/login',
  },
  // this logic protects our routes
  // prevents users from accessing dashboard unless they're logged in
  callbacks: {
    // authorized used to verify request authorization for page access
    // called before request is completed and receives object with properties
    // properties include user's session
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  // array where you list different login options
  providers: []
} satisfies NextAuthConfig;
