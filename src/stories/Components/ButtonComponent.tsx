import React from "react"
import styles from "./ButtonComponent.module.css"
// import { iconMap, IconName } from "../assets/iconAssets";

export interface ButtonComponentProps {
  text?: string
  leftIconSrc?: "icon" | "no icon" // Accept 'icon' or 'no icon'
  rightIconSrc?: "icon" | "no icon" // Accept 'icon' or 'no icon'
  size?: "default" | "small" | "large"
  type?: "primary" | "secondary" | "tertiary" | "subscribe"
  state?: "default" | "hover" | "active" | "disabled"
  onClick?: () => void
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  text,
  leftIconSrc = "no icon",
  rightIconSrc = "no icon",
  size = "default",
  type = "primary",
  state = "default",
  onClick,
}) => {
  const className = [styles.button, styles[type], styles[size], styles[state]]
    .filter(Boolean)
    .join(" ")

  // Conditionally render icon based on 'icon' or 'no icon'
  const LeftIcon =
    leftIconSrc === "icon" ? (
      <img src="/icons/icon-default-light.png" alt="left icon" />
    ) : null
  const RightIcon =
    rightIconSrc === "icon" ? (
      <img src="/icons/icon-default-light.png" alt="right icon" />
    ) : null

  const iconStyle: React.CSSProperties = {
    width: 20,
    height: 20,
    marginInline: 4,
  }

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={state === "disabled"}
    >
      {LeftIcon && <span style={iconStyle}>{LeftIcon}</span>}
      {text}
      {RightIcon && <span style={iconStyle}>{RightIcon}</span>}
    </button>
  )
}
