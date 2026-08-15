import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import SmoothButton from './ui/smoothui/smooth-button';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDark(isDark);
  }, []);

  const toggle = () => {
    const nextDark = !dark;
    document.documentElement.classList.toggle('dark', nextDark);
    localStorage.setItem('resume-theme', nextDark ? 'dark' : 'light');
    setDark(nextDark);
  };

  return (
    <SmoothButton
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="rounded-full"
      onClick={toggle}
      size="icon-sm"
      variant="ghost"
    >
      {dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </SmoothButton>
  );
}
