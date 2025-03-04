import Workouts from '@/components/Workouts'
import ApolloWrapper from '@/lib/ApolloWrapper'

export default function Home({ userId }: { userId: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <ApolloWrapper>
        {userId ? <Workouts userId={userId} /> : <h1>Hejka!</h1>}
      </ApolloWrapper>
    </div>
  )
}
