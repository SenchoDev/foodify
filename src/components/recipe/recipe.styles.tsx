import styled from "styled-components";

export const RecipeWrapper = styled.div`
  display: flex;
  width: 100%;
  background: ${(props) =>  props.theme.colors.bg.secondary};
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
`;

export const Title = styled.h3`
  font-size: 2rem;
  padding: 0 2rem;
  width: 100%;
  text-align: center;
`;

export const Image = styled.img`
  width: 15rem;
  height: 10rem;
  border-radius: 1rem;
`
