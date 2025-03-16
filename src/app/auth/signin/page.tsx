'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (res?.error) {
      setError('Invalid email or password')
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-green-500">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-gray-900 rounded-lg shadow-md w-80"
      >
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded bg-gray-800 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 rounded bg-gray-800 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 p-2 rounded text-gray-900 cursor-pointer transition"
        >
          Sign In
        </button>
        <p className="mt-4 text-sm text-gray-400 text-right">
          Don’t have an account?{' '}
          <Link href="/auth/signup" className="text-green-500 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  )
}
