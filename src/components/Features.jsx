import React from 'react'
import { motion } from 'framer-motion'
import { Layers, Zap, CalendarClock, Bell, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: <Layers className="h-6 w-6 text-indigo-600" />,
    title: 'Automated Scheduling',
    desc: 'Rule and priority-based engine that eliminates clashes across faculty, rooms, and courses.'
  },
  {
    icon: <CalendarClock className="h-6 w-6 text-emerald-600" />,
    title: 'Dynamic Adjustments',
    desc: 'Auto-recomputes only affected slots when availability changes.'
  },
  {
    icon: <Bell className="h-6 w-6 text-sky-600" />,
    title: 'Real-time Notifications',
    desc: 'Keep Admin, Faculty, and Students instantly informed with updates.'
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-fuchsia-600" />,
    title: 'Analytics & Reports',
    desc: 'Faculty load distribution, room utilization, and performance insights.'
  }
]

const Features = () => {
  return (
    <section id="features" className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Why UniSched</h2>
          <p className="mt-3 text-slate-600">Built for academic scale with automation at the core.</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
