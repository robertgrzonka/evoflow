'use client'

import { gql, useQuery } from '@apollo/client'
import Loader from '@/components/Loader'

const GET_WORKOUTS = gql`
  query Workouts($userId: ID!) {
    workouts(userId: $userId) {
      id
      exercise
      weight
      reps
      sets
      date
    }
  }
`

// Definicja typu dla pojedynczego treningu
interface Workout {
  id: string
  exercise: string
  weight: number
  reps: number
  sets: number
  date: string
}

// Typ dla danych zwracanych z GraphQL
interface WorkoutData {
  workouts: Workout[]
}

// Typ dla zmiennych query
interface WorkoutVars {
  userId: string
}

export default function Workouts({ userId }: { userId: string }) {
  const { loading, error, data } = useQuery<WorkoutData, WorkoutVars>(
    GET_WORKOUTS,
    {
      variables: { userId },
    },
  )

  if (loading) return <Loader />
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1 className="text-2xl font-bold">Trainings</h1>
      <ul className="mt-4">
        {data?.workouts.map((workout) => (
          <li key={workout.id} className="border p-2 my-2 rounded">
            <p>
              <strong>{workout.exercise}</strong> - {workout.weight}kg x{' '}
              {workout.reps} (x{workout.sets})
            </p>
            <p className="text-sm text-gray-500">
              {new Date(workout.date).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
