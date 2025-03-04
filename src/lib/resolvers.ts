import { connectToDatabase } from '@/lib/mongodb'
import User from '@/models/User'
import Workout from '@/models/Workout'
import mongoose from 'mongoose'

const resolvers = {
  Query: {
    users: async () => {
      await connectToDatabase()
      return await User.find()
    },
    workouts: async (_: any, { userId }: { userId: string }) => {
      await connectToDatabase()
      const objectId = new mongoose.Types.ObjectId(userId)
      return await Workout.find({ userId: objectId })
    },
  },
  Mutation: {
    addUser: async (_: any, { username, email }: any) => {
      await connectToDatabase()
      const newUser = new User({ username, email })
      await newUser.save()
      return newUser
    },
    addWorkout: async (
      _: any,
      { userId, exercise, weight, reps, sets }: any
    ) => {
      await connectToDatabase()
      const newWorkout = new Workout({ userId, exercise, weight, reps, sets })
      await newWorkout.save()
      return newWorkout
    },
  },
}

export default resolvers
