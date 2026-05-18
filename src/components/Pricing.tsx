import { useState } from 'react'
import Reveal from './Reveal'

type Fare = { destination: string; detail: string; price: string;}

const airportFares: Fare[] = [
  { destination: 'East Midlands (EMA)', detail: '~18 miles', price: '£25' },
  { destination: 'Birmingham (BHX)',    detail: '~28 miles', price: '£35' },
  { destination: 'Luton (LTN)',         detail: '~60 miles', price: '£70' },
  { destination: 'Stansted (STN)',      detail: '~85 miles', price: '£95' },
  { destination: 'Manchester (MAN)',    detail: '~90 miles', price: '£100' },
  { destination: 'Bristol (BRS)',       detail: '~95 miles', price: '£110' },
  { destination: 'Heathrow (LHR)',      detail: '~100 miles', price: '£115' },
  { destination: 'Gatwick (LGW)',       detail: '~115 miles', price: '£130' },
]

const cityFares: Fare[] = [
  { destination: 'Coventry',       detail: 'City centre',      price: '£18' },
  { destination: 'Warwick',        detail: 'Town centre',      price: '£22' },
  { destination: 'Derby',          detail: 'City centre',      price: '£28' },
  { destination: 'Leicester',      detail: 'City centre',      price: '£30' },
  { destination: 'Nottingham',     detail: 'City centre',      price: '£32' },
  { destination: 'Birmingham',     detail: 'City centre',      price: '£35' },
  { destination: 'Northampton',    detail: 'Town centre',      price: '£42' },
  { destination: 'Milton Keynes',  detail: 'Central MK',       price: '£55' },
  { destination: 'Oxford',         detail: 'City centre',      price: '£70' },
  { destination: 'Cambridge',      detail: 'City centre',      price: '£82' },
  { destination: 'London',         detail: 'Central London',   price: '£130' },
]

type Tab = 'airports' | 'cities'

export default function Pricing(){

    const [activeTab, setActiveTab] = useState<Tab>('airports')

    const fares = activeTab === 'airports' ? airportFares : cityFares

    return (
        <section id="pricing" className='relative py-28 px-6'>
            <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent'/>

            <div className='max-w-4xl mx-auto'>

                {/* Section header */}
                <Reveal className="flex flex-col items-center text-center gap-4 mb-16">
                    <div className="flex items-center gap-3">
                        <span className="block w-8 h-px bg-gold" />
                        <span className="text-gold text-xs tracking-[0.3em] uppercase font-body font-medium">Fixed Fares</span>
                        <span className="block w-8 h-px bg-gold" />
                    </div>
                    <h2 className="font-display font-light text-4xl sm:text-5xl text-text">
                        Transparent <span className="italic text-gold">Pricing</span>
                    </h2>
                    <p className="text-muted font-light max-w-lg leading-relaxed">
                        All fares are fixed and agreed before departure. Prices shown are one-way from our Midlands base.
                        Return journeys receive a 10% discount.
                    </p>
                </Reveal>

                <Reveal delay={150} className="flex flex-col">
                    {/* Tab switcher */}
                    <div className="flex items-center border border-border mb-0 w-fit mx-auto">
                        {(['airports', 'cities'] as Tab[]).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300 cursor-pointer ${activeTab === tab ? 'bg-gold text-bg font-medium' : 'text-muted hover:text-gold'}`}
                            >
                                {tab === 'airports' ? 'Airports' : 'Towns & Cities'}
                            </button>
                        ))}
                    </div>

                    {/* Table */}
                    <div className="border border-border border-t-0">

                        {/* Table header */}
                        <div className="grid grid-cols-12 bg-surface px-6 py-3 border-b border-border">
                            <span className="col-span-6 text-xs text-gold tracking-[0.2em] uppercase">Destination</span>
                            <span className="col-span-3 text-xs text-gold tracking-[0.2em] uppercase hidden sm:block">Distance</span>
                            <span className="col-span-6 sm:col-span-3 text-xs text-gold tracking-[0.2em] uppercase text-right">From</span>
                        </div>

                        {/* Rows */}
                        {fares.map(({ destination, detail, price}, i) => (

                            <div
                                key={destination}
                                className={`grid grid-cols-12 px-6 py-4 items-center hover:bg-surface transition-colors duration-200 ${i < fares.length - 1 ? 'border-b border-border' : ''}`}
                            >
                                <span className="col-span-6 font-body text-sm text-text">{destination}</span>
                                <span className="col-span-3 text-sm text-muted hidden sm:block">{detail}</span>
                                <span className="col-span-6 sm:col-span-3 font-display text-xl text-gold text-right">{price}</span>
                            </div>

                        ))}

                    </div>

                    {/* Footer note */}
                    <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-1">
                        <p className="text-muted text-xs leading-relaxed max-w-sm">
                            Prices are estimates for standard saloon vehicles. Additional charges may apply for
                            out-of-hours, extra luggage, or meet &amp; greet services.
                        </p>
                        <a
                            href="#contact"
                            className="whitespace-nowrap text-gold text-sm tracking-wider hover:text-gold-light transition-colors duration-200"
                        >
                            Get an exact quote →
                        </a>
                    </div>

                </Reveal>

            </div>
        </section>
    )

}