import styled, { css } from "styled-components";
import { ButtonType, ButtonTypeProps } from "./ButtonTypes";
import { themes } from "./ButtonTheme";

const buttonCSS = ({ theme }: ButtonTypeProps) => css`
  background-color: ${themes[theme].backgroundColor};
  color: ${themes[theme].color};
`;

const StyledButton = styled.button<ButtonTypeProps>`
  ${buttonCSS}

  width: ${(props) => props.width};
`;

function Button({ width, text, theme, onClick }: ButtonType): JSX.Element {
  return (
    <StyledButton theme={theme} width={width} onClick={onClick}>
      {text}
    </StyledButton>
  );
}

export default Button;
