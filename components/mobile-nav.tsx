"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="md:hidden">
      <Button
        variant="outline"
        size="icon"
        className="relative z-[101]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-[90] bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="fixed top-16 inset-x-0 z-[95] w-full overflow-y-auto bg-background shadow-lg">
            <div className="space-y-2 py-6 px-6">
              <Link
                href="/"
                className="flex items-center py-3 text-base font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/rooms"
                className="flex items-center py-3 text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Rooms
              </Link>
              <Link
                href="/amenities"
                className="flex items-center py-3 text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Amenities
              </Link>
              <Link
                href="/gallery"
                className="flex items-center py-3 text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className="flex items-center py-3 text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="flex items-center py-3 text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4">
                <Button className="w-full" asChild>
                  <Link href="/booking" onClick={() => setIsOpen(false)}>
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
