import { Meta, StoryObj } from "@storybook/react"
import { ButtonComponent } from "./Components/ButtonComponent"

const meta: Meta<typeof ButtonComponent> = {
  title: "Components/ButtonComponent",
  component: ButtonComponent,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "subscribe"],
    },
    size: { control: "select", options: ["default", "small", "large"] },
    state: {
      control: "select",
      options: ["default", "hover", "active", "disabled"],
    },
    leftIconSrc: {
      control: "select",
      options: ["icon", "no icon"], // Only 'icon' and 'no icon' options
    },
    rightIconSrc: {
      control: "select",
      options: ["icon", "no icon"], // Only 'icon' and 'no icon' options
    },
  },
}

export default meta

type Story = StoryObj<typeof ButtonComponent>

export const Default: Story = {
  args: {
    text: "Click Me",
    type: "primary",
    size: "default",
    state: "default",
    onClick: () => alert("Button clicked!"),
    leftIconSrc: "icon", // 'icon' selected by default
    rightIconSrc: "no icon", // 'no icon' selected by default
  },
}
