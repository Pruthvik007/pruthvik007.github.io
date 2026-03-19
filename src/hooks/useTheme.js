import { useState, useEffect } from "react";

const STORAGE_KEY = "theme";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}
