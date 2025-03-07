import mongoose from 'mongoose'

export interface IWorkout extends Document {
  userId: string
  exercise: string
  weight: number
  reps: number
  sets: number
  createdAt: Date
}

const WorkoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  exercise: { type: String, required: true },
  weight: { type: Number, required: true },
  reps: { type: Number, required: true },
  sets: { type: Number, required: true },
  date: { type: Date, default: Date.now },
})

const Workout =
  mongoose.models.Workout || mongoose.model('Workout', WorkoutSchema)
export default Workout
