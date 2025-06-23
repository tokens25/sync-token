import { Meta, StoryObj } from "@storybook/react"
import { fn } from "storybook/test"
import { ComponentProps } from "react"

import { Button } from "./Components/Button"

type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string
}

const meta: Meta<StoryProps> = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: {
        type: "select",
      },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "select",
      },
    },
  },
  args: {
    onClick: fn(),
    variant: "primary",
    size: "md",
    children: "Click Me", // Default button text
  },
}

export default meta

type Story = StoryObj<StoryProps>

export const Primary: Story = {
  args: {
    buttonText: "Hello",
    variant: "primary",
    size: "md",
  },
}

export const Secondary: Story = {
  args: {
    buttonText: "Hello",
    variant: "secondary",
    size: "md",
  },
}
