import Reveal from "./Reveal"

const stats = [
    { value: '10+', label: 'Years on the road' },
    { value: '5,000+', label: 'Rides completed' },
    { value: '4.85★', label: 'Average rating' }
]

const reasons = [
    {
        title: 'Fixed Fares, Always',
        description: 'Your price is agreed before we meet. No meter running, no surge pricing, no nasty surprises when you arrive.',
    },
    {
        title: 'Flight Monitoring',
        description: 'We track your flight in real time. Delayed by an hour? We already know. Your driver adjusts - your relax.'
    },
    {
        title: 'Fully Licensed & Insured',
        description: 'Every journey is covered. All vehicles hold full private hire licences and public liability insurance as standard.'
    },
    {
        title: 'Deep Local Knowledge',
        description: 'No postcode lottery. Andrew knows the roads, the shortcuts, and the best route at any time of day.'
    }
]

export default function WhyUs(){

    return (
        <section id="why-us" className="relative py-28 px-6">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"/>

            <div className="max-w-7xl mx-auto">

                {/* Section header */}
                <Reveal className="flex flex-col items-center text-center gap-4 mb-16">
                    <div className="flex items-center gap-3">
                        <span className="block w-8 h-px bg-gold"/>
                        <span className="text-gold text-xs tracking-[0.3em] uppercase font-body font-medium">Why Choose Us</span>
                        <span className="block w-8 h-px bg-gold"/>
                    </div>
                    <h2 className="font-display font-light text-4xl sm:text-5xl text-text">
                        The Difference Is in the <span className="italic text-gold">Detail</span>
                    </h2>
                </Reveal>

                {/* Bento grid */}
                <Reveal delay={150} className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border">

                    {/* Feature card - spans 1 col, 2 rows on large */}
                    <div className="lg:row-span-2 bg-surface relative overflow-hidden flex flex-col justify-between p-10 min-h-80">

                        {/* Car image - top half of card */}
                        <div className="relative h-48 lg:h-56 overflow-hidden shrink-0">
                            <img
                                src="/images/car-interior.jpg"
                                alt="Premium vehicle interior"
                                className="w-full h-full object-cover object-center"
                            />

                            {/* Gradient fade into card body */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface" />
                        </div>

                        {/* Background glow */}
                        <div className="absolute bottom-0 left-0 right-0 h-64 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(201,169,110,0.15),transparent)]" />

                        <div className="relative z-10 flex flex-col gap-6">
                            <div className="w-12 h-px bg-gold" />
                            <h3 className="font-display text-3xl sm:text-4xl font-light leading-tight text-text">
                                A service built on <span className="italic text-gold">trust</span>, not algorithms.
                            </h3>
                            <p className="text-muted font-light text-sm leading-relaxed max-w-xs">
                                Andrew's Taxi Service is one person, one standard. You speak to the driver directly - no call centers, no app glitches, no strangers.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="relative z-10 grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-border">
                            {stats.map(({value, label}) => (
                                <div key={label} className="flex flex-col gap-1">
                                    <span className="font-display text-2xl text-gold">{value}</span>
                                    <span className="text-muted text-xs leading-tight">{label}</span>
                                </div>
                            ))}
                        </div>


                    </div>

                    {/* Reason cards */}
                    {reasons.map(({title, description}) => (
                        <div
                            key={title}
                            className="group bg-bg hover:bg-surface transition-colors duration-300 p-8 flex flex-col gap-4"
                        >
                            <div className="flex items-start gap-3">
                                <span className="mt-1.5 block w-2 h-2 bg-gold shrink-0"/>
                                <h3 className="font-display text-xl text-text">{title}</h3>
                            </div>
                            <p className="text-muted font-light text-sm leading-relaxed pl-5">{description}</p>
                            <div className="mt-auto pt-4 border-t border-border w-8 group-hover:w-full transition-all duration-500"/>
                        </div>
                    ))}

                </Reveal>

            </div>
        </section>
    )

}