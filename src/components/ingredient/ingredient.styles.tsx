import styled from 'styled-components';


export const IngredientWrapper = styled.div`
  min-width: 300px;
  height: 40px;
  background: ${(props) => props.theme.colors.ui.secondary};
  display: flex;
  align-items: center;
  padding-left: 10px;
`

export const IconWrapper = styled.div`
  margin-left: auto;
  cursor: pointer;
`

export const IngredientText = styled.p`
  color: ${(props) => props.theme.colors.text.secondary};
`
