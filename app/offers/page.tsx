import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Calendar, Utensils, Gift, Heart } from "lucide-react"

export default function OffersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative">
          <div className="relative h-[400px] w-full">
            <Image
              src="/background-img2.jpg?height=400&width=1200"
              alt="Special Offers"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Special Offers</h1>
              <p className="mt-4 text-xl max-w-md mx-auto">Exclusive deals and packages for your stay</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="w-[80%] mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Current Promotions</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Take advantage of our limited-time offers and special packages
                </p>
              </div>
            </div>

            <div className="mt-16 space-y-16">
              {/* Early Booking Offer */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/early-book.jpg?height=400&width=600"
                    alt="Early Booking Offer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Limited Time
                  </div>
                  <h3 className="text-2xl font-bold">Early Booking Offer</h3>
                  <p className="text-muted-foreground">
                    Book your stay at least 30 days in advance and enjoy 20% off our best available rates. This offer
                    includes complimentary breakfast and early check-in, subject to availability.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-sm">30+ days in advance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Utensils className="h-5 w-5 text-primary" />
                      <span className="text-sm">Free breakfast</span>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Button asChild>
                      <Link href="/booking">Book Now</Link>
                    </Button>
                    <Button variant="outline">View Details</Button>
                  </div>
                </div>
              </div>

              {/* Weekend Getaway */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-1 md:order-2 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/business.jpg?height=400&width=600"
                    alt="Weekend Getaway"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-2 md:order-1 space-y-6">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Popular
                  </div>
                  <h3 className="text-2xl font-bold">Weekend Getaway</h3>
                  <p className="text-muted-foreground">
                    Escape for the weekend with our special package that includes a two-night stay, daily breakfast, and
                    a $50 dining credit. Perfect for a quick refresh.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-sm">2-night minimum</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Utensils className="h-5 w-5 text-primary" />
                      <span className="text-sm">$50 dining credit</span>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Button asChild>
                      <Link href="/booking">Book Now</Link>
                    </Button>
                    <Button variant="outline">View Details</Button>
                  </div>
                </div>
              </div>

              {/* Romantic Package */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/romatic.jpg?height=400&width=600"
                    alt="Romantic Package"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Special Occasion
                  </div>
                  <h3 className="text-2xl font-bold">Romantic Package</h3>
                  <p className="text-muted-foreground">
                    Celebrate a special occasion with our romantic package. Enjoy a luxury suite, champagne upon
                    arrival, rose petal turndown service, and a candlelit dinner for two.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-primary" />
                      <span className="text-sm">Luxury suite</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Utensils className="h-5 w-5 text-primary" />
                      <span className="text-sm">Candlelit dinner</span>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Button asChild>
                      <Link href="/booking">Book Now</Link>
                    </Button>
                    <Button variant="outline">View Details</Button>
                  </div>
                </div>
              </div>

              {/* Business Traveler */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-1 md:order-2 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/weekend.jpg?height=400&width=600"
                    alt="Business Traveler"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-2 md:order-1 space-y-6">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Business
                  </div>
                  <h3 className="text-2xl font-bold">Business Traveler</h3>
                  <p className="text-muted-foreground">
                    Designed for the business traveler, this package includes a comfortable room, early check-in, late
                    check-out, breakfast, and access to our business center and high-speed Wi-Fi.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-sm">Flexible check-in/out</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gift className="h-5 w-5 text-primary" />
                      <span className="text-sm">Business amenities</span>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-6">
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Loyalty Program</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Join our loyalty program and enjoy exclusive benefits and rewards
                </p>
              </div>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold">Silver Tier</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  After 5 nights, enjoy benefits like early check-in, late check-out, and a 10% discount on dining.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold">Gold Tier</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  After 15 nights, receive all Silver benefits plus room upgrades, welcome amenities, and a 15% discount
                  on dining.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold">Platinum Tier</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  After 30 nights, enjoy all Gold benefits plus guaranteed availability, personalized concierge service,
                  and a 20% discount on all hotel services.
                </p>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="border-white hover:bg-white/10">
                Join Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
