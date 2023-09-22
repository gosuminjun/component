import styled, { css } from "styled-components";
import { ButtonType, ButtonTypeProps } from "./ButtonTypes";
import { themes } from "./ButtonTheme";

function Button({ text, theme, onClick }: ButtonType): JSX.Element {
  return (
    <StyledButton theme={theme} onClick={onClick}>
      {text}
    </StyledButton>
  );
}

export default Button;

const buttonCSS = ({ theme }: ButtonTypeProps) => css`
  background-color: ${themes[theme].backgroundColor};
  color: ${themes[theme].color};
`;

const StyledButton = styled.button<ButtonTypeProps>`
  ${buttonCSS}
`;
