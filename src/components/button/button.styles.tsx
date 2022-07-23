import styled from "styled-components";
import { CustomButtonProps } from './button.component'
export const Button = styled.button<CustomButtonProps>`
  font-size: 20px;
  cursor: pointer;
  border: none;
  color: ${(props) => props.theme.colors.text.secondary};
  text-transform: uppercase;
  background-color: ${(props) => props.variant === 'submit' ? props.theme.colors.text.success : props.theme.colors.ui.secondary};
  padding: 20px;
  display: flex;
  align-items: center;
  outline: none;
  &:hover {
    transform: scale(1.1);
  }
`;