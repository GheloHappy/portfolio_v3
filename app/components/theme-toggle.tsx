'use client'

import { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const initialTheme = localStorage.getItem('theme') === 'dark'
    document.documentElement.classList.toggle('dark', initialTheme)
    setIsDarkMode(initialTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    document.documentElement.classList.toggle('dark', newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  return (
    <>
      <button
        onClick={toggleTheme}
        className="fixed top-5 right-5 p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <FaSun className="text-yellow-400 text-xl" />
        ) : (
          <FaMoon className="text-white text-xl" />
        )}
      </button>
    </>
  )
}