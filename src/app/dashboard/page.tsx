import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { signOut } from 'next-auth/react'

export default function DashboardPage({ session }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-3xl">Welcome, {session.user.email}!</h1>
      <button
        onClick={() => signOut({ callbackUrl: '/auth/signin' })}
        className="mt-4 bg-red-500 hover:bg-red-600 p-2 rounded"
      >
        Logout
      </button>
    </div>
  )
}
