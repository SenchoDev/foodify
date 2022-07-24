import styled from "styled-components";

export const InputBox = styled.input`
  width: 100%;
  border: none;
  background: none;
  font-family: inherit;
  color: inherit;
  font-size: 1.5rem;
  width: 26rem;
  padding: 0.5rem 1.5rem;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${(props) =>  props.theme.colors.text.tertiary};
  }
`;

export const Group = styled.div`
  position: relative;
`;
