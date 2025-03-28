import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { gql } from 'graphql-tag'
import resolvers from '@/lib/resolvers'
import { NextRequest, NextResponse } from 'next/server'

interface Context {
  req: NextRequest
  res: NextResponse
}

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    createdAt: String!
    password: String!
  }

  type Workout {
    id: ID!
    userId: ID!
    exercise: String!
    weight: Int!
    reps: Int!
    sets: Int!
    date: String!
  }

  type Query {
    users: [User]!
    workouts(userId: ID!): [Workout]!
  }

  type Mutation {
    addUser(username: String!, email: String!): User!
    addWorkout(
      userId: ID!
      exercise: String!
      weight: Int!
      reps: Int!
      sets: Int!
    ): Workout!
  }
`

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = startServerAndCreateNextHandler(server, {
  context: async (req: NextRequest): Promise<Context> => ({
    req,
    res: new NextResponse(),
  }),
})

export async function GET(req: NextRequest) {
  return handler(req)
}

export async function POST(req: NextRequest) {
  return handler(req)
}
