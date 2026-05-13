const testimonials = [
    {
        quote:
        "Andrew has been our go-to for airport runs for three years. Not once has he been late, and he tracked our delayed Heathrow flight without us even having to call. That kind of reliability is rare.",
        name: 'Sarah & Tom B.',
        context: 'Regular airport clients',
        rating: 5,
        featured: true,
    },
    {
        quote:
        "Used Andrew for a corporate client pickup and he was immaculate — punctual, professional, and the car was spotless. Our client was impressed. He's now on our preferred supplier list.",
        name: 'James R.',
        context: 'Operations Manager',
        rating: 5,
        featured: false,
    },
    {
        quote:
        "Booked a last-minute late night ride after missing the last train. Andrew answered on the first ring, gave me a fixed price on the spot, and was there in 15 minutes. Brilliant service.",
        name: 'Priya M.',
        context: 'Late night customer',
        rating: 5,
        featured: false,
    },
    {
        quote:
        "We use Andrew every year for our wedding season transfers. Guests always comment on how smooth and pleasant the experience is. Exactly what you want on a big day.",
        name: 'Claire & David H.',
        context: 'Wedding clients',
        rating: 5,
        featured: false,
    },
    {
        quote:
        "Honest pricing, clean car, friendly driver. I've tried a lot of taxi services in the area and nothing comes close. Book him before someone else does.",
        name: 'Marcus T.',
        context: 'Local regular',
        rating: 5,
        featured: false,
    }
]

function Stars({count}: {count: number}){

    return (
        <div className="flex items-center gap-0.5">
            {Array.from({ length: count}).map((_, i) => (

                <svg key={i} viewBox="0 0 12 12" className="w-3 h-3 fill-gold">
                    <path d="M6 0l1.5 4H12L8.25 6.5l1.5 4L6 8.25 2.25 10.5l1.5-4L0 4h4.5z" />
                </svg>

            ))}
        </div>
    )

}

export default function Testimonials(){

    const featured = testimonials.find((t) => t.featured)!
    const rest = testimonials.filter((t) => !t.featured)

    return (
        <section id="testimonials" className="relative py-28 px-6">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"/>

            <div className="max-w-7xl mx-auto">

                {/* Section header */}
                <div className="flex flex-col items-center text-center gap-4 mb-16">
                    <div className="flex items-center gap-3">
                        <span className="block w-8 h-px bg-gold"/>
                        <span className="text-gold text-xs tracking-[0.3em] uppercase font-body font-medium">Client Reviews</span>
                        <span className="block w-8 h-px bg-gold"/>
                    </div>
                    <h2 className="font-display font-light text-4xl sm:text-5xl text-text">
                        Trusted by <span className="italic text-gold">Thousands</span>
                    </h2>
                </div>

                {/* Featured quote */}
                <div className="relative bg-surface border border-border p-10 sm:p-14 mb-px overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"/>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_0%_80%,rgba(201,169,110,0.06),transparent)]"/>

                    {/* Large decorative quote mark */}
                    <span className="absolute top-6 right-10 font-display text-[8rem] leading-none text-gold/10 select-none">
                        "
                    </span>

                    <div className="relative z-10 max-w-3xl flex flex-col gap-6">
                        <Stars count={featured.rating} />
                        <blockquote className="font-display text-2xl sm:text-3xl font-light text-text leading-relaxed">
                            "{featured.quote}"
                        </blockquote>
                        <div className="flex items-center gap-4 pt-2 border-t border-border">
                            <div className="w-8 h-8 bg-gold/20 border border-gold/30 flex items-center justify-center">
                                <span className="font-display text-gold text-sm">{featured.name[0]}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-text text-sm font-medium">{featured.name}</span>
                                <span className="text-muted text-xs">{featured.context}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Review grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
                    {rest.map(({quote, name, context, rating}) => (
                        <div
                            key={name}
                            className="group bg-bg hover:bg-surface transition-colors duration-300 p-7 flex flex-col gap-5"
                        >
                            <Stars count={rating} />
                            <blockquote className="text-muted font-light text-sm leading-relaxed flex-1">
                                "{quote}"
                            </blockquote>
                            <div className="flex items-center gap-3 pt-4 border-t border-border">
                                <div className="w-7 h-7 bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                                    <span className="font-display text-gold text-xs">{name[0]}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-text text-xs font-medium">{name}</span>
                                    <span className="text-muted text-xs">{context}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )

}