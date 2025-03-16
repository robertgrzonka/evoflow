import ApolloWrapper from '@/lib/ApolloWrapper'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 gap-y-3">
      <ApolloWrapper>
        <h1 className="text-4xl font-light">
          🧞‍♀️ evo<span className="text-green-500 font-extrabold">Flow</span>™
        </h1>
        <div className="text-center">
          <Link
            href="/auth/signin"
            className="text-green-500 hover:text-green-600 font-semibold transition"
          >
            LOG IN{' '}
          </Link>
          or{' '}
          <Link
            href="/auth/signup"
            className="text-green-500 hover:text-green-600 font-semibold transition"
          >
            REGISTER
          </Link>
        </div>
      </ApolloWrapper>
    </div>
  )
}
