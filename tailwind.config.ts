import type { Config } from 'tailwindcss'

export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                bg:             'var(--color-bg)',
                surface:        'var(--color-surface)',
                border:         'var(--color-border)',
                gold:           'var(--color-gold)',
                'gold-light':   'var(--color-gold-light)',
                text:           'var(--color-text)',
                muted:          'var(--color-muted)'
            },
            fontFamily: {
                display:    'var(--font-display)',
                body:       'var(--font-body)'
            }
        }
    }
} satisfies Config