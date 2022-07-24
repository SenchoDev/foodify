import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 4vw auto;
  padding: 2.5rem 0;
  max-width: 100rem;
  background-color: ${(props) =>  props.theme.colors.bg.primary};
  border-radius: 1.5rem;
`;

export const SearchInputContainer = styled.form`
  display: flex;
  height: 4.5rem;
  margin-bottom: 0.5rem;
  background-color: ${(props) =>  props.theme.colors.text.secondary};;
  border-radius: 10rem;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  margin-top: 1.5rem;
`;

export const IngredientsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
  max-height: 50rem;
  overflow-y: scroll;
`;

export const ListContainer = styled.div`
  min-height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  margin-top: 10px;
`;
