import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import RecipeItem from "../../components/recipe/recipe.component";
import {
  RecipesContainer,
  Title,
  RecipeItemsWrapper,
  Caption,
  HeaderWrapper,
} from "./recipes.styles";
import { RecipesContext } from "../../contexts/recipes.context";

const Recipes = () => {
  const { recipes } = useContext(RecipesContext);
  const navigate = useNavigate();

  return (
    <RecipesContainer>
      <HeaderWrapper>
        <Title>Recipes</Title>
        <Caption onClick={() => navigate(-1)}>Go to search page</Caption>
      </HeaderWrapper>

      <RecipeItemsWrapper>
        {recipes.length > 0 ? recipes
          .sort((a, b) => {
            return (
              (a.missedIngredientsCount + a.usedIngredientsCount) -
              (b.missedIngredientsCount + b.usedIngredientsCount)
            );
          })
          .map((recipe) => (
            <RecipeItem key={recipe.id} recipe={recipe} />
          )) : <p>No recipes found</p>}
      </RecipeItemsWrapper>
    </RecipesContainer>
  );
};

export default Recipes;
