"use client"

import { Home, Dumbbell, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function BottomNav() {
  const pathname = usePathname()
  const [clickedItem, setClickedItem] = useState<string | null>(null)

  const navItems = [
    {
      name: "Home",
      href: "/dashboard",
      icon: Home,
    },
    {
      name: "Workouts",
      href: "/exercises",
      icon: Dumbbell,
    },
    {
      name: "Profile",
      href: "",
      icon: User,
    },
  ]

  useEffect(() => {
    if (clickedItem) {
      const timer = setTimeout(() => {
        setClickedItem(null)
      }, 200)

      return () => clearTimeout(timer)
    }
  }, [clickedItem])

  const handleClick = (name: string) => {
    setClickedItem(name)
  }

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 border-t bg-background md:hidden">
      <div className="grid h-full grid-cols-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const isClicked = clickedItem === item.name

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => handleClick(item.name)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 transition-all duration-200",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
                isClicked && "bg-primary/10",
              )}
            >
              <div className={cn("transition-all duration-300", isClicked && "scale-125")}>
                <item.icon className={cn("h-5 w-5 transition-all duration-300", isClicked && "animate-pulse")} />
              </div>
              <span className={cn("text-xs font-medium transition-all duration-200", isClicked && "scale-110")}>
                {item.name}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

