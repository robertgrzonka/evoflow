import { connectToDatabase } from '@/lib/mongodb'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    await connectToDatabase()

    return NextResponse.json({ message: 'User signed out' }, { status: 200 })
  } catch (error) {
    console.error('Error signing out:', error)
    return NextResponse.json({ message: 'Error signing out' }, { status: 500 })
  }
}
