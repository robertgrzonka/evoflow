import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI as string

if (!MONGODB_URI) {
  throw new Error('Missing MONGODB_URI environment variable')
}

let isConnected = false

export async function connectToDatabase() {
  if (isConnected) {
    console.log('✅ Already connected to MongoDB.')
    return
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: 'evoFlowDB',
    })

    isConnected = true
    console.log('🚀 Connected to MongoDB.')
  } catch (error) {
    console.error('❌ MongoDB connection error:', error)
    process.exit(1)
  }
}
