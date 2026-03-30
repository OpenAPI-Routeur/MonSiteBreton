module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        night: {
          950: "rgb(var(--night-950) / <alpha-value>)",
          900: "rgb(var(--night-900) / <alpha-value>)",
          800: "rgb(var(--night-800) / <alpha-value>)",
          700: "rgb(var(--night-700) / <alpha-value>)",
        },
        cyber: {
          500: "rgb(var(--cyber-500) / <alpha-value>)",
          400: "rgb(var(--cyber-400) / <alpha-value>)",
          300: "rgb(var(--cyber-300) / <alpha-value>)",
          200: "rgb(var(--cyber-200) / <alpha-value>)",
          100: "rgb(var(--cyber-100) / <alpha-value>)",
        },
        signal: {
          500: "rgb(var(--signal-500) / <alpha-value>)",
          400: "rgb(var(--signal-400) / <alpha-value>)",
          300: "rgb(var(--signal-300) / <alpha-value>)",
        },
        steel: {
          300: "rgb(var(--steel-300) / <alpha-value>)",
          200: "rgb(var(--steel-200) / <alpha-value>)",
          100: "rgb(var(--steel-100) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["Gloock", "Times New Roman", "serif"],
        sans: ["IBM Plex Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        accent: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        shell: "var(--shadow-shell)",
        panel: "var(--shadow-panel)",
        glow: "var(--shadow-glow)",
      },
    },
  },
};
