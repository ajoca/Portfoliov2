
import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx,md,mdx}', './components/**/*.{ts,tsx}', './content/**/*.{md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: { 50:'#eff6ff',100:'#dbeafe',200:'#bfdbfe',300:'#93c5fd',400:'#60a5fa',500:'#3b82f6',600:'#2563eb',700:'#1d4ed8',800:'#1e40af',900:'#1e3a8a' }
      },
      boxShadow: { soft:'0 8px 30px rgba(0,0,0,0.08)' },
      backgroundImage: { grid:'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)' }
    }
  },
  plugins: [typography]
} satisfies Config
