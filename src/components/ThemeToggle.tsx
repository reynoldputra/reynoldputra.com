"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      className="w-11 h-11 inline-flex items-center justify-center text-muted hover:text-foreground"
    >
      {theme === "dark" && <FiSun size={18} />}
      {theme === "light" && <FiMoon size={18} />}
    </button>
  );
}
