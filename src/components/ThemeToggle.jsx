import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import cn from "../lib/utils";

const ThemeToggle = ({ isScrolled }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("dark");
    return saved !== "false";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden  right-4 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden cursor-pointer",
        isScrolled ? "top-2.5" : "top-3"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-400" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};

export default ThemeToggle;
