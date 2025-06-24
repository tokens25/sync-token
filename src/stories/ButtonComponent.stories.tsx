import { Meta, StoryObj } from "@storybook/react"
import { ButtonComponent } from "./Components/ButtonComponent"
import { iconMap } from "./assets/iconAssets"

const meta: Meta<typeof ButtonComponent> = {
  title: "Components/ButtonComponent",
  component: ButtonComponent,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "select", options: ["primary", "secondary", "tertiary"] },
    size: { control: "select", options: ["default", "small", "large"] },
    state: {
      control: "select",
      options: ["default", "hover", "active", "disabled"],
    },
    leftIconSrc: {
      control: "select",
      options: Object.keys(iconMap),
    },
    rightIconSrc: {
      control: "select",
      options: Object.keys(iconMap),
    },
  },
}

export default meta

type Story = StoryObj<typeof ButtonComponent>

export const Default: Story = {
  args: {
    text: "Click me",
    type: "primary",
    size: "default",
    state: "default",
    onClick: () => alert("Button clicked!"),
    leftIconSrc: "defaultLight",
    rightIconSrc: "defaultLight",
  },
}
