import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
  }
  *,
  *:before,
  *:after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	
	font-family: Arial, Helvetica, sans-serif;
  }
`;

const theme = {
	colors: {
		primary: '#000000',
	},
};

export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
