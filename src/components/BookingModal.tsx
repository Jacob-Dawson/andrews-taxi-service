import { useState } from 'react'

interface Props {
    isOpen: boolean
    onClose: () => void
}

type Step = 'journey' | 'details' | 'confirmed'

interface FormData {
    pickup: string
    dropoff: string
    date: string
    time: string
    passengers: string
    name: string
    phone: string
    email: string
    notes: string
}

const empty: FormData = {
    pickup: '', dropoff: '', date: '', time: '', passengers: '1', name: '', phone: '', email: '', notes: ''
}

function StepIndicator({step}: {step: Step}){

    const steps: {key: Step; label: string}[] = [
        {key: 'journey', label: 'Journey'},
        {key: 'details', label: 'Your Details'},
        {key: 'confirmed', label: 'Confirmed'}
    ]

    const index = steps.findIndex((s) => s.key === step)

    return (
        <div className="flex items-center gap-0 mb-8">
            {steps.map((s, i) => (
                <div key={s.key} className="flex items-center">
                    <div className="flex flex-col items-center gap-1">
                        <div
                            className={`w-6 h-6 flex items-center justify-center text-xs transition-all duration-300 ${i <= index ? 'bg-gold text-bg font-medium' : 'border border-border text-muted'}`}
                        >
                            {i < index ? (
                                <svg viewBox="0 0 12 12" className="w-3 h-3 fill-bg">
                                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            ) : (
                                i + 1
                            )}
                        </div>
                        <span className={`text-[10px] tracking-widest uppercase whitespace-nowrap ${i <= index ? 'text-gold' : 'text-muted'}`}>
                            {s.label}
                        </span>
                    </div>
                    {i < steps.length - 1 && (
                        <div className={`w-12 sm:w-20 h-px mb-4 mx-1 transition-all duration-500 ${i < index ? 'bg-gold' : 'bg-border'}`}/>
                    )}
                </div>
            ))}
        </div>
    )

}

function Field({
    label, id, children
}: {
    label: string; id: string; children: React.ReactNode
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className="text-xs tracking-[0.15em] uppercase text-muted">
                {label}
            </label>
            {children}
        </div>
    )
}

const inputClass = 'bg-bg border border-border text-text text-sm px-4 py-3 placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors duration-200 w-full'

