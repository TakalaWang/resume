import { useEffect, useState } from "react";
import ThemeToggle, { type ThemeToggleValue } from "@/components/smoothui/theme-toggle";

// The saved choice is applied before paint by the inline script in Base.astro.
const apply = (theme: ThemeToggleValue) => {
  const dark = theme === "dark" || (theme === "system" && matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
  try { localStorage.setItem("theme", theme); } catch {}
};

// No `label`: SmoothUI renders it as visible text next to the icon; it falls back to aria-label "Theme".
export default function ThemeSwitch(_: { label?: string }) {
  // Light/dark only: SmoothUI's "system" glyph is a half-lit disc that reads as a broken icon.
  const [theme, setTheme] = useState<ThemeToggleValue>("light");
  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);
  return (
    <ThemeToggle
      onThemeChange={t => { setTheme(t); apply(t); }}
      showSystem={false}
      size="sm"
      theme={theme}
      variant="sun-moon"
    />
  );
}
