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
      className="mt-8 bg-orange-400 hover:bg-orange-300 text-gray-900 p-2 rounded cursor-pointer transition font-medium pl-10 pr-10"
    >
      Sign Out
    </button>
  )
}
