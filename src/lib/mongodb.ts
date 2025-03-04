import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || ''

if (!MONGODB_URI) {
  throw new Error('⚠️ Brak `MONGODB_URI` w pliku .env.local')
}

export async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) {
    return
  }
  await mongoose.connect(MONGODB_URI, { dbName: 'evoFlowDB' })
}
