import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative">
          <div className="relative h-[400px] w-full">
            <Image
              src="/background-img2.jpg?height=400&width=1200"
              alt="Hotel Gallery"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Photo Gallery</h1>
              <p className="mt-4 text-xl max-w-md mx-auto">Explore the beauty of Love Plaza Hotel</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="w-[80%] mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Hotel</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Take a visual tour of our beautiful property
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Hotel Exterior"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Hotel Lobby"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Reception Area"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Hotel Restaurant"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Hotel Bar"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Swimming Pool"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
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
                  Explore our comfortable and elegant accommodations
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Standard Room"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Deluxe Room"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Executive Suite"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Family Suite"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Bathroom"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Room View"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="w-[80%] mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Amenities</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Discover our premium facilities and services
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Fitness Center"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Spa"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Conference Room"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Business Center"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Breakfast Buffet"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Hotel Garden"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
