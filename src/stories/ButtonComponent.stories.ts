// import React from 'react';
import { Meta, StoryObj } from "@storybook/react"
import {
  ButtonComponent,
  // ButtonComponentProps,
} from "./Components/ButtonComponent"

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
    leftIconSrc: "",
    rightIconSrc: "",
  },
}

// export const WithIcons: Story = {
//   args: {
//     text: "Icon Button",
//     leftIconSrc: "https://via.placeholder.com/16",
//     rightIconSrc: "https://via.placeholder.com/16",
//     type: "secondary",
//     size: "large",
//     state: "default",
//   },
// }

// type CustomStory = StoryObj<ButtonComponentProps>

// export const CustomStory: Story = {
//   args: {
//     text: "Hello",
//     type: "primary",
//     size: "default",
//     state: "default",
//   },
// }
