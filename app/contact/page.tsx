import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative">
          <div className="relative h-[400px] w-full">
            <Image
              src="/background-img2.jpg?height=400&width=1200"
              alt="Contact Us"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Contact Us</h1>
              <p className="mt-4 text-xl max-w-md mx-auto">We're here to assist you with any inquiries</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="w-[80%] mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
                  <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                    We'd love to hear from you. Please fill out the form or contact us using the information below.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold">Address</h3>
                      <p className="text-muted-foreground">123 Main Street, City Center</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-muted-foreground">info@loveplazahotel.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold">Hours</h3>
                      <p className="text-muted-foreground">Front Desk: 24/7</p>
                      <p className="text-muted-foreground">Reservations: 8:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image src="/contact.jpg?height=300&width=600" alt="Hotel Map" fill className="object-cover" />
                </div>
              </div>
              <div>
                <form className="space-y-6 rounded-lg border p-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Enter the subject" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-muted/50">
          <div className="w-[80%] mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Find answers to common questions about Love Plaza Hotel
                </p>
              </div>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">What are the check-in and check-out times?</h3>
                <p className="text-muted-foreground">
                  Check-in time is 3:00 PM and check-out time is 11:00 AM. Early check-in and late check-out may be
                  available upon request, subject to availability.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Is breakfast included in the room rate?</h3>
                <p className="text-muted-foreground">
                  Breakfast is included in some room rates. Please check the details of your reservation or contact our
                  reservations team for more information.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Do you offer airport transportation?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer airport transportation for an additional fee. Please contact our concierge at least 24
                  hours in advance to arrange this service.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Is there a fitness center at the hotel?</h3>
                <p className="text-muted-foreground">
                  Yes, our hotel features a fully-equipped fitness center that is available to all guests 24 hours a
                  day.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Do you have parking facilities?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer both self-parking and valet parking options. Self-parking is $20 per day, and valet
                  parking is $30 per day.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Is the hotel pet-friendly?</h3>
                <p className="text-muted-foreground">
                  We do not allow pets, with the exception of service animals. Please contact us in advance if you will
                  be traveling with a service animal.
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
