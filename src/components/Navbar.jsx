import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, LogIn } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#home" className="inline-flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <Calendar className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold text-slate-900">UniSched</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#dashboard" className="hover:text-slate-900">Dashboard</a>
          <a href="#login" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-white hover:-translate-y-0.5">
            <LogIn className="h-4 w-4" /> Login
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
