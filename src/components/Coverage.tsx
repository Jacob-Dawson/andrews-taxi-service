import Reveal from "./Reveal"

const airports = [
    'Heathrow (LHR)',
    'Gatwick (LGW)',
    'Stansted (STN)',
    'Luton (LTN)',
    'Birmingham (BHX)',
    'Manchester (MAN)',
    'Bristol (BRS)',
    'East Midlands (EMA)',
]

const cities = [
    'London',
    'Birmingham',
    'Coventry',
    'Leicester',
    'Northampton',
    'Milton Keynes',
    'Oxford',
    'Cambridge',
    'Bristol',
    'Nottingham',
    'Derby',
    'Warwick',
]

// Decorative dot positions [cx%,cy%]
const dots: [number, number][] = [
    [30, 25], [55, 18], [72, 30], [20, 45],
    [48, 40], [65, 52], [38, 60], [80, 44],
    [25, 70], [60, 68], [45, 78], [70, 75],
    [15, 30], [85, 60], [50, 55]
]

export default function Coverage(){

    return (
        <section id="coverage" className="relative py-28 px-6">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"/>

            <div className="max-w-7xl mx-auto">

                {/* Section header */}
                <Reveal className="flex flex-col items-center text-center gap-4 mb-16">
                    <div className="flex items-center gap-3">
                        <span className="block w-8 h-px bg-gold"/>
                        <span className="text-gold text-xs tracking-[0.3em] uppercase font-body font-medium">Where We Go</span>
                        <span className="block w-8 h-px bg-gold"/>
                    </div>
                    <h2 className="font-display font-light text-4xl sm:text-5xl text-text">
                        Coverage You Can <span className="italic text-gold">Count On</span>
                    </h2>
                    <p className="text-muted font-light max-w-lg leading-relaxed">
                        Based in the Midlands, we cover all major airports and destinations across England.
                        Not sure if we reach you? Just call.
                    </p>
                </Reveal>

                {/* Main layout */}
                <Reveal delay={150} className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">

                    {/* Decorative map panel */}
                    <div className="bg-surface relative overflow-hidden min-h-96 flex items-center justify-center p-10">

                        {/* Background glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(201,169,110,0.07),transparent)]" />

                        <svg
                            viewBox="0 0 100 100"
                            className="w-full max-w-sm opacity-80"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* Concentric rings */}
                            {[8, 20, 34, 50].map((r) => (
                                <circle
                                key={r}
                                cx="50" cy="50" r={r}
                                fill="none"
                                stroke="var(--color-border)"
                                strokeWidth="0.4"
                                strokeDasharray="1.5 2"
                                />
                            ))}

                            {/* Crosshair lines */}
                            <line x1="50" y1="0" x2="50" y2="100" stroke="var(--color-border)" strokeWidth="0.3" />
                            <line x1="0" y1="50" x2="100" y2="50" stroke="var(--color-border)" strokeWidth="0.3" />

                            {/* Connection lines from centre to dots */}
                            {dots.map(([cx, cy], i) => (
                                <line
                                key={i}
                                x1="50" y1="50"
                                x2={cx} y2={cy}
                                stroke="var(--color-gold)"
                                strokeWidth="0.2"
                                opacity="0.25"
                                />
                            ))}

                            {/* Location dots */}
                            {dots.map(([cx, cy], i) => (
                                <circle
                                key={i}
                                cx={cx} cy={cy} r="1.2"
                                fill="var(--color-gold)"
                                opacity="0.6"
                                />
                            ))}

                            {/* Centre origin — home base */}
                            <circle cx="50" cy="50" r="2.5" fill="var(--color-gold)" opacity="0.9" />
                            <circle cx="50" cy="50" r="5" fill="none" stroke="var(--color-gold)" strokeWidth="0.5" opacity="0.4" />
                            <circle cx="50" cy="50" r="8" fill="none" stroke="var(--color-gold)" strokeWidth="0.3" opacity="0.2" />
                        </svg>

                        {/* Label */}
                        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-1">
                            <span className="text-gold text-xs tracking-[0.25em] uppercase">Base: Midlands, England</span>
                            <span className="text-muted text-[10px] tracking-widest">Nationwide coverage available</span>
                        </div>

                    </div>

                    {/* Location lists */}
                    <div className="bg-bg p-10 flex flex-col gap-10">

                        {/* Airports */}
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-3">
                                <span className="block w-4 h-px bg-gold" />
                                <span className="text-gold text-xs tracking-[0.25em] uppercase font-medium">Airports Served</span>
                            </div>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {airports.map((airport) => (
                                    <li
                                        key={airport}
                                        className="flex items-center gap-3 text-sm text-muted font-light group"
                                    >
                                        <span className="w-1 h-1 bg-gold shrink-0 group-hover:scale-150 transition-transform duration-200"/>
                                        <span className="group-hover:text-text transition-colors duration-200">{airport}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-full h-px bg-border" />

                        {/* Cities */}
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-3">
                                <span className="block w-4 h-px bg-gold"/>
                                <span className="text-gold text-xs tracking-[0.25em] uppercase font-medium">Towns & Cities</span>
                            </div>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {cities.map((city) => (
                                    <li
                                        key={city}
                                        className="flex items-center gap-3 text-sm text-muted font-light group"
                                    >
                                        <span className="w-1 h-1 bg-gold shrink-0 group-hover:scale-150 transition-transform duration-200"/>
                                        <span className="group-hover:text-text transition-colors duration-200">{city}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Call to action note */}
                        <div className="mt-auto pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <p className="text-muted text-sm font-light">
                                Don't see your destination? We likely still cover it.
                            </p>

                            <a
                                href="tel:+44 (0) 1234-567-890"
                                className="text-gold text-sm tracking-wider hover:text-gold-light transition-colors duration-200 whitespace-nowrap"
                            >
                                ++44 (0) 1234-567-890 →
                            </a>
                        </div>
                    </div>

                </Reveal>

            </div>
        </section>
    )

}