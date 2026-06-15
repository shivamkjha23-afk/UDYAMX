import type { Config } from 'tailwindcss';
const config: Config = { darkMode: 'class', content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'], theme: { extend: { fontFamily: { sans: ['var(--font-inter)'], display: ['var(--font-space)'] }, colors: { navy: '#06101f', electric: '#37a8ff' }, animation: { 'pulse-slow': 'pulse 5s ease-in-out infinite' } } }, plugins: [] };
export default config;
