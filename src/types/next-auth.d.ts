/* eslint-disable unused-imports/no-unused-imports */
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
      token: string;
    };
  }
}
