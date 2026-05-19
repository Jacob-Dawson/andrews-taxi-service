import { useEffect, useState } from "react"

interface Props {

    onBook: () => void

}

export default function Hero({onBook}: Props){

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setLoaded(true), 80)
        return () => clearTimeout(t)
    }, [])

    const fade = (delay: number): React.CSSProperties => ({
        opacity:    loaded ? 1 : 0,
        transform:  loaded ? 'translateY(0)' : 'translateY(22px)',
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`
    })

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Background photo */}
            <img
                src="/images/hero.jpg"
                alt="A black cab"
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
          
            {/* Atmospheric background layers */}
            <div className="absolute inset-0 bg-bg" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,rgba(201,169,110,0.12),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_20%,rgba(201,169,110,0.04),transparent)]" />

            {/* Subtle grid texture */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:    `linear-gradient(var(--color-gold) 1px, transparent 1px),
                                        linear-gradient(90deg, var(--color-gold) 1px, transparent 1px)`,
                    backgroundSize:     '60px 60px'
                }}
            />

            {/* Thin gold horizontal rule - decorative */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"/>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-8">

                {/* Eyebrow */}
                <div style={fade(100)} className="flex items-center gap-3">
                    <span className="block w-8 h-px bg-gold"/>
                    <span className="text-gold text-xs tracking-[0.3em] uppercase font-body font-medium">
                        Est. in your City
                    </span>
                    <span className="block w-8 h-px bg-gold"/>
                </div>

                {/* Headline */}
                <h1 style={fade(220)} className="font-display font-light text-5xl sm:text-7xl lg:text-8xl leading-[1.05] tracking-tight">
                    <span className="block text-text">Your Journey</span>
                    <span className="block text-gold italic">Handled with</span>
                    <span className="block text-text">Precision</span>
                </h1>

                {/* Subheading */}
                <p style={fade(380)} className="text-muted font-body font-light text-base sm:text-lg max-w-xl leading-relaxed">
                    Professional private hire across the region - airport transfers, corporate travel, and late-night runs. Always on time, always immaculate.
                </p>

                {/* CTAs */}
                <div style={fade(500)} className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                    <button 
                        onClick={onBook} 
                        className="w-full sm:w-auto px-8 py-3.5 bg-gold text-bg text-sm font-medium tracking-widest uppercase hover:bg-gold-light transition-colors duration-300 cursor-pointer"
                    >
                        Book a Ride
                    </button>

                    <a
                        href="#pricing"
                        className="w-full sm:w-auto px-8 py-3.5 border border-border text-muted text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300 text-center"
                    >
                        View Pricing
                    </a>

                </div>

                {/* Trust strip */}
                <div style={fade(620)} className="flex flex-wrap justify-center items-center gap-6 mt-4 text-xs text-muted tracking-widest uppercase">
                    <span>✦ Licensed & Insured</span>
                    <span>✦ Fixed Fares</span>
                    <span>✦ 24 / 7 Availability</span>
                    <span>✦ Flight Monitoring</span>
                </div>
            </div>

            {/* Scroll cue */}
            <div style={fade(750)} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted">
                <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
                <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent animate-pulse"/>
            </div>
        </section>
    )

}