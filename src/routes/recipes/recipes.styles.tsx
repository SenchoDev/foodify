import styled from "styled-components";

export const RecipesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2vw auto;
  flex-direction: column;
  background-color: ${(props) =>  props.theme.colors.bg.primary};
  align-items: center;
  border-radius: 1rem;
  width: 80rem;
`;

export const Title = styled.h2`
  font-size: 4rem;
`;

export const Caption = styled.h2`
  font-size: 2rem;
  color: red;
  position: absolute;
  right: 2.5rem;
  cursor: pointer;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const RecipeItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;
`;
