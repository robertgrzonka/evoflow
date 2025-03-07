'use client'

import { signOut } from 'next-auth/react'
// import { redirect } from 'next/navigation'

export default function SignOutButton() {
  return (
    <button
      onClick={async () => {
        await signOut({ callbackUrl: '/auth/signin' })
        // redirect('/auth/signin')
      }}
      className="mt-8 bg-red-500 hover:bg-red-600 p-2 rounded"
    >
      Sign Out
    </button>
  )
}
