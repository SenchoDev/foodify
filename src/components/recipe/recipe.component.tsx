import { RecipeWrapper, Title, Image } from "./recipe.styles";
import { Recipe } from "../../contexts/recipes.context";

type RecipeProps = {
  recipe: Recipe;
};

const RecipeItem = ({ recipe: { title, image } }: RecipeProps) => {
  return (
    <RecipeWrapper>
      <Title>{title}</Title>
      <Image src={image} alt={`${title}`} />
    </RecipeWrapper>
  );
};

export default RecipeItem;
