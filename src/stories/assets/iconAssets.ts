export const iconMap = {
  none: "",
  primary: "/icons/icon-default-dark.png",
  secondary: "/icons/icon-default-light.png",
  tertiary: "/icons/icon-default-light.png",
  subscribe: "/icons/icon-default-dark.png",
} as const

export type IconName = keyof typeof iconMap | "icon" | "no icon"
