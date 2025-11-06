import React, { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CalendarDays, Clock, Edit, RefreshCcw, Download, AlertCircle } from 'lucide-react'

// Helper to parse role from hash: #dashboard?role=admin
const useRoleFromHash = () => {
  const [role, setRole] = useState('student')
  useEffect(() => {
    const parse = () => {
      const hash = window.location.hash
      const qp = new URLSearchParams(hash.split('?')[1] || '')
      const r = qp.get('role') || 'student'
      setRole(r)
    }
    parse()
    window.addEventListener('hashchange', parse)
    return () => window.removeEventListener('hashchange', parse)
  }, [])
  return role
}

const sampleTimetable = [
  { day: 'Mon', slots: ['DSA', 'Math', 'OS', 'Lab', 'Free', 'AI'] },
  { day: 'Tue', slots: ['DBMS', 'Math', 'Free', 'OS', 'Lab', 'AI'] },
  { day: 'Wed', slots: ['DBMS', 'DSA', 'AI', 'Free', 'Math', 'Seminar'] },
  { day: 'Thu', slots: ['OS', 'DSA', 'DBMS', 'AI', 'Free', 'Sports'] },
  { day: 'Fri', slots: ['Math', 'DBMS', 'Lab', 'AI', 'Project', 'Free'] }
]

const roleBadges = {
  admin: 'bg-indigo-50 text-indigo-700',
  faculty: 'bg-emerald-50 text-emerald-700',
  student: 'bg-sky-50 text-sky-700'
}

const Dashboard = () => {
  const role = useRoleFromHash()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(sampleTimetable)

  // Simulate fetching timetable from backend
  const fetchTimetable = async () => {
    setLoading(true)
    try {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${base}/api/timetable`).catch(() => null)
      if (res && res.ok) {
        const json = await res.json()
        setData(json.timetable || sampleTimetable)
      } else {
        setData(sampleTimetable)
      }
    } catch (e) {
      setData(sampleTimetable)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTimetable()
  }, [])

  return (
    <section id="dashboard" className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ring-black/5 ${roleBadges[role]}`}>
              <CalendarDays className="h-4 w-4" />
              {role.charAt(0).toUpperCase() + role.slice(1)} Dashboard
            </div>
            <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">Weekly Timetable</h2>
            <p className="text-sm text-slate-600">Live data loads from your backend if available. Otherwise, a sample preview is shown.</p>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={fetchTimetable} className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-white shadow transition hover:-translate-y-0.5">
              <RefreshCcw className="h-4 w-4" /> Refresh
            </button>
            {role === 'admin' && (
              <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white shadow transition hover:-translate-y-0.5">
                <Edit className="h-4 w-4" /> Generate
              </button>
            )}
            <button className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-slate-900 ring-1 ring-slate-200 shadow-sm transition hover:-translate-y-0.5">
              <Download className="h-4 w-4" /> Export
            </button>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto">
          <div className="min-w-[700px] rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
            <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
              <div className="p-3">Time</div>
              {['Mon','Tue','Wed','Thu','Fri','Sat'].map((d) => (
                <div key={d} className="p-3">{d}</div>
              ))}
            </div>

            <AnimatePresence initial={false}>
              {[0,1,2,3,4,5].map((slotIdx) => (
                <motion.div
                  key={slotIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="mt-2 grid grid-cols-7 gap-2"
                >
                  <div className="flex items-center justify-center rounded-lg bg-slate-50 p-3 text-xs text-slate-600"><Clock className="mr-2 h-4 w-4" />P{slotIdx+1}</div>
                  {['Mon','Tue','Wed','Thu','Fri','Sat'].map((d, dayIdx) => {
                    const day = data[dayIdx]
                    const text = day?.slots?.[slotIdx] || '—'
                    const color = text === 'Free' ? 'bg-emerald-50 text-emerald-700' : 'bg-indigo-50 text-indigo-700'
                    return (
                      <div key={d} className={`flex items-center justify-center rounded-lg p-3 text-xs font-medium ${color}`}>
                        {text}
                      </div>
                    )
                  })}
                </motion.div>
              ))}
            </AnimatePresence>

            {loading && (
              <div className="mt-4 rounded-lg bg-amber-50 p-3 text-amber-800">
                <div className="flex items-center gap-2 text-sm"><AlertCircle className="h-4 w-4" /> Fetching timetable…</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
