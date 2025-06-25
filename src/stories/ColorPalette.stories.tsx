import { Meta, StoryObj } from "@storybook/react"
import { ColorPalette } from "./Components/ColorPalette"

const meta: Meta<typeof ColorPalette> = {
  title: "Design Tokens/ColorPalette",
  component: ColorPalette,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Displays a color palette based on design tokens.",
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof ColorPalette>

export const Default: Story = {
  args: {
    colors: [
      { name: "Primary", hex: "#FF0050" },
      { name: "Secondary", hex: "#FFD500" },
      { name: "Dark", hex: "#080E12" },
      { name: "Light", hex: "#F5F5F5" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "This is the default color palette for the design system. It includes the primary, secondary, dark, and light colors used across the app.",
      },
    },
  },
}
