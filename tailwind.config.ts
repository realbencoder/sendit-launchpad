import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Updated brand colors based on SENDOR branding
				sendor: {
					DEFAULT: '#01BC3B',
					dark: '#019930',
					light: '#33D265',
					50: '#E8FFF0',
					100: '#D1FFE1',
					200: '#A3FFC3',
					300: '#75FFA5',
					400: '#47FF87',
					500: '#01BC3B',
					600: '#019930',
					700: '#017725',
					800: '#01541A',
					900: '#01320F'
				},
				// Keep abstract for backward compatibility
				abstract: {
					DEFAULT: '#01BC3B',
					dark: '#019930',
					light: '#33D265',
					purple: '#8B5CF6',
					pink: '#EC4899'
				},
				neon: {
					blue: '#0EA5E9',
					purple: '#8B5CF6',
					pink: '#EC4899',
					green: '#01BC3B',
					yellow: '#F59E0B'
				},
				gray: {
					850: '#1a1a1a',
					875: '#151515',
					900: '#0f0f0f',
					925: '#0d0d0d',
					950: '#0a0a0a'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'cyber-grid': "linear-gradient(rgba(1, 188, 59, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(1, 188, 59, 0.1) 1px, transparent 1px)"
			},
			keyframes: {
				'pulse-sendor': {
					'0%, 100%': {
						boxShadow: '0 0 5px #01BC3B, 0 0 10px #01BC3B, 0 0 15px #01BC3B',
					},
					'50%': {
						boxShadow: '0 0 10px #01BC3B, 0 0 20px #01BC3B, 0 0 30px #01BC3B',
					},
				},
				'glow': {
					'from': {
						textShadow: '0 0 10px #01BC3B, 0 0 20px #01BC3B, 0 0 30px #01BC3B',
					},
					'to': {
						textShadow: '0 0 20px #01BC3B, 0 0 30px #01BC3B, 0 0 40px #01BC3B',
					},
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-abstract': {
					'0%, 100%': {
						opacity: '1',
					},
					'50%': {
						opacity: '0.5',
					},
				},
				'slide-up': {
					'0%': {
						transform: 'translateY(100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-abstract': 'pulse-abstract 2s ease-in-out infinite',
				'slide-up': 'slide-up 0.3s ease-out',
				'pulse-neon': 'pulse-sendor 2s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'float': 'float 3s ease-in-out infinite'
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
