import styled from 'styled-components';

export const IngredientWrapper = styled.div`
  min-width: 42rem;
  height: 4rem;
  background: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
  display: flex;
  align-items: center;
  padding-left: 2.5rem;
  font-size: 1.6rem;
  border-radius: 2.5rem;
`

export const IconWrapper = styled.div`
  margin-left: auto;
  margin-right: 1rem;
  cursor: pointer;
`

export const IngredientText = styled.p`
  color: ${(props) =>  props.theme.colors.text.primary};
`
