import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Wifi, Tv, Coffee, Bath, Users } from "lucide-react"

export default function RoomsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative">
          <div className="relative h-[400px] w-full">
            <Image
              src="/background-img2.jpg?height=400&width=1200"
              alt="Rooms & Suites"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Rooms & Suites</h1>
              <p className="mt-4 text-xl max-w-md mx-auto">Discover comfort and luxury in our accommodations</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="w-[80%] mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Accommodations</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Choose from our range of rooms and suites designed for your comfort
                </p>
              </div>
            </div>

            <div className="mt-16 space-y-20">
              {/* Standard Room */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/standard-room.jpg?height=400&width=600"
                    alt="Standard Room"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold">Standard Room</h3>
                    <p className="text-primary font-medium mt-1">From $99 per night</p>
                  </div>
                  <p className="text-muted-foreground">
                    Our Standard Rooms offer comfort and convenience for business and leisure travelers. Each room
                    features a comfortable queen-sized bed, a work desk, and a private bathroom with premium amenities.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Wifi className="h-5 w-5 text-primary" />
                      <span className="text-sm">Free Wi-Fi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tv className="h-5 w-5 text-primary" />
                      <span className="text-sm">Flat-screen TV</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Coffee className="h-5 w-5 text-primary" />
                      <span className="text-sm">Coffee Maker</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="h-5 w-5 text-primary" />
                      <span className="text-sm">Private Bathroom</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm">Max 2 Guests</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button asChild>
                      <Link href="/booking">Book Now</Link>
                    </Button>
                    <Button variant="outline">View Details</Button>
                  </div>
                </div>
              </div>

              {/* Deluxe Room */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-1 md:order-2 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                  <Image src="/deluxe-room.jpg?height=400&width=600" alt="Deluxe Room" fill className="object-cover" />
                </div>
                <div className="order-2 md:order-1 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold">Deluxe Room</h3>
                    <p className="text-primary font-medium mt-1">From $149 per night</p>
                  </div>
                  <p className="text-muted-foreground">
                    Our Deluxe Rooms offer additional space and premium amenities for a more comfortable stay. Each room
                    features a king-sized bed, a sitting area, and a spacious bathroom with a bathtub and shower.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Wifi className="h-5 w-5 text-primary" />
                      <span className="text-sm">High-speed Wi-Fi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tv className="h-5 w-5 text-primary" />
                      <span className="text-sm">Smart TV</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Coffee className="h-5 w-5 text-primary" />
                      <span className="text-sm">Premium Coffee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="h-5 w-5 text-primary" />
                      <span className="text-sm">Bathtub & Shower</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm">Max 2 Guests</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button asChild>
                      <Link href="/booking">Book Now</Link>
                    </Button>
                    <Button variant="outline">View Details</Button>
                  </div>
                </div>
              </div>

              {/* Executive Suite */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/executive-room.jpg?height=400&width=600"
                    alt="Executive Suite"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold">Executive Suite</h3>
                    <p className="text-primary font-medium mt-1">From $249 per night</p>
                  </div>
                  <p className="text-muted-foreground">
                    Our Executive Suites offer a luxurious experience with a separate living area and bedroom. Each
                    suite features a king-sized bed, a spacious living room with a sofa, and a deluxe bathroom with
                    premium amenities.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Wifi className="h-5 w-5 text-primary" />
                      <span className="text-sm">Premium Wi-Fi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tv className="h-5 w-5 text-primary" />
                      <span className="text-sm">Multiple TVs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Coffee className="h-5 w-5 text-primary" />
                      <span className="text-sm">Espresso Machine</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="h-5 w-5 text-primary" />
                      <span className="text-sm">Luxury Bathroom</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm">Max 3 Guests</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button asChild>
                      <Link href="/booking">Book Now</Link>
                    </Button>
                    <Button variant="outline">View Details</Button>
                  </div>
                </div>
              </div>

              {/* Family Suite */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-1 md:order-2 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                  <Image src="/family-suite.jpg?height=400&width=600" alt="Family Suite" fill className="object-cover" />
                </div>
                <div className="order-2 md:order-1 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold">Family Suite</h3>
                    <p className="text-primary font-medium mt-1">From $299 per night</p>
                  </div>
                  <p className="text-muted-foreground">
                    Our Family Suites are perfect for families traveling together. Each suite features a master bedroom
                    with a king-sized bed, a second bedroom with two twin beds, a living area, and two bathrooms.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Wifi className="h-5 w-5 text-primary" />
                      <span className="text-sm">Premium Wi-Fi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tv className="h-5 w-5 text-primary" />
                      <span className="text-sm">Multiple TVs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Coffee className="h-5 w-5 text-primary" />
                      <span className="text-sm">Kitchenette</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="h-5 w-5 text-primary" />
                      <span className="text-sm">Two Bathrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm">Max 5 Guests</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button asChild>
                      <Link href="/booking">Book Now</Link>
                    </Button>
                    <Button variant="outline">View Details</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-secondary text-white">
          <div className="w-[80%] mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Room Policies</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">Important information about your stay</p>
              </div>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Check-in & Check-out</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Check-in: 3:00 PM</li>
                  <li>Check-out: 11:00 AM</li>
                  <li>Early check-in and late check-out available upon request (additional charges may apply)</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Cancellation Policy</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Free cancellation up to 48 hours before check-in</li>
                  <li>Cancellations within 48 hours of check-in are subject to a one-night charge</li>
                  <li>No-shows will be charged the full amount of the reservation</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Additional Information</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>All rooms are non-smoking</li>
                  <li>Pets are not allowed (service animals are welcome)</li>
                  <li>Government-issued ID and credit card required at check-in</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
