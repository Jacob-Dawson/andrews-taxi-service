const links = [
  { label: 'Services',     href: '#services' },
  { label: 'Why Us',       href: '#why-us' },
  { label: 'Coverage',     href: '#coverage' },
  { label: 'Pricing',      href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-10">

            {/* Top row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
                <a href="#" className="font-display text-xl text-gold tracking-wide">
                    Andrew's <span className="text-text font-light">Taxi Service</span>
                </a>
                <ul className="flex flex-wrap gap-x-8 gap-y-3">
                    {links.map(({ label, href }) => (
                        <li key={label}>
                            <a
                                href={href}
                                className="text-xs text-muted hover:text-gold transition-colors duration-200 tracking-wide uppercase"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Divider */}
            <div className="h-px bg-border" />

            {/* Bottom row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-muted">
                <p>© {new Date().getFullYear()} Andrew's Taxi Service. All rights reserved.</p>
                <div className="flex items-center gap-6">
                    <span>Licensed Private Hire Operator</span>
                    <span className="text-border">|</span>
                    <span>Fully Insured</span>
                </div>
            </div>

        </div>
    </footer>
  )
}