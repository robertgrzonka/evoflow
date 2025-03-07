import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from './mongodb'
import bcrypt from 'bcrypt'
import User from '@/models/User' // Model użytkownika w MongoDB

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials')
        }

        // Sprawdzenie użytkownika w bazie
        const user = await User.findOne({ email: credentials.email })
        if (!user) {
          throw new Error('User not found')
        }

        // Sprawdzenie hasła
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        )
        if (!passwordMatch) {
          throw new Error('Invalid password')
        }

        return { id: user.id, email: user.email }
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
          // id: token.id,
          email: token.email,
        }
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/signin',
    // signUp: '/auth/signup',
  },
}
