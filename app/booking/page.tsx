import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, Users } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function BookingPage() {
  return (
    <div className="flex flex-col min-h-screen">
        <SiteHeader />
      <main className="flex-1">
        <section className="py-12 md:py-24">
          <div className="w-[80%] mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Book Your Stay</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Reserve your room at Love Plaza Hotel and enjoy a comfortable stay
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 lg:grid-cols-3 gap-8 pt-12">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Reservation Details</CardTitle>
                  <CardDescription>Fill in the information to complete your booking</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="check-in">Check-in Date</Label>
                      <div className="flex">
                        <Input id="check-in" type="date" className="rounded-r-none" />
                        <div className="flex items-center justify-center px-3 border border-l-0 rounded-r-md bg-muted">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="check-out">Check-out Date</Label>
                      <div className="flex">
                        <Input id="check-out" type="date" className="rounded-r-none" />
                        <div className="flex items-center justify-center px-3 border border-l-0 rounded-r-md bg-muted">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="adults">Adults</Label>
                      <div className="flex">
                        <Select>
                          <SelectTrigger id="adults" className="w-full rounded-r-none">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="flex items-center justify-center px-3 border border-l-0 rounded-r-md bg-muted">
                          <Users className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="children">Children</Label>
                      <div className="flex">
                        <Select>
                          <SelectTrigger id="children" className="w-full rounded-r-none">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">0</SelectItem>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="flex items-center justify-center px-3 border border-l-0 rounded-r-md bg-muted">
                          <Users className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="room-type">Room Type</Label>
                    <Select>
                      <SelectTrigger id="room-type" className="w-full">
                        <SelectValue placeholder="Select room type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard Room</SelectItem>
                        <SelectItem value="deluxe">Deluxe Room</SelectItem>
                        <SelectItem value="executive">Executive Suite</SelectItem>
                        <SelectItem value="family">Family Suite</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Guest Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" placeholder="Enter your phone number" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="special-requests">Special Requests</Label>
                      <textarea
                        id="special-requests"
                        className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Any special requests or requirements"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Complete Booking</Button>
                </CardFooter>
              </Card>
              <Card className="bg-secondary text-white">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                  <CardDescription className="text-gray-300">Review your reservation details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Dates</h3>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Check-in: Select a date</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Check-out: Select a date</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Duration: 0 nights</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Guests</h3>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Adults: 0, Children: 0</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Room</h3>
                    <p>Select a room type</p>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Room Rate</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Taxes & Fees</span>
                      <span>$0.00</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="font-bold">Total</span>
                      <span className="font-bold">$0.00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
