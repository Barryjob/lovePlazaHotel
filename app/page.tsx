import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Utensils, Wifi, Phone, Mail, Clock, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-[80%] mx-auto flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
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
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="relative h-[600px] w-full">
            <Image
              src="/background-img2.jpg?height=600&width=1200"
              alt="Love Plaza Hotel"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Welcome to Love Plaza Hotel & Suites</h1>
              <p className="mt-4 text-xl max-w-md mx-auto">Experience luxury and comfort in the heart of the city</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/booking">Book Your Stay</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white hover:bg-white/20 border-red-500"
                  asChild
                >
                  <Link href="/rooms">View Rooms</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-muted/50">
          <div className="w-[80%] mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Rooms</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Discover our selection of comfortable and elegant rooms
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              <div className="group relative overflow-hidden rounded-lg border">
                <div className="relative h-60 w-full">
                  <Image
                    src="/standard-room.jpg?height=240&width=360"
                    alt="Standard Room"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Standard Room</h3>
                  <p className="text-sm text-muted-foreground pt-2">Comfortable room with all essential amenities</p>
                  <div className="flex items-center gap-2 pt-4">
                    <span className="text-lg font-bold">#60,000</span>
                    <span className="text-sm text-muted-foreground">per night</span>
                  </div>
                  <Button className="mt-4 w-full" asChild>
                    <Link href="/booking">Book Now</Link>
                  </Button>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border">
                <div className="relative h-60 w-full">
                  <Image
                    src="/deluxe-room.jpg?height=240&width=360"
                    alt="Deluxe Room"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Deluxe Room</h3>
                  <p className="text-sm text-muted-foreground pt-2">Spacious room with premium furnishings</p>
                  <div className="flex items-center gap-2 pt-4">
                    <span className="text-lg font-bold">#90,000</span>
                    <span className="text-sm text-muted-foreground">per night</span>
                  </div>
                  <Button className="mt-4 w-full" asChild>
                    <Link href="/booking">Book Now</Link>
                  </Button>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border">
                <div className="relative h-60 w-full">
                  <Image
                    src="/executive-room.jpg?height=240&width=360"
                    alt="Suite"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Executive Suite</h3>
                  <p className="text-sm text-muted-foreground pt-2">Luxury suite with separate living area</p>
                  <div className="flex items-center gap-2 pt-4">
                    <span className="text-lg font-bold">#120,000</span>
                    <span className="text-sm text-muted-foreground">per night</span>
                  </div>
                  <Button className="mt-4 w-full" asChild>
                    <Link href="/booking">Book Now</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <Button variant="outline" asChild>
                <Link href="/rooms">View All Rooms</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="w-[80%] mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hotel Features</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Enjoy our premium facilities designed for your comfort
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Wifi className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Free Wi-Fi</h3>
                <p className="text-sm text-muted-foreground mt-2">High-speed internet throughout the property</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Utensils className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Restaurant</h3>
                <p className="text-sm text-muted-foreground mt-2">Fine dining with local and international cuisine</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Event Spaces</h3>
                <p className="text-sm text-muted-foreground mt-2">Venues for meetings and special occasions</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">24/7 Service</h3>
                <p className="text-sm text-muted-foreground mt-2">Round-the-clock front desk and room service</p>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <Button variant="outline" asChild>
                <Link href="/amenities">Explore All Amenities</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-muted/50">
          <div className="w-[80%] mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Special Offer
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Book Direct for the Best Rates
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Enjoy exclusive benefits when you book directly with us. Get 10% off your stay, free breakfast, and
                  early check-in.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/booking">Book Now</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/offers">View All Offers</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image src="/direct-book.jpg?height=400&width=600" alt="Special Offer" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="w-[80%] mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Guest Reviews</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  See what our guests have to say about their stay
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              <div className="rounded-lg border p-6">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "The room was spacious and clean, the staff was friendly and helpful. I would definitely stay here
                  again."
                </p>
                <div className="mt-4 pt-4 border-t">
                  <p className="font-medium">John Smith</p>
                  <p className="text-sm text-muted-foreground">Business Traveler</p>
                </div>
              </div>
              <div className="rounded-lg border p-6">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Perfect location, amazing breakfast, and the most comfortable beds. We had a wonderful family
                  vacation."
                </p>
                <div className="mt-4 pt-4 border-t">
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Family Traveler</p>
                </div>
              </div>
              <div className="rounded-lg border p-6">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={i < 4 ? "h-5 w-5 fill-primary text-primary" : "h-5 w-5 text-muted-foreground"}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Great value for money. The hotel amenities were excellent and the staff went above and beyond to help
                  us."
                </p>
                <div className="mt-4 pt-4 border-t">
                  <p className="font-medium">Michael Brown</p>
                  <p className="text-sm text-muted-foreground">Couple</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-secondary text-white">
          <div className="w-[80%] mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image src="/location.jpg?height=400&width=600" alt="Hotel Location" fill className="object-cover" />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Location</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Love Plaza Hotel is conveniently located in the heart of the city, just minutes away from major
                  attractions, shopping centers, and business districts.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>1, Irimaro Quarters, malake community, Sagamu </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>09029172378</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>info@loveplazahotel.com</span>
                  </li>
                </ul>
                <Button variant="outline" asChild>
                  <Link href="/contact">Get Directions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-secondary text-white">
        <div className="w-[80%] mx-auto flex flex-col gap-6 py-8 md:py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Love Plaza Hotel</h3>
              <p className="text-sm text-muted-foreground">
                Providing luxury accommodations and exceptional service since 2005.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/rooms" className="text-muted-foreground hover:text-foreground">
                    Rooms & Suites
                  </Link>
                </li>
                <li>
                  <Link href="/amenities" className="text-muted-foreground hover:text-foreground">
                    Amenities
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-muted-foreground hover:text-foreground">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/offers" className="text-muted-foreground hover:text-foreground">
                    Special Offers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                  <span className="text-muted-foreground">1, Irimaro Quarters, malake community, Sagamu </span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 text-muted-foreground" />
                  <span className="text-muted-foreground">09029172378</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 text-muted-foreground" />
                  <span className="text-muted-foreground">info@loveplazahotel.com</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Newsletter</h3>
              <p className="text-sm text-muted-foreground">
                Subscribe to our newsletter for special deals and updates.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit" size="sm">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row items-center justify-between border-t pt-6">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Love Plaza Hotel. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
