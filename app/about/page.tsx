import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative">
          <div className="relative h-[400px] w-full">
            <Image
              src="/background-img2.jpg?height=400&width=1200"
              alt="About Love Plaza Hotel"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">About Us</h1>
              <p className="mt-4 text-xl max-w-md mx-auto">Discover the story of Love Plaza Hotel</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="w-[80%] mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Story</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Founded in 2005, Love Plaza Hotel has been providing exceptional hospitality to guests from around the
                  world. What started as a small boutique hotel has grown into a premier destination for both business
                  and leisure travelers.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Our commitment to excellence and personalized service has earned us numerous accolades and the loyalty
                  of our guests, many of whom return year after year.
                </p>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image src="/background-img1.jpg?height=400&width=600" alt="Hotel History" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-muted/50">
          <div className="w-[80%] mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  At Love Plaza Hotel, our mission is to provide exceptional hospitality and create memorable
                  experiences for our guests. We strive to exceed expectations through personalized service, luxurious
                  accommodations, and attention to detail.
                </p>
              </div>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-lg border">
                <h3 className="text-xl font-bold mt-4">Excellence</h3>
                <p className="text-muted-foreground mt-2">
                  We are committed to excellence in every aspect of our service, from the cleanliness of our rooms to
                  the quality of our dining options.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border">
                <h3 className="text-xl font-bold mt-4">Hospitality</h3>
                <p className="text-muted-foreground mt-2">
                  We believe in the power of genuine hospitality to create lasting impressions and build relationships
                  with our guests.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border">
                <h3 className="text-xl font-bold mt-4">Innovation</h3>
                <p className="text-muted-foreground mt-2">
                  We continuously seek innovative ways to enhance the guest experience and stay ahead of industry
                  trends.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="w-[80%] mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Meet the dedicated professionals who make Love Plaza Hotel a special place
                </p>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-40 w-40 rounded-full overflow-hidden mb-4">
                  <Image src="/ceo.jpg?height=160&width=160" alt="CEO" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">John Anderson</h3>
                <p className="text-primary font-medium">CEO & Founder</p>
                <p className="text-sm text-muted-foreground mt-2">
                  With over 25 years of experience in the hospitality industry, John leads our team with passion and
                  vision.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative h-40 w-40 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/sarah.jpg?height=160&width=160"
                    alt="General Manager"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Sarah Johnson</h3>
                <p className="text-primary font-medium">General Manager</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Sarah ensures the smooth operation of the hotel and maintains our high standards of service.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative h-40 w-40 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/manager1.jpg?height=160&width=160"
                    alt="Executive Chef"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Michael Chen</h3>
                <p className="text-primary font-medium">Executive Chef</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Chef Michael creates culinary masterpieces that delight our guests with flavors from around the world.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative h-40 w-40 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/emily.jpg?height=160&width=160"
                    alt="Guest Relations Manager"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Emily Rodriguez</h3>
                <p className="text-primary font-medium">Guest Relations Manager</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Emily and her team are dedicated to ensuring that every guest has an exceptional experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-secondary text-white">
          <div className="w-[80%] mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Awards & Recognition</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  We're proud of the recognition we've received for our commitment to excellence
                </p>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold">Five-Star Excellence</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Awarded five stars by the International Hotel Association for three consecutive years.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold">Best Luxury Hotel</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Named "Best Luxury Hotel" by Travel & Leisure Magazine in 2022.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold">Sustainable Hospitality</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Recognized for our commitment to sustainable practices and environmental responsibility.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
