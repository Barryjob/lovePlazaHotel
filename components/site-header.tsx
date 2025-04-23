"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileNav } from "./mobile-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-[100] w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-[80%] mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-[101]">
          <span className="text-xl font-bold">Love Plaza Hotel</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link
            href="/rooms"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Rooms
          </Link>
          <Link
            href="/amenities"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Amenities
          </Link>
          <Link
            href="/gallery"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Gallery
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:flex">
            <Link href="/booking">Book Now</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
