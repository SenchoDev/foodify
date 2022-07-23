import { IngredientWrapper, IconWrapper, IngredientText } from "./ingredient.styles";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

type IngredientProps = {
  ingredient: string;
  onDelete: () => void;
};

const Ingredient = ({ ingredient, onDelete }: IngredientProps) => {
  return (
    <IngredientWrapper>
      <IngredientText>{capitalize(ingredient)}</IngredientText>
      <IconWrapper onClick={onDelete}>
        <DeleteIcon width={30} height={30} />
      </IconWrapper>
    </IngredientWrapper>
  );
};

export default Ingredient;
