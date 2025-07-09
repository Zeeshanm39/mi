
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };                       

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle theme"
      className="relative  flex items-center justify-center rounded-full
                 bg-gray-200 dark:bg-gray-700 transition-colors duration-500 focus:outline-none"
    >
      {/* Moon Icon */}
      <span
        className={`absolute transition-opacity duration-500 text-xl ${
          theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-45 scale-75'
        }`}
      >
        🌙
      </span>

      {/* Sun Icon */}
      <span
        className={`absolute transition-opacity duration-500 text-xl ${
          theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-75'
        }`}
      >
        ☀️
      </span>
    </button>
  );
}
