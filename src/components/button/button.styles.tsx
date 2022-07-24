import styled from "styled-components";
import { CustomButtonProps } from "./button.component";

export const Button = styled.button<CustomButtonProps>`
  background: ${(props) =>
    props.inverse
      ? "#fff"
      : "linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%)"};
  border-radius: 10rem;
  border: none;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s;
  padding: 1.1rem 5rem;
  font-size: 1.6rem;

  svg {
    height: 2.5rem;
    width: 2.5rem;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;
