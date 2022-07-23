import styled from "styled-components";

export const RecipesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 40px;
`;

export const Caption = styled.h2`
  font-size: 20px;
  color: red;
  position: absolute;
  right: -50px;
  cursor: pointer;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  position: relative;
`;

export const RecipeItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
