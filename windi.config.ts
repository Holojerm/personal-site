import { defineConfig } from "vite-plugin-windicss"
import plugin from "windicss/plugin"

export default defineConfig({
  extract: {
    include: ["index.html", "src/**/*.{vue, ts, md}"],
  },
  darkMode: "class",
  theme: {
    minHeight: {
      prose: "40ch",
    },
    extend: {
      colors: {
        bittersweet: {
          '50': '#fff8f7', 
          '100': '#fff1ef', 
          '200': '#ffdbd8', 
          '300': '#ffc5c0', 
          '400': '#ff9a90', 
          '500': '#ff6f61', 
          '600': '#e66457', 
          '700': '#bf5349', 
          '800': '#99433a', 
          '900': '#7d3630'
        },
        orient: {
          '50': '#f2f8fa', 
          '100': '#e6f0f4', 
          '200': '#bfdae4', 
          '300': '#99c3d4', 
          '400': '#4d96b4', 
          '500': '#006994', 
          '600': '#005f85', 
          '700': '#004f6f', 
          '800': '#003f59', 
          '900': '#003349'
        }
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        h1: {
          // @ts-expect-error
          fontSize: theme("fontSize.2xl"),
          // @ts-expect-error
          fontWeight: theme("fontWeight.bold"),
        },
        h2: {
          // @ts-expect-error
          fontSize: theme("fontSize.xl"),
          // @ts-expect-error
          fontWeight: theme("fontWeight.bold"),
        },
        h3: {
          // @ts-expect-error
          fontSize: theme("fontSize.lg"),
          // @ts-expect-error
          fontWeight: theme("fontWeight.bold"),
        },
        h4: {
          // @ts-expect-error
          fontSize: theme("fontSize.lg"),
          // @ts-expect-error
          fontWeight: theme("fontWeight.bold"),
        },
        h5: {
          // @ts-expect-error
          fontSize: theme("fontSize.lg"),
          // @ts-expect-error
          fontWeight: theme("fontWeight.bold"),
        },
        h6: {
          // @ts-expect-error
          fontSize: theme("fontSize.lg"),
          // @ts-expect-error
          fontWeight: theme("fontWeight.bold"),
        },
      })
    }),
  ],
})
