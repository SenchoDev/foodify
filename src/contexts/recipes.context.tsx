import {
  createContext,
  useState,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
} from "react";

export type Recipe = {
  id: string;
  image: string;
  title: string;
  missedIngredientsCount: number;
  usedIngredientsCount: number;
};

export type RecipesContent = {
  recipes: Recipe[];
  setRecipes: Dispatch<SetStateAction<Recipe[]>>;
};

export const RecipesContext = createContext<RecipesContent>({
  recipes: [],
  setRecipes: () => {},
});

export const RecipesProvider = ({ children }: PropsWithChildren<{}>) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const value = { recipes, setRecipes };
  return (
    <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>
  );
};
