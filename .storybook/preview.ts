import type { Preview } from "@storybook/react-vite"
import "../src/fonts.css"
import { themes } from "@storybook/theming"
import "./docs.css"
// import "../src/canvasStyles.css" // Import the custom canvas styles
import "../tokens/tokens.css" // Import the generated tokens CSS

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "dark", // ✅ set dark as default
      values: [
        { name: "dark", value: "#080E12" }, // your dark background
        { name: "light", value: "#ffffff" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      current: "dark", // 'light' | 'dark'
      dark: { ...themes.dark, appBg: "#080E12" },
      light: themes.normal,
    },
  },
}

export default preview
