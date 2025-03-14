import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import SignOutButton from '@/components/SignOutButton'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  console.log(session)

  if (!session) {
    redirect('/auth/signin')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-2xl">
        Hello,{' '}
        <span className="text-green-500">
          {session?.user?.name || session?.user?.email}!
        </span>
      </h1>
      <SignOutButton />
    </div>
  )
}
