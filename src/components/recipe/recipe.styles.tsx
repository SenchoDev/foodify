import styled from "styled-components";

export const RecipeWrapper = styled.div`
  display: flex;
  width: 600px;
  background: ${(props) => props.theme.colors.bg.secondary};
  border-radius: 25px;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-size: 20px;
  padding: 0 20px;
  width: 100%;
  text-align: center;
`;
