import type { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

const demoUsers = [
  {
    id: "1",
    name: "Demo Student",
    email: "demo@mru.edu.in",
    password: "demo1234",
  },
  {
    id: "2",
    name: "Udita Kalra",
    email: "udita@mru.edu.in",
    password: "udita1234",
  },
]

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const user = demoUsers.find(
          (u) =>
            u.email === credentials?.email &&
            u.password === credentials?.password
        )

        if (!user) return null

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.email = token.email
        session.user.name = token.name
      }

      return session
    },
  },

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/login",
  },
}