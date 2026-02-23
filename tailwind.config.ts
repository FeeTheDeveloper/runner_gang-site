import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rgBlack: '#0f0f0f',
        rgCharcoal: '#1a1a1a',
        rgBone: '#f3f1ea',
        rgSunset: '#d86c3d',
        rgMauve: '#b07a82',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

export default config
