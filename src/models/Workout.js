import mongoose from 'mongoose'

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
