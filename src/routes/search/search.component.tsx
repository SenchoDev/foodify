import {
  useState,
  ChangeEvent,
  FormEvent,
  useCallback,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";

import {
  SearchContainer,
  SearchInputContainer,
  IngredientsList,
  ListContainer,
  ButtonWrapper,
} from "./search.styles";
import Input from "../../components/search-input/search-input.component";
import Button from "../../components/button/button.component";
import Ingredient from "../../components/ingredient/ingredient.component";
import { RecipesContext, Recipe } from "../../contexts/recipes.context";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

const Search = () => {
  const [search, setSearch] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const navigate = useNavigate();
  const { setRecipes } = useContext(RecipesContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const addIngredient = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (search.length === 0) return;
      setIngredients((prev) => [...prev, search]);
      setSearch("");
    },
    [search]
  );

  const deleteIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter((item) => item !== ingredient));
  };

  const getRecipes = async () => {
    if (ingredients.length === 0 || !ingredients) return;
    let formattedIngredients = ingredients.join(",+");
    try {
      let res = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=27df22d0e30e40c48c54710219e31e75&ingredients=${formattedIngredients}`
      );
      let recipes = (await res.json()) as Recipe[];
      setRecipes(recipes);
      navigate("/recipes");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SearchContainer>
      <SearchInputContainer onSubmit={addIngredient} autoComplete="off">
        <Input
          placeholder="Add Ingredients"
          required
          onChange={handleChange}
          name="Add Ingredients"
          value={search}
        />
        <Button>
          <SearchIcon fill="#615551"/>
          <span>Add</span>
        </Button>
      </SearchInputContainer>
      <ListContainer>
        <IngredientsList>
          {ingredients.length > 0 &&
            ingredients.map((ingredient, idx) => (
              <Ingredient
                ingredient={ingredient}
                key={idx}
                onDelete={() => deleteIngredient(ingredient)}
              />
            ))}
        </IngredientsList>
        <ButtonWrapper>
          <Button inverse onClick={getRecipes}>
            Search Recipes
          </Button>
        </ButtonWrapper>
      </ListContainer>
    </SearchContainer>
  );
};

export default Search;
