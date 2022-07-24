import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
		font-size: 62.5%; 
	}
	body {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
        background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
		background-size: cover;
		min-height: 100vh;
        background-repeat: no-repeat;
	}
	a {
		text-decoration: none;
		color: black;
	}
	* {
		box-sizing: border-box;
	}
`;
