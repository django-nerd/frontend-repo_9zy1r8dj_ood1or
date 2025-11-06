import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Login />
        <Dashboard />
      </main>
      <footer className="border-t border-slate-100 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} UniSched — Automatic Timetable Generator & Scheduler (ATGS). Built for academic operations and institutional efficiency.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
