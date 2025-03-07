import ApolloWrapper from '@/lib/ApolloWrapper'
import Loader from '@/components/Loader'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <ApolloWrapper>
        <Loader />
      </ApolloWrapper>
    </div>
  )
}
