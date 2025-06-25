import PrimaryIcon from "/icons/icon-default-dark.png"
import SecondaryIcon from "/icons/icon-default-light.png"
import TetriaryIcon from "/icons/icon-default-light.png"
import SubscribeIcon from "/icons/icon-default-dark.png"

export const iconMap = {
  none: null,
  primary: PrimaryIcon,
  secondary: SecondaryIcon,
  tertiary: TetriaryIcon,
  subscribe: SubscribeIcon,
} as const

// Export a union type of the keys
export type IconName = keyof typeof iconMap
