import Workouts from '@/components/Workouts'
import ApolloWrapper from '@/lib/ApolloWrapper'
import Loader from '@/components/Loader'

export default function Home({ userId }: { userId: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <ApolloWrapper>
        {userId ? <Workouts userId={userId} /> : <Loader />}
      </ApolloWrapper>
    </div>
  )
}
