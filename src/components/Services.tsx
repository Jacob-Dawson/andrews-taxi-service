import Reveal from "./Reveal"

const services = [
    {
        title: 'Airport Transfers',
        description: 'Stress-free journeys to and from all major airports. We monitor your flight in real time so we\'re there when you land - not when you booked.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
        )
    },
    {
        title: 'Corporate Travel',
        description: 'Punctual, professional, and discreet. Ideal for client collections, executive transfers, and regular business commutes billed to your account.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        )
    },
    {
        title: 'Event Transport',
        description: 'Weddings, concerts, sporting events, and nights out. Arrive in comfort, leave without the worry of parking or last orders.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
        )
    },
    {
        title: 'Local Runs',
        description: 'Need a ride across town? Fast, friendly, and fairly prices for everyday journeys - shopping, appointments, or just getting around.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        )
    },
    {
        title: 'Long Distance',
        description: 'Comfortable door-to-door travel anywhere in the country. Fixed fares agreed upfront - no meters, no surprises on arrival.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
            </svg>
        )
    },
    {
        title: 'Late Night',
        description: 'Available around the clock. When the last train has gone and apps are surging, Andrew\'s is a dependable call away.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
        )
    }
]

export default function Services(){

    return (
        <section id="services" className="relative py-28 px-6">
            {/* Subtle top fade from hero */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"/>

            <div className="max-w-7xl mx-auto">

                {/* Section header */}
                <Reveal className="flex flex-col items-center text-center gap-4 mb-16">
                    <div className="flex items-center gap-3">
                        <span className="block w-8 h-px bg-gold"/>
                        <span className="text-gold text-xs tracking-[0.3em] uppercase font-body font-medium">What We Offer</span>
                        <span className="block w-8 h-px bg-gold"/>
                    </div>
                    <h2 className="font-display font-light text-4xl sm:text-5xl text-text">
                        Every Journey, <span className="italic text-gold">Covered</span>
                    </h2>
                    <p className="text-muted font-light max-w-lg leading-relaxed">
                        From a quick local trip to a cross-country transfer, we have a service built around your needs.
                    </p>
                </Reveal>

                {/* Cards grid */}
                <Reveal delay={150} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
                    {services.map(({ title, description, icon}) => (
                        <div
                            key={title}
                            className="group bg-bg hover:bg-surface transition-colors duration-300 p-8 flex flex-col gap-5"
                        >
                            <div className="text-gold group-hover:scale-110 transition-transform duration-300 w-fit">
                                {icon}
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="font-display text-xl text-text">{title}</h3>
                                <p className="text-muted font-light text-sm leading-relaxed">{description}</p>
                            </div>
                            <div className="mt-auto pt-4 border-t border-border w-8 group-hover:w-full transition-all duration-500"/>
                        </div>
                    ))}
                </Reveal>

            </div>
        </section>
    )

}