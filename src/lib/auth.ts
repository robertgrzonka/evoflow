import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDatabase } from '@/lib/mongodb'
import bcrypt from 'bcrypt'
import User from '@/models/User'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await connectToDatabase()

        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials')
        }

        const user = await User.findOne({ email: credentials.email })
        if (!user) {
          throw new Error('User not found')
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        )
        if (!passwordMatch) {
          throw new Error('Invalid password')
        }

        return {
          id: user.id.toString(),
          email: user.email,
          username: user.username,
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          email: token.email,
          name: token.username as string,
        }
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/signin',
  },
}
