import { useEffect, useState } from "react";
import { useTheme } from "./context/ThemeContext";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);


  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`
fixed w-full top-0 z-50 backdrop-blur-xl border-b
transition
${scrolled
        ? "bg-white/90 dark:bg-black/70"
        : "bg-white/60 dark:bg-black/40"
      }
border-gray-200 dark:border-gray-800
`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="font-bold text-lg tracking-wide">
          ProductX
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Mobile Menu Button */}
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
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}