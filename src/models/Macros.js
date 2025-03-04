import mongoose from 'mongoose'

const MacrosSchema = new mongoose.Schema({
  userId: mongoose.Types.ObjectId,
  protein: Number,
  fat: Number,
  carbs: Number,
  calories: Number,
  date: { type: Date, default: Date.now },
})

export default mongoose.models.Macros || mongoose.model('Macros', MacrosSchema)
