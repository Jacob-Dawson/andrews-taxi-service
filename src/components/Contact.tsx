interface Props{
    onBook: () => void
}

const details = [
    {
        label: 'Phone',
        value: '+44 (0) 1234 567 890',
        href: 'tel: +441234567890',
        note: 'Call or text, any time'
    },
    {
        label: 'Email',
        value: 'andrew@andrewstaxi.co.uk',
        href: 'mailto:andrew@andrewstaxi.co.uk',
        note: 'We reply within the hour'
    },
    {
        label: 'Hours',
        value: '24 hours, 7 days',
        href: null,
        note: 'Including bank holidays'
    },
    {
        label: 'Base',
        value: 'Midlands, England',
        href: null,
        note: 'Nationwide coverage available'
    }
]

export default function Contact({onBook}: Props){

    return(
        <section id="contact" className="relative py-28 px-6">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(201,169,110,0.07),transparent)]" />

            <div className="max-w-4xl mx-auto relative z-10">

                {/* Section header */}
                <div className="flex flex-col items-center text-center gap-4 mb-16">
                    <div className="flex items-center gap-3">
                        <span className="block w-8 h-px bg-gold" />
                        <span className="text-gold text-xs tracking-[0.3em] uppercase font-body font-medium">Get in Touch</span>
                        <span className="block w-8 h-px bg-gold" />
                    </div>
                    <h2 className="font-display font-light text-4xl sm:text-5xl text-text">
                        Ready When <span className="italic text-gold">You Are</span>
                    </h2>
                    <p className="text-muted font-light max-w-md leading-relaxed">
                        No holding music, no bots. Call or text Andrew directly and
                        get a confirmed fare within minutes.
                    </p>
                </div>

                {/* Big phone CTA */}
                <div className="flex flex-col items-center gap-6 mb-16">
                    <a
                        href="tel:+441234567890"
                        className="group font-display text-4xl sm:text-6xl text-gold hover:text-gold-light transition-colors duration-300 tracking-tight"
                    >
                        +44 1234 567 890
                    </a>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <a
                            href="tel:+441234567890"
                            className="w-full sm:w-auto px-8 py-3.5 bg-gold text-bg text-sm font-medium tracking-widest uppercase hover:bg-gold-light transition-colors duration-300 text-center"
                        >
                            Call Now
                        </a>
                        <button
                            onClick={onBook}
                            className="w-full sm:w-auto px-8 py-3.5 border border-border text-muted text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300"
                        >
                            Book Online
                        </button>
                    </div>
                </div>

                {/* Detail grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
                {details.map(({ label, value, href, note }) => (
                    <div key={label} className="bg-bg hover:bg-surface transition-colors duration-200 p-7 flex flex-col gap-2">
                        <span className="text-xs tracking-[0.2em] uppercase text-gold">{label}</span>
                        {href ? (
                            <a href={href} className="font-body text-text text-sm hover:text-gold-light transition-colors duration-200">
                            {value}
                            </a>
                        ) : (
                            <span className="font-body text-text text-sm">{value}</span>
                        )}
                        <span className="text-muted text-xs">{note}</span>
                    </div>
                ))}
                </div>

            </div>
        </section>
    )

}