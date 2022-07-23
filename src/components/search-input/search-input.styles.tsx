import styled from "styled-components";

export const InputBox = styled.input`
  background: none;
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 18px;
  padding: 9px 10px 9px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.text.primary};
  &:focus {
    outline: none;
  }
`;

export const Group = styled.div`
  position: relative;
`;
