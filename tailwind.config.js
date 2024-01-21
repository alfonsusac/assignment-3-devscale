/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      borderRadius: {
        'large': '1.5rem'
      },
      keyframes: {
        fadeInFromBelow: {
          from: { opacity: 0, transform: "translateY(2rem)", },
          to: { opacity: 100, transform: "translateY(0)", }
        },
        fadeInFromLeft: {
          from: { opacity: 0, transform: "translateX(-24rem)", },
          to: { opacity: 100, transform: "translateX(0)", }
        },
        likeAnimation: {
          from: { transform: "translateY(0px) scale(.75) rotate(-6deg)"},
          '40%': { transform: "translateY(-0.75rem) scale(1.3) rotate(0)"},
          to: { transform: "translateY(0) scale(1) rotate(0)"},
        }
      }
    },
  },
  plugins: [],
}

