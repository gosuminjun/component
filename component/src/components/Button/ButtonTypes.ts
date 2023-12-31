import { themes } from "./ButtonTheme";

export type ThemeType = {
  [key: string]: {
    backgroundColor: string;
    color: string;
  };
};

export type ButtonType = {
  width: string;
  theme: keyof ThemeType;
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type ButtonTypeProps = {
  theme: keyof typeof themes;

  width?: string;
};
