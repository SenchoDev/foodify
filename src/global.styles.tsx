import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Roboto';
		@media screen and (max-width: 800px) {
			padding: 10px;
		}
        background: #F3F7F9;
	}
	a {
		text-decoration: none;
		color: black;
	}
	* {
		box-sizing: border-box;
	}
`;
