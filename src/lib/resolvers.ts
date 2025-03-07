import { connectToDatabase } from '@/lib/mongodb'
import User, { IUser } from '@/models/User'
import Workout, { IWorkout } from '@/models/Workout'
import mongoose from 'mongoose'

export interface Context {
  user?: IUser
}

const resolvers = {
  Query: {
    users: async (): Promise<IUser[]> => {
      await connectToDatabase()
      return await User.find()
    },
    workouts: async (
      _: unknown,
      { userId }: { userId: string }
    ): Promise<IWorkout[]> => {
      await connectToDatabase()
      const objectId = new mongoose.Types.ObjectId(userId)
      return await Workout.find({ userId: objectId })
    },
  },
  Mutation: {
    addUser: async (
      _: unknown,
      { username, email }: { username: string; email: string }
    ): Promise<IUser> => {
      await connectToDatabase()
      const newUser = new User({ username, email })
      await newUser.save()
      return newUser
    },
    addWorkout: async (
      _: unknown,
      {
        userId,
        exercise,
        weight,
        reps,
        sets,
      }: {
        userId: string
        exercise: string
        weight: number
        reps: number
        sets: number
      }
    ): Promise<IWorkout> => {
      await connectToDatabase()
      const newWorkout = new Workout({ userId, exercise, weight, reps, sets })
      await newWorkout.save()
      return newWorkout
    },
  },
}

export default resolvers
