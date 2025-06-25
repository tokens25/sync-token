export const iconMap = {
  none: "",
  primary: "/icons/icon-default-dark.svg",
  secondary: "/icons/icon-default-light.svg",
  tertiary: "/icons/icon-default-light.svg",
  subscribe: "/icons/icon-default-dark.svg",
} as const

export type IconType = keyof typeof iconMap
