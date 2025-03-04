'use client'

import { motion } from 'framer-motion'
import WorkoutsChart from '@/components/WorkoutsChart'

export default function Dashboard() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-green-500 px-4">
      {/* Title */}
      <motion.h1
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        evoFlow™ Dashboard
      </motion.h1>
      <motion.p
        className="mt-1 text-sm text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.2 }}
      >
        Track your progress
      </motion.p>

      {/* Stats Cards */}
      <motion.div
        className="mt-6 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.2 }}
      >
        {[
          { title: 'Total Workouts', value: '12' },
          { title: 'Last Exercise', value: 'Bench Press' },
          { title: 'Total Weight', value: '5450 kg' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="p-3 w-48 bg-gray-900 border border-green-500 rounded-md text-center shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.1, duration: 0.2 }}
          >
            <h2 className="text-sm font-semibold">{stat.title}</h2>
            <p className="text-xl mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Chart Section */}
      <motion.div
        className="w-full max-w-md mt-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.2 }}
      >
        <WorkoutsChart />
      </motion.div>

      {/* Recent Workouts */}
      <motion.div
        className="w-full max-w-md mt-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.2 }}
      >
        <h2 className="text-lg font-semibold mb-2">Recent Workouts</h2>
        <motion.ul className="space-y-1">
          {[
            'Bench Press - 80kg x 10 (x3)',
            'Squat - 100kg x 8 (x4)',
            'Deadlift - 120kg x 5 (x3)',
          ].map((workout, index) => (
            <motion.li
              key={index}
              className="p-2 bg-gray-900 border border-green-500 rounded-md text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.2 }}
            >
              🏋️ {workout}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </main>
  )
}
