'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    console.log('Sending request:', { email, password }) // <== DEBUG
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      console.log('Response status:', res.status) // <== DEBUG

      if (res.ok) {
        router.push('/auth/signin')
      } else {
        const data = await res.json()
        setError(data.message)
      }
    } catch (error) {
      console.error('Request error:', error) // <== DEBUG
      setError('Something went wrong')
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-green-500 px-4">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
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
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          className="w-full px-4 py-2 bg-green-500 text-black rounded hover:bg-green-600 transition"
          onClick={() => console.log('Started')}
        >
          Register
        </button>
      </form>
    </main>
  )
}
