import { addons } from "storybook/manager-api"
// import customDarkTheme from "./theme"
import { themes } from "@storybook/theming"
import "./logo-theme.css"

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: "My Design System",
    brandImage: "/logo/dazn-logo-white.svg", // fallback image
  },
  brandTitle: "My Custom Design System",
})
