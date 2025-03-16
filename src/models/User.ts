import mongoose from 'mongoose'

export interface IUser extends Document {
  email: string
  createdAt: Date
}

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
)

const User = mongoose.models.User || mongoose.model('User', UserSchema)
export default User
