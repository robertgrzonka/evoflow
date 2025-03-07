import { connectToDatabase } from '@/lib/mongodb'
import User from '@/models/User'
import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    await connectToDatabase()

    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Missing email or password' },
        { status: 400 }
      )
    }

    await connectToDatabase()
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      )
    }

    const hashedPassword = await hash(password, 10)

    const newUser = await User.create({ email, password: hashedPassword })

    return NextResponse.json(
      { message: 'User created', user: newUser },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Error creating user' },
      { status: 500 }
    )
  }
}
