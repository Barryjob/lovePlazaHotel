import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Wifi, Utensils, Dumbbell, Car, Coffee, Calendar, Clock, Tv } from "lucide-react"

export default function AmenitiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative">
          <div className="relative h-[400px] w-full">
            <Image
              src="/background-img2.jpg?height=400&width=1200"
              alt="Hotel Amenities"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Hotel Amenities</h1>
              <p className="mt-4 text-xl max-w-md mx-auto">Discover the premium facilities at Love Plaza Hotel</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="w-[80%] mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Facilities</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Enjoy our premium amenities designed for your comfort and convenience
                </p>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Restaurant */}
              <div className="space-y-4">
                <div className="relative h-[200px] rounded-xl overflow-hidden">
                  <Image src="/restaurant.jpg?height=200&width=400" alt="Restaurant" fill className="object-cover" />
                </div>
                <div className="flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Restaurant</h3>
                </div>
                <p className="text-muted-foreground">
                  Our on-site restaurant offers a diverse menu of local and international cuisine prepared by our
                  talented chefs. Enjoy breakfast, lunch, and dinner in an elegant setting.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p>Hours: 6:30 AM - 10:30 PM</p>
                  <p>Breakfast: 6:30 AM - 10:30 AM</p>
                  <p>Lunch: 12:00 PM - 2:30 PM</p>
                  <p>Dinner: 6:00 PM - 10:30 PM</p>
                </div>
              </div>

              {/* Fitness Center */}
              <div className="space-y-4">
                <div className="relative h-[200px] rounded-xl overflow-hidden">
                  <Image
                    src="/gym.jpg?height=200&width=400"
                    alt="Fitness Center"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Dumbbell className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Fitness Center</h3>
                </div>
                <p className="text-muted-foreground">
                  Stay active during your stay at our fully-equipped fitness center. Our gym features modern cardio
                  equipment, free weights, and strength training machines.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p>Hours: 24/7 access for hotel guests</p>
                  <p>Complimentary towels and water</p>
                  <p>Personal training available upon request</p>
                </div>
              </div>

              {/* Business Center */}
              <div className="space-y-4">
                <div className="relative h-[200px] rounded-xl overflow-hidden">
                  <Image
                    src="/business-center.jpg?height=200&width=400"
                    alt="Business Center"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Business Center</h3>
                </div>
                <p className="text-muted-foreground">
                  Our business center provides everything you need to stay productive while traveling. Enjoy high-speed
                  internet, printing services, and private meeting rooms.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p>Hours: 7:00 AM - 9:00 PM</p>
                  <p>Printing, scanning, and faxing services</p>
                  <p>Meeting rooms available for reservation</p>
                </div>
              </div>

              {/* Parking */}
              <div className="space-y-4">
                <div className="relative h-[200px] rounded-xl overflow-hidden">
                  <Image src="/car-park.jpg?height=200&width=400" alt="Parking" fill className="object-cover" />
                </div>
                <div className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Parking</h3>
                </div>
                <p className="text-muted-foreground">
                  Convenient parking options are available for all guests. Choose between self-parking and valet
                  services for a hassle-free stay.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p>Self-parking: $20 per day</p>
                  <p>Valet parking: $30 per day</p>
                  <p>Electric vehicle charging stations available</p>
                </div>
              </div>

              {/* Café & Bar */}
              <div className="space-y-4">
                <div className="relative h-[200px] rounded-xl overflow-hidden">
                  <Image src="/cafe-bar.jpg?height=200&width=400" alt="Café & Bar" fill className="object-cover" />
                </div>
                <div className="flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Café & Bar</h3>
                </div>
                <p className="text-muted-foreground">
                  Our café and bar offer a relaxed atmosphere to enjoy coffee, cocktails, and light bites throughout the
                  day. Perfect for casual meetings or unwinding after a busy day.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p>Café hours: 6:00 AM - 6:00 PM</p>
                  <p>Bar hours: 4:00 PM - 12:00 AM</p>
                  <p>Happy hour: 4:00 PM - 6:00 PM daily</p>
                </div>
              </div>

              {/* Room Service */}
              <div className="space-y-4">
                <div className="relative h-[200px] rounded-xl overflow-hidden">
                  <Image src="/room-service.jpg?height=200&width=400" alt="Room Service" fill className="object-cover" />
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Room Service</h3>
                </div>
                <p className="text-muted-foreground">
                  Enjoy the convenience of dining in your room with our 24-hour room service. Choose from a diverse menu
                  of delicious options delivered right to your door.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p>Available 24 hours a day</p>
                  <p>Breakfast, lunch, dinner, and late-night options</p>
                  <p>Special dietary requirements accommodated</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-muted/50">
          <div className="w-[80%] mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">In-Room Amenities</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Every room at Love Plaza Hotel comes equipped with premium amenities
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Wifi className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Free Wi-Fi</h3>
                <p className="text-sm text-muted-foreground mt-2">High-speed internet throughout the property</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Tv className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Smart TV</h3>
                <p className="text-sm text-muted-foreground mt-2">Flat-screen TVs with streaming capabilities</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Coffee className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Coffee & Tea</h3>
                <p className="text-sm text-muted-foreground mt-2">In-room coffee and tea making facilities</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">24/7 Service</h3>
                <p className="text-sm text-muted-foreground mt-2">Round-the-clock front desk and room service</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
