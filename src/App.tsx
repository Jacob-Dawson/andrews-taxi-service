import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'

const sections = [
  { id: 'why-us' },
  { id: 'coverage' },
  { id: 'pricing' },
  { id: 'testimonials' },
  { id: 'contact' }
]

export default function App(){

  return (
    <div className="min-h-screen bg-bg text-text font-body">
      <Navbar />
      <main>
        <Hero />
        <Services />
        {sections.map(({id}) => (
          <section
            key={id}
            id={id}
            className="min-h-screen flex items-center justify-center border-b border-border"
          >
            <span className="text-muted font-display text-2xl capitalize">{id}</span>
          </section>
        ))}
      </main>
    </div>
  )

}