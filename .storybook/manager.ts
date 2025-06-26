import { addons } from "storybook/manager-api"
import customDarkTheme from "./theme"

addons.setConfig({
  theme: customDarkTheme,
  brandTitle: "My Custom Design System",
})
