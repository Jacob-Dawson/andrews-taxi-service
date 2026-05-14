import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Coverage from './components/Coverage'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import BookingModal from './components/BookingModal'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){

  const [bookingOpen, setBookingOpen] = useState(false)
  const openBooking = () => setBookingOpen(true)

  return (
    <div className="min-h-screen bg-bg text-text font-body">
      <Navbar onBook={openBooking}/>
      <main>
        <Hero onBook={openBooking}/>
        <Services />
        <WhyUs />
        <Coverage />
        <Pricing />
        <Testimonials />
        <Contact onBook={openBooking}/>
      </main>
      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)}/>
    </div>
  )

}