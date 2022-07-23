import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Search from "./routes/search/search.component";
import Recipes from "./routes/recipes/recipes.component";
import { theme } from "./theme";
import { GlobalStyle } from "./global.styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
