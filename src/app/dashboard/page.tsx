import WorkoutsChart from '@/components/WorkoutsChart'

export default function Dashboard() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-green-500 px-4">
      <h1 className="text-2xl font-bold">evoFlow™ Dashboard</h1>
      <p className="mt-1 text-sm text-gray-400">Track your progress</p>

      {/* Stats Cards */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <div className="p-3 w-48 bg-gray-900 border border-green-500 rounded-md text-center shadow-md">
          <h2 className="text-sm font-semibold">Total Workouts</h2>
          <p className="text-xl mt-1">12</p>
        </div>
        <div className="p-3 w-48 bg-gray-900 border border-green-500 rounded-md text-center shadow-md">
          <h2 className="text-sm font-semibold">Last Exercise</h2>
          <p className="text-sm mt-1">Bench Press</p>
        </div>
        <div className="p-3 w-48 bg-gray-900 border border-green-500 rounded-md text-center shadow-md">
          <h2 className="text-sm font-semibold">Total Weight</h2>
          <p className="text-xl mt-1">5450 kg</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="w-full max-w-md mt-8">
        <WorkoutsChart />
      </div>

      {/* Recent Workouts */}
      <div className="w-full max-w-md mt-8">
        <h2 className="text-lg font-semibold mb-2">Recent Workouts</h2>
        <ul className="space-y-1">
          <li className="p-2 bg-gray-900 border border-green-500 rounded-md text-sm">
            🏋️ Bench Press - 80kg x 10 (x3)
          </li>
          <li className="p-2 bg-gray-900 border border-green-500 rounded-md text-sm">
            🏋️ Squat - 100kg x 8 (x4)
          </li>
          <li className="p-2 bg-gray-900 border border-green-500 rounded-md text-sm">
            🏋️ Deadlift - 120kg x 5 (x3)
          </li>
        </ul>
      </div>
    </main>
  )
}
