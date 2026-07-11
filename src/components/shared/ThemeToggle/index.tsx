import { memo, useCallback } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/shared/providers/theme-provider"
import { ThemeToggleCircular } from "@/components/shared/ThemeToggleCircular"

const ThemeToggle = memo(function ThemeToggle() {
  const { setTheme } = useTheme()

  const toggleTheme = useCallback(() => {
    const isDark = document.documentElement.classList.contains("dark")
    if (isDark) {
      document.documentElement.classList.remove("dark")
      setTheme("light")
    } else {
      document.documentElement.classList.add("dark")
      setTheme("dark")
    }
  }, [setTheme])

  return (
    <ThemeToggleCircular onToggle={toggleTheme}>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle theme"
        className="rounded-none border-2 border-transparent text-muted-foreground/60 hover:border-border/40 hover:bg-muted/30 hover:text-foreground"
      >
        <Sun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      </Button>
    </ThemeToggleCircular>
  )
})

export default ThemeToggle
