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
    showLeftIcon: {
      control: "boolean",
      defaultValue: false,
    },
    showRightIcon: {
      control: "boolean",
      defaultValue: false,
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
    showLeftIcon: true,
    showRightIcon: false,
    onClick: () => alert("Button clicked!"),
  },
}