export default function BookingModal({ isOpen, onClose}: Props){

    const [step, setStep] = useState<Step>('journey')
    const [form, setForm] = useState<FormData>(empty)

    const set = (field: keyof FormData) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => setForm((prev) => ({...prev, [field]: e.target.value}))

    const handleClose = () => {
        onClose()
        setTimeout(() => {setStep('journey'); setForm(empty)}, 400)
    }

    const journeyValid = form.pickup && form.dropoff && form.date && form.time
    const detailsValid = form.name && form.phone

    if(!isOpen) return null

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                onClick={handleClose}
            />

            {/* Panel - drawer on mobile, modal on desktop */}
            <div className="fixed z-50 inset-x-0 bottom-0 sm:inset-0 sm:flex sm:items-center sm:justify-center sm:p-6">
                <div className="relative bg-surface border border-border w-full sm:max-w-lg max-h-[90vh] overflow-y-auto">

                    {/* Top Gold Rule */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"/>

                    {/* Header */}
                    <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border">
                        <div className="flex flex-col gap-0.5">
                            <h2 className="font-display text-xl text-text">Book a Ride</h2>
                            <p className="text-muted text-xs">Fixed fare · No hidden charges</p>
                        </div>
                        <button
                            onClick={handleClose}
                            className="text-muted hover:text-text transition-colors p-1 cursor-pointer"
                            aria-label="Close"
                        >
                            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Body */}
                    <div className="px-6 py-6">
                        {step !== 'confirmed' && <StepIndicator step={step} />}

                        {/* Step 1 - Journey */}
                        {step === 'journey' && (
                            <div className="flex flex-col gap-5">
                                <Field label="Pickup Address" id="pickup">
                                    <input id="pickup" type="text" placeholder="e.g. 14 High Street, Coventry" value={form.pickup} onChange={set('pickup')} className={inputClass} />
                                </Field>
                                <Field label="Dropoff Address" id="dropoff">
                                    <input id="dropoff" type="text" placeholder="e.g. Heathrow Terminal 5" value={form.dropoff} onChange={set('dropoff')} className={inputClass}/>
                                </Field>
                                <div className="grid grid-cols-2 gap-4">
                                    <Field label="Date" id="date">
                                        <input id="date" type="date" value={form.date} onChange={set('date')} className={inputClass} />
                                    </Field>
                                    <Field label="Time" id="time">
                                        <input id="time" type="time" value={form.time} onChange={set('time')} className={inputClass} />
                                    </Field>
                                </div>
                                <Field label="Passengers" id="passengers">
                                    <select id="passengers" value={form.passengers} onChange={set('passengers')} className={inputClass}>
                                        {[1,2,3,4,5,6,7,8].map((n) => (
                                            <option key={n} value={n}>{n} passenger{n > 1 ? 's' : ''}</option>
                                        ))}
                                    </select>
                                </Field>

                                <button
                                    onClick={() => setStep('details')}
                                    disabled={!journeyValid}
                                    className="mt-2 w-full py-3.5 bg-gold text-bg text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                                >
                                    Next: Your Details
                                </button>
                            </div>
                        )}

                        {/* Step 2 - Details */}
                        {step === 'details' && (
                            <div className="flex flex-col gap-5">
                                {/* Journey summary */}
                                <div className="bg-bg border border-border p-4 flex flex-col gap-2 text-xs text-muted mb-2">
                                    <div className="flex justify-between">
                                        <span>From</span>
                                        <span className="text-text text-right max-w-[60%] truncate">
                                            {form.pickup}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>To</span>
                                        <span className="text-text text-right max-w-[60%] truncate">
                                            {form.dropoff}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>When</span>
                                        <span className="text-text">
                                            {form.date} at {form.time}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Passengers</span>
                                        <span className="text-text">
                                            {form.passengers}
                                        </span>
                                    </div>
                                </div>

                                <Field label="Full Name" id="name">
                                    <input id="name" type="text" placeholder="e.g. Jane Smith" value={form.name} onChange={set('name')} className={inputClass}/>
                                </Field>
                                <Field label="Phone Number" id="phone">
                                    <input id="phone" type="tel" placeholder="e.g. 07700 900123" value={form.phone} onChange={set('phone')} className={inputClass}/>
                                </Field>
                                <Field label="Email (optional)" id="email">
                                    <input id="email" type="email" placeholder="e.g. jane@email.com" value={form.email} onChange={set('email')} className={inputClass} />
                                </Field>
                                <Field label="Additional Notes (optional)" id="notes">
                                    <textarea id="notes" rows={3} placeholder="e.g. flight number, luggage info, meet & greet..." value={form.notes} onChange={set('notes')} className={`${inputClass} resize-none`} />
                                </Field>

                                <div className="flex gap-3 mt-2">
                                    <button
                                        onClick={() => setStep('journey')}
                                        className="flex-1 py-3.5 border border-border text-muted text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300 cursor-pointer"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={() => setStep('confirmed')}
                                        disabled={!detailsValid}
                                        className="flex-[2] py-3.5 bg-gold text-bg text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                                    >
                                        Confirm Booking
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 3 - Confirmed */}
                        {step === 'confirmed' && (
                            <div className="flex flex-col items-center text-center gap-6 py-4">
                                <div className="w-14 h-14 border border-gold flex items-center justify-center">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-display text-2xl text-text">Booking Received</h3>
                                    <p className="text-muted text-sm font-light leading-relaxed max-w-xs">
                                        Thank you, <span className="text-text">{form.name}</span>. Andrew will 
                                        confirm your journey to <span className="text-text">{form.dropoff}</span> shortly. 
                                        Expect a call on <span className="text-text">{form.phone}</span>
                                    </p>
                                </div>
                                <div className="w-full bg-bg border border-border p-4 flex flex-col gap-2 text-xs text-left">
                                    <div className="flex justify-between text-muted">
                                        <span>Pickup</span><span className="text-text truncate max-w-[60%]">{form.pickup}</span>
                                    </div>
                                    <div className="flex justify-between text-muted">
                                        <span>Dropoff</span><span className="text-text truncate max-w-[60%]">{form.dropoff}</span>
                                    </div>
                                    <div className="flex justify-between text-muted">
                                        <span>Date & Time</span><span className="text-text">{form.date} at {form.time}</span>
                                    </div>
                                    <div className="flex justify-between text-muted">
                                        <span>Passengers</span><span className="text-text">{form.passengers}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={handleClose}
                                    className="w-full py-3.5 border border-border text-muted text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300 cursor-pointer"
                                >
                                    Close
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </>
    )

}