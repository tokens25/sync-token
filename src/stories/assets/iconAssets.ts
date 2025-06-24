export const iconMap = {
  none: "",
  defaultLight: "/icons/icon-default-dark.svg",
  defaultDark: "/icons/icon-default-dark.png",
} as const

// Export a union type of the keys
export type IconName = keyof typeof iconMap
