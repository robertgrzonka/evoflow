import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI as string

if (!MONGODB_URI) {
  throw new Error('Missing MONGODB_URI environment variable')
}

let isConnected = false // Zapamiętuje stan połączenia

export async function connectToDatabase() {
  if (isConnected) {
    console.log('✅ Already connected to MongoDB.')
    return
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: 'evoFlowDB', // Upewnij się, że to twoja nazwa bazy
    })

    isConnected = true
    console.log('🚀 Connected to MongoDB.')
  } catch (error) {
    console.error('❌ MongoDB connection error:', error)
    process.exit(1) // Zatrzymuje aplikację, jeśli nie można się połączyć
  }
}
