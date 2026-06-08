import { useState } from "react";
import { useTheme } from "./context/ThemeContext";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/40 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="font-semibold tracking-wide text-lg">
          ProductX
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-600 dark:text-gray-300">
          <a className="hover:text-black dark:hover:text-white" href="#">Home</a>
          <a className="hover:text-black dark:hover:text-white" href="#">Products</a>
          <a className="hover:text-black dark:hover:text-white" href="#">Categories</a>
          <a className="hover:text-black dark:hover:text-white" href="#">About</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">

          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-gray-700 dark:text-gray-300">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Categories</a>
          <a href="#">About</a>
        </div>
      )}
    </header>
  );
}