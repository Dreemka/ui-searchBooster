export type BtnColorType =
  | "primary"
  | "blue"
  | "green"
  | "yellow"
  | "red"
  | "grey";

export type BtnVariantType = "contained" | "outlined" | "ghost";

export type BtnSizeType = "small" | "medium" | "large" | "x-large";

export interface IBtnProps {
  title?: string;
  prependIcon?: string;
  appendIcon?: string;
  disabled?: boolean;
  color?: BtnColorType;
  variant?: BtnVariantType;
  size?: BtnSizeType;
  rounded?: boolean;
  icon?: string;
  titleHTML?: string;
}
