'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { date: '2024-02-01', weight: 50 },
  { date: '2024-02-10', weight: 60 },
  { date: '2024-02-20', weight: 75 },
  { date: '2024-03-01', weight: 80 },
  { date: '2024-03-04', weight: 85 },
]

export default function WorkoutsChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" stroke="#22c55e" />
        <YAxis stroke="#22c55e" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="weight"
          stroke="#22c55e"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
