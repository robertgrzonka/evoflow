import { connectToDatabase } from '@/lib/mongodb'
import User from '@/models/User'
import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    await connectToDatabase()

    const { email, password } = await req.json()
    console.log('Received data:', { email, password }) // LOG 1: Sprawdź, czy dane dochodzą

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Missing email or password' },
        { status: 400 }
      )
    }

    await connectToDatabase()
    console.log('Connected to DB') // LOG 2: Sprawdź, czy połączenie z bazą działa

    const existingUser = await User.findOne({ email })
    console.log('Existing user:', existingUser) // LOG 3: Sprawdź, czy użytkownik istnieje

    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      )
    }

    const hashedPassword = await hash(password, 10)
    console.log('Hashed password:', hashedPassword) // LOG 4: Sprawdź, czy hasło się hashuje

    const newUser = await User.create({ email, password: hashedPassword })
    console.log('Created new user:', newUser) // LOG 5: Sprawdź, czy użytkownik został dodany

    return NextResponse.json(
      { message: 'User created', user: newUser },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error in registration:', error) // LOG 6: Loguj błędy
    return NextResponse.json(
      { message: 'Error creating user' },
      { status: 500 }
    )
  }
}
