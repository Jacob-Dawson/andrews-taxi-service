import { useEffect, useState } from "react";

const navLinks = [
    { label: 'Services',    href: '#services' },
    { label: 'Why Us',      href: '#why-us' },
    { label: 'Coverage',    href: '#coverage' },
    { label: 'Pricing',     href: '#pricing' },
    { label: 'Testimonials',href: '#testimonials' },
    { label: 'Contact',     href: '#contact'}
]

interface Props { onBook: () => void }

export default function Navbar({onBook}: Props){

    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {

        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, {passive: true})
        return () => window.removeEventListener('scroll', onScroll)

    }, [])

    return (
        <header
            className={
                `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-surface/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'}`
            }
        >
            <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Wordmark */}
                <a href="#" className="font-display text-xl text-gold tracking-wide">
                    Andrew's <span className="text-text font-light">Taxi Service</span>
                </a>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map(({label, href}) => (
                        <li key={label}>
                            <a
                                href={href}
                                className="text-sm text-muted hover:text-gold transition-colors duration-200 tracking-wide"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}

                <button
                    onClick={onBook}
                    className="hidden md:inline-flex items-center gap-2 px-5 py-2 border border-gold text-gold text-sm tracking-wider hover:bg-gold hover:text-bg transition-all duration-300 cursor-pointer"
                >
                    Book a ride
                </button>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-px bg-text transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                    <span className={`block w-6 h-px bg-text transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}/>
                    <span className={`block w-6 h-px bg-text transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}/>
                </button>

            </nav>

            {/* Mobile menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
                <ul className="bg-surface border-t border-border px-6 py-4 flex flex-col gap-4">
                    {navLinks.map(({ label, href}) => (
                        <li key={label}>
                            <a
                                href={href}
                                className="text-muted hover:text-gold transition-colors duration-200 text-sm tracking-wide"
                                onClick={() => setMenuOpen(false)}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button
                            className="inline-flex items-center px-5 py-2 border border-gold text-gold text-sm tracking-wider hover:bg-gold hover:text-bg transition-all duration-300 cursor-pointer"
                            onClick={() => {setMenuOpen(false); onBook()}}
                        >
                            Book a Ride
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    )

}