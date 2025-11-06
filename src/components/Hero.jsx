import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Rocket, Calendar, Shield } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow backdrop-blur"
        >
          <Shield className="h-4 w-4 text-emerald-600" />
          Academic Operations • Automation • Efficiency
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="mt-4 bg-gradient-to-r from-indigo-700 via-sky-600 to-emerald-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl"
        >
          UniSched — Automatic Timetable Generator & Scheduler
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12 }}
          className="mt-4 max-w-3xl text-base text-slate-700 sm:text-lg"
        >
          Generate clash‑free timetables, orchestrate resources, and update schedules in real‑time across Admin, Faculty, and Student dashboards.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#login"
            className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-white shadow-lg shadow-indigo-600/30 transition hover:-translate-y-0.5 hover:bg-indigo-700"
          >
            <Rocket className="h-5 w-5 transition group-hover:rotate-6" />
            Get Started
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-6 py-3 text-slate-800 ring-1 ring-slate-200 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
          >
            <Calendar className="h-5 w-5 text-sky-600" />
            Explore Features
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
