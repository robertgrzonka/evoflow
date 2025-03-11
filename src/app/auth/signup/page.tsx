'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [username, setUsername] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (res.ok) {
        router.push('/auth/signin')
      } else {
        const data = await res.json()
        setError(data.message)
      }
    } catch (error) {
      setError('Something went wrong')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-green-500">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-gray-900 rounded-lg shadow-md w-80"
      >
        <h1 className="text-2xl font-semibold mb-4">Register</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* <input
          type="username"
          placeholder="Username*"
          className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> */}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          className="w-full bg-green-500 hover:bg-green-600 p-2 rounded text-gray-900 cursor-pointer transition"
          onClick={() => console.log('Started')}
        >
          Register
        </button>
        <p className="mt-4 text-sm text-gray-400 text-right">
          Already a user?{' '}
          <Link href="/auth/signin" className="text-green-500 hover:underline">
            Sign in!
          </Link>
        </p>
      </form>
    </div>
  )
}
