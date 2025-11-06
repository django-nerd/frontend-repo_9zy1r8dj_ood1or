import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { User, ShieldCheck, School } from 'lucide-react'

const roles = [
  { value: 'admin', label: 'Admin' },
  { value: 'faculty', label: 'Faculty' },
  { value: 'student', label: 'Student' }
]

const Login = () => {
  const [role, setRole] = useState('admin')

  const handleSubmit = (e) => {
    e.preventDefault()
    const params = new URLSearchParams({ role }).toString()
    const base = import.meta.env.VITE_BACKEND_URL || ''
    // In a full app we'd call the backend. For now we route to dashboard section.
    window.location.hash = `dashboard?${params}`
  }

  return (
    <section id="login" className="relative bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className=""
        >
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Login by Role</h2>
          <p className="mt-3 text-slate-600">Choose a role to access tailored dashboards. Authentication can be wired to JWT and your institution SSO.</p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {roles.map((r) => (
              <button
                key={r.value}
                onClick={() => setRole(r.value)}
                className={`rounded-xl border p-3 text-sm font-medium transition ${role === r.value ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-200 hover:bg-slate-50'}`}
              >
                {r.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
              <input type="email" required placeholder="you@university.edu" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 outline-none ring-indigo-200 focus:ring" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
              <input type="password" required placeholder="••••••••" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 outline-none ring-indigo-200 focus:ring" />
            </div>
            <button type="submit" className="w-full rounded-xl bg-indigo-600 px-4 py-2 font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:-translate-y-0.5 hover:bg-indigo-700">Continue</button>
            <p className="text-xs text-slate-500">Demo mode: this form navigates to an animated dashboard preview based on role.</p>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50">
              <ShieldCheck className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Role-aware Access</h3>
              <p className="text-sm text-slate-600">Admin manages data and approvals, Faculty marks availability, Students view schedules.</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-xl bg-slate-50 p-4">
              <User className="mx-auto h-6 w-6 text-indigo-600" />
              <p className="mt-2 text-xs font-medium text-slate-700">Admin</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <School className="mx-auto h-6 w-6 text-emerald-600" />
              <p className="mt-2 text-xs font-medium text-slate-700">Faculty</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <User className="mx-auto h-6 w-6 text-sky-600" />
              <p className="mt-2 text-xs font-medium text-slate-700">Student</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Login
