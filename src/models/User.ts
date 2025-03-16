import mongoose from 'mongoose'

export interface IUser extends Document {
  username: string
  email: string
  createdAt: Date
}

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: false, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
)

const User = mongoose.models.User || mongoose.model('User', UserSchema)
export default User
